# functions.py
#import internal entitities
from .models import Entry, Game, Matchup, Tbracket, Team, Region, User
from .core_functions import getFriendlyDate, getFriendlyTime
import openai

#import django functions
from django.db.models import Q
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from django.template import Context

from django.conf import settings

"""
The below functions execute lookups to populate email messages with to, from, subject, message
Templates used are located in the bracket templates directory in the folder "emails"
"""
def email_thanks_for_paying(player):
	"""
	This funcion prepares & sends an email to the player who just registered with key info about 
	how to change profile, payment details, and key days/times on timeline
	"""
	email_dir = 'bracket/emails/' # directory where all txt & html email templates are located

	# context elements for email
	c = {
		'first_name': player.first_name,
		'full_name': player.full_name,
		'num_entries': player.num_entries,
		'mult_entry_type': player.mult_entry_type,
		'target_email': player.email,
		'payment': player.num_entries * 20,
	}

	subject = '{}, thanks for your Spreadpool payment!'.format(player.first_name)
	msg_plain = render_to_string(email_dir + 'thx_payment.txt', c)
	msg_html = render_to_string(email_dir + 'thx_payment.html', c)

	# print (c)
	send_mail(subject, msg_plain, settings.DEFAULT_FROM_EMAIL, [player.email], html_message=msg_html)

	return

def email_registration_info(player_id):
	"""
	This funcion prepares & sends an email to the player who just registered with key info about 
	how to change profile, payment details, and key days/times on timeline
	"""
	email_dir = 'bracket/emails/' # directory where all txt & html email templates are located

	player = User.objects.get(id=player_id)

	# context elements for email
	c = {
		'first_name': player.first_name,
		'full_name': player.full_name,
		'num_entries': player.num_entries,
		'mult_entry_type': player.mult_entry_type,
		'target_email': player.email,
	}

	subject = 'NCAA Spreadpool registration for {} successfully processed!'.format(player.full_name)
	msg_plain = render_to_string(email_dir + 'register_info.txt', c)
	msg_html = render_to_string(email_dir + 'register_info.html', c)

	# print (c)
	send_mail(subject, msg_plain, settings.DEFAULT_FROM_EMAIL, [player.email], html_message=msg_html)

	return

def email_spreads(tbracket_id, tround):
	"""
	This function prepares & sends emails to each team owner for games in which their team is playing. This function
	is called by the @action:email_spreads_to_owners within the GameViewSet. Only owners in the specified tbracket_id
	and games within the specified tround who have games where the spread is set (i.e. no Null) and team scores=0
	"""
	email_dir = 'bracket/emails/' # directory where all txt & html email templates are located

	print ("tbracket_id =", tbracket_id, " & tround =", tround)

	# only include games that have had a spread posted but game is not complete (scores = 0)
	games = Game.objects.filter(t_round=tround).filter(spread__isnull=False).filter(team1_score=0).filter(team2_score=0).order_by('tipoff_date_time')
	
	# build a dict of user_id : [match_ids] for matches in which an owner is involved in games
	user_matches = {}

	for game in games:
		matches = Matchup.objects.filter(game_id=game.id)
		if tbracket_id != "9999":
			matches = matches.filter(tbracket_id=tbracket_id)
	
		for match in matches:
			u1 = match.team1_owner_id
			u2 = match.team2_owner_id
			if u1 in user_matches:
				user_matches[u1].append(match.id)
			else:
				user_matches[u1] = [match.id]
			if u2 in user_matches:
				user_matches[u2].append(match.id)
			else:
				user_matches[u2] = [match.id]

	print ("The user_matches dict is: ", user_matches)

	# prepare email content for each target
	for key, value in user_matches.items():
		target = User.objects.get(id = key)
		
		# email address of target user
		to_target = target.email
		to_target_first_name = target.first_name
		
		# iterate through games (max 4) and prepare email body
		game_bullet_list = ''
		for match_id in value:
			match = Matchup.objects.get(id=match_id)
			game = Game.objects.get(id=match.game_id)
			u1 = User.objects.get(id=match.team1_owner_id)
			u2 = User.objects.get(id=match.team2_owner_id)
			if game.spread > 0:
				game_bullet_list += '<li>'+str(game.team1)+' ('+str(u1)+') ['+str(-game.spread)+'.5] vs. '+str(game.team2)+' ('+str(u2)+')'
			elif game.spread == 0:
				game_bullet_list += '<li>'+str(game.team1)+' ('+str(u1)+') [PICK EM] vs. '+str(game.team2)+' ('+str(u2)+')'
			else:
				game_bullet_list += '<li>'+str(game.team1)+' ('+str(u1)+') vs. '+str(game.team2)+' ('+str(u2)+') ['+str(game.spread)+'.5]'

			if game.tipoff_date_time:
				game_bullet_list += ' at '+getFriendlyTime(game.tipoff_date_time)+' on '+getFriendlyDate(game.tipoff_date_time)+'</li>'
			else:
				game_bullet_list += '</li>'
				
		bracket = Tbracket.objects.get(id=tbracket_id)

		print ("Games for :", to_target_first_name)
		print (game_bullet_list)

		# context elements for email
		c = {
			'first_name': to_target_first_name,
			'target_email': to_target,
			'bracket_name': bracket.name,
			't_round' : tround,
			'game_bullet_list' : game_bullet_list,
		}

		subject = 'Here are your {} Bracket, Round {} matchups for today. Good luck!'.format(bracket.name, str(tround))
		msg_plain = render_to_string(email_dir + 'today_matches.txt', c)
		msg_html = render_to_string(email_dir + 'today_matches.html', c)

		if target.gm_updates:
			# print (c)
			send_mail(subject, msg_plain, settings.DEFAULT_FROM_EMAIL, [to_target], html_message=msg_html)

	return


def email_original_teams(tbracket_id):
	"""
	This function prepares & sends emails to each team owner of entries within the passed 'tbracket_id'
	If tbracket_id = 0, send emails to every bracket's entries.
	If the same user owns multiple teams within a single bracket, combine that information into a single email
	"""
	email_dir = 'bracket/emails/' # directory where all txt & html email templates are located

	if tbracket_id == "9999":
		entries = Entry.objects.all()
	else:
		entries = Entry.objects.filter(tbracket=tbracket_id)

	for entry in entries:
		target = User.objects.get(id = entry.player_id)
		to_target = target.email
		bracket = Tbracket.objects.get(id=entry.tbracket_id)
		orig_team_a = Team.objects.get(id=entry.orig_team_a_id)
		orig_team_b = Team.objects.get(id=entry.orig_team_b_id)
		orig_team_c = Team.objects.get(id=entry.orig_team_c_id)
		orig_team_d = Team.objects.get(id=entry.orig_team_d_id)
		
		c = {
				'first_name': target.first_name,
				'target_email': to_target,
				'bracket_name' : bracket.name,
				'bracket_id': bracket.id,
				'orig_team_a': orig_team_a.bracket_name,
				'orig_team_a_region': Region.objects.get(id=orig_team_a.region_id).name,
				'orig_team_a_univ': orig_team_a.school,
				'orig_team_a_long_name': orig_team_a.long_name,
				'orig_team_b': orig_team_b.bracket_name,
				'orig_team_b_region': Region.objects.get(id=orig_team_b.region_id).name,
				'orig_team_b_univ': orig_team_b.school,
				'orig_team_b_long_name': orig_team_b.long_name,
				'orig_team_c': orig_team_c.bracket_name,
				'orig_team_c_region': Region.objects.get(id=orig_team_c.region_id).name,
				'orig_team_c_univ': orig_team_c.school,
				'orig_team_c_long_name': orig_team_c.long_name,
				'orig_team_d': orig_team_d.bracket_name,
				'orig_team_d_region': Region.objects.get(id=orig_team_d.region_id).name,
				'orig_team_d_univ': orig_team_d.school,
				'orig_team_d_long_name': orig_team_d.long_name,
			}

		subject = 'Here are your 4 teams for the 2020 Spreadpool in bracket <' + str(bracket.name) + '>. Good luck!'
		msg_plain = render_to_string(email_dir + 'original_teams.txt', c)
		msg_html = render_to_string(email_dir + 'original_teams.html', c)

		if target.gm_updates:
			# print (c)
			send_mail(subject, msg_plain, settings.DEFAULT_FROM_EMAIL, [to_target], html_message=msg_html)

	return


def email_team_owners(game, outcome):
	"""
	This function prepares & sends emails to each team owner of the passed 'game'
	'outcome' = scenario that occurs in a game, values = 1-8 (see descriptions below near if/elif statements)
	"""
	# Find Matchups for game and use team_owner_id's to update respective Players' Active Team
	matchset = Matchup.objects.filter(game=game.id)

	email_dir = 'bracket/emails/' # directory where all txt & html email templates are located

	# ChatGPT3 base settings
	openai.api_key = settings.OPENAI_API_KEY
	openai.organization = settings.OPENAI_ORG_ID
	
	# For each match that's related to game
	for match in matchset:
		# Make sure owner entry exists that matches on bracket & game.team1, otherwise leave for loop
		try:
			entry_team1 = Entry.objects.get(Q(team_a=game.team1_id) | Q(team_b=game.team1_id) | Q(team_c=game.team1_id) | Q(team_d=game.team1_id), 
				tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		# Make sure owner entry exists that matches on bracket & game.team2, otherwise leave for loop
		try:
			entry_team2 = Entry.objects.get(Q(team_a=game.team2_id) | Q(team_b=game.team2_id) | Q(team_c=game.team2_id) | Q(team_d=game.team2_id),
				tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue

		# print ('Processing email actions...')
		"""
		Retrieve standard send_mail components across outcomes
		"""
		target_user1 = User.objects.get(id=match.team1_owner_id)
		to_target1 = target_user1.email
		target_user2 = User.objects.get(id=match.team2_owner_id)
		to_target2 = target_user2.email

		if outcome == 1:
			"""
			When Team 1 (of game) is favored, wins, and covers spread
			Team 2 (of game) loses, doesn't beat spread, doesn't advance
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team1,
				'team_l':game.team2,
				'team_w_score':game.team1_score,
				'team_l_score':game.team2_score,
				'bracket_id':match.tbracket_id,
				'spread':game.spread,
				'win_first_name':target_user1.first_name,
				'win_short_name':target_user1.short_name,
				'lose_first_name':target_user2.first_name,
				'lose_short_name':target_user2.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Congrats! Your team, ' + str(game.team1) + ', advances to the next round!'
			if (settings.CHATGPT3_ON):
				completion = openai.Completion.create(
					engine=settings.CHATGPT3_MODEL,
					prompt="Inform Dave that he just won a bet where the odds were long in 3 sentences",
					max_tokens=60,
					temperature=settings.CHATGPT3_TEMPERATURE,
				)
				msg1_plain = completion.choices[0].text
				print ("ChatGPT3 in use! -->", msg1_plain)
			else:
				print ("ChatGPT3 not in use :-(")
				msg1_plain = render_to_string(email_dir + 'game_result_a.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_a.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Your team, ' + str(game.team2) + ', didn\'t beat the spread :('
			msg2_plain = render_to_string(email_dir + 'game_result_f.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_f.html', c2)

		elif outcome == 2:
			"""
			When Team 1 (of game) is favored, wins, but doesn't cover spread
			Team 2 (of game) loses but beats spread and advances
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team1,
				'team_l':game.team2,
				'team_w_score':game.team1_score,
				'team_l_score':game.team2_score,
				'bracket_id':match.tbracket_id,
				'spread':game.spread,
				'win_first_name':target_user1.first_name,
				'win_short_name':target_user1.short_name,
				'lose_first_name':target_user2.first_name,
				'lose_short_name':target_user2.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Your team, ' + str(game.team1) + ', won but didn\'t cover the spread :('
			msg1_plain = render_to_string(email_dir + 'game_result_e.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_e.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Good news! Your team, ' + str(game.team2) + ', lost but covered the spread'
			msg2_plain = render_to_string(email_dir + 'game_result_b.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_b.html', c2)

		elif outcome == 3:
			"""
			When Team 1 (of game) is favored but loses and won't advance
			Team 2 (of game) wins and advances
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team2,
				'team_l':game.team1,
				'team_w_score':game.team2_score,
				'team_l_score':game.team1_score,
				'bracket_id':match.tbracket_id,
				'spread':game.spread,
				'win_first_name':target_user2.first_name,
				'win_short_name':target_user2.short_name,
				'lose_first_name':target_user1.first_name,
				'lose_short_name':target_user1.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Your team, ' + str(game.team1) + ', lost and won\'t advance :('
			msg1_plain = render_to_string(email_dir + 'game_result_g.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_g.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Unbelievable. Your team, ' + str(game.team2) + ', won despite being an underdog!'
			msg2_plain = render_to_string(email_dir + 'game_result_c.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_c.html', c2)

		if outcome == 4:
			"""
			When Team 2 (of game) is favored, wins, and covers spread
			Team 1 (of game) loses, doesn't beat spread, doesn't advance
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team2,
				'team_l':game.team1,
				'team_w_score':game.team2_score,
				'team_l_score':game.team1_score,
				'bracket_id':match.tbracket_id,
				'spread':-game.spread,
				'win_first_name':target_user2.first_name,
				'win_short_name':target_user2.short_name,
				'lose_first_name':target_user1.first_name,
				'lose_short_name':target_user1.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Your team, ' + str(game.team1) + ', didn\'t beat the spread :('
			msg1_plain = render_to_string(email_dir + 'game_result_f.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_f.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Congrats! Your team, ' + str(game.team2) + ', advances to the next round!'
			msg2_plain = render_to_string(email_dir + 'game_result_a.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_a.html', c2)

		elif outcome == 5:
			"""
			When Team 2 (of game) is favored, wins, but doesn't cover spread
			Team 1 (of game) loses but beats spread and advances
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team2,
				'team_l':game.team1,
				'team_w_score':game.team2_score,
				'team_l_score':game.team1_score,
				'bracket_id':match.tbracket_id,
				'spread':-game.spread,
				'win_first_name':target_user2.first_name,
				'win_short_name':target_user2.short_name,
				'lose_first_name':target_user1.first_name,
				'lose_short_name':target_user1.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Good news! Your team, ' + str(game.team1) + ', lost but covered the spread'
			msg1_plain = render_to_string(email_dir + 'game_result_b.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_b.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Your team, ' + str(game.team2) + ', won but didn\'t cover the spread :('
			msg2_plain = render_to_string(email_dir + 'game_result_e.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_e.html', c2)

		elif outcome == 6:
			"""
			When Team 2 (of game) is favored but loses and won't advance
			Team 1 (of game) wins and advances
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team1,
				'team_l':game.team2,
				'team_w_score':game.team1_score,
				'team_l_score':game.team2_score,
				'bracket_id':match.tbracket_id,
				'spread':-game.spread,
				'win_first_name':target_user1.first_name,
				'win_short_name':target_user1.short_name,
				'lose_first_name':target_user2.first_name,
				'lose_short_name':target_user2.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Unbelievable. Your team, ' + str(game.team1) + ', won despite being an underdog!'
			msg1_plain = render_to_string(email_dir + 'game_result_c.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_c.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Your team, ' + str(game.team2) + ', lost and won\'t advance :('
			msg2_plain = render_to_string(email_dir + 'game_result_g.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_g.html', c2)

		elif outcome == 7:
			"""
			When Team 1 (of game) & Team 2 are pick'ems
			and Team 1 wins
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team1,
				'team_l':game.team2,
				'team_w_score':game.team1_score,
				'team_l_score':game.team2_score,
				'bracket_id':match.tbracket_id,
				'spread':game.spread,
				'win_first_name':target_user1.first_name,
				'win_short_name':target_user1.short_name,
				'lose_first_name':target_user2.first_name,
				'lose_short_name':target_user2.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Woohoo! Your team, ' + str(game.team1) + ', won a pick\'em game!'
			msg1_plain = render_to_string(email_dir + 'game_result_d.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_d.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Your team, ' + str(game.team2) + ', will not advance to the next round :('
			msg2_plain = render_to_string(email_dir + 'game_result_h.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_h.html', c2)

		elif outcome == 8:
			"""
			When Team 1 (of game) & Team 2 are pick'ems
			and Team 2 wins
			"""
			# common context elements to both emails
			c = {
				'team_w':game.team2,
				'team_l':game.team1,
				'team_w_score':game.team2_score,
				'team_l_score':game.team1_score,
				'bracket_id':match.tbracket_id,
				'spread':game.spread,
				'win_first_name':target_user2.first_name,
				'win_short_name':target_user2.short_name,
				'lose_first_name':target_user1.first_name,
				'lose_short_name':target_user1.short_name,
			}

			# Construct parts of target 1 email
			c1 = {
				'target_email':to_target1,
			}
			c1.update(c)  # merge context elements specific to target1 email
			subject1 = 'Your team, ' + str(game.team1) + ', will not advance to the next round :('
			msg1_plain = render_to_string(email_dir + 'game_result_h.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_h.html', c1)
			
			# Construct parts of target 2 email
			c2 = {
				'target_email':to_target2,
			}
			c2.update(c)  # merge context elements specific to target2 email
			subject2 = 'Woohoo! Your team, ' + str(game.team2) + ', won a pick\'em game!'
			msg2_plain = render_to_string(email_dir + 'game_result_d.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_d.html', c2)

		# Send email to each target of matchup if gm_updates = True
		if target_user1.gm_updates:
			send_mail(subject1, msg1_plain, settings.DEFAULT_FROM_EMAIL, [to_target1], html_message=msg1_html)
		if target_user2.gm_updates:
			send_mail(subject2, msg2_plain, settings.DEFAULT_FROM_EMAIL, [to_target2], html_message=msg2_html)
		
	return

"""
Need to have these functions here as well as in functions.py because of circular reference
Put in separate file and import from both function.py & email_functions.py?
"""
# def getFriendlyDate(storedDate):
# 	# Convert the stored tipoff_date_time to a front-end friendly date

# 	friendlyDate = '{dt.month}/{dt.day} ({dt:%a})'.format(dt=storedDate)

# 	return friendlyDate

# def getFriendlyTime(storedDate):
# 	# Convert the stored tipoff_date_time to a front-end friendly time

# 	friendlyTime = '{dt:%I}:{dt:%M} {dt:%p}'.format(dt=storedDate)

# 	return friendlyTime