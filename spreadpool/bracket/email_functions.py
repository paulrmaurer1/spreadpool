# functions.py
#import internal entitities
from .models import Entry, Game, Matchup, Tbracket, Team, Region, User

#import django functions
from django.db.models import Q
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from django.template import Context

"""
The below functions execute lookups to populate email messages with to, from, subject, message
Templates used are located in the bracket templates directory in the folder "emails"
"""


def email_team_owners(game, outcome):
	"""
	This function prepares & sends emails to each team owner of the passed 'game'
	outcome = scenario that occurs in a game, values = 1-8 (see descriptions below near if/elif statements)
	"""
	# Find Matchups for game and use team_owner_id's to update respective Players' Active Team
	matchset = Matchup.objects.filter(game=game.id)

	email_dir = 'bracket/emails/' # directory where all txt & html email templates are located
	
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

		print ('Processing email actions...')

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
			# Construct parts of target 1 email
			subject1 = 'Congrats! Your team, ' + str(game.team1) + ', advances to the next round!'
			c1 = {'first_name':target_user1.short_name, 'team_w':game.team1, 'team_l':game.team2}
			msg1_plain = render_to_string(email_dir + 'game_result_a.txt', c1)
			msg1_html = render_to_string(email_dir + 'game_result_a.html', c1)
			
			# Construct parts of target 2 email
			subject2 = 'Your team, ' + str(game.team2) + ', didn\'t beat the spread :('
			c2 = {'first_name':target_user2.short_name, 'team_w':game.team1, 'team_l':game.team2}
			msg2_plain = render_to_string(email_dir + 'game_result_f.txt', c2)
			msg2_html = render_to_string(email_dir + 'game_result_f.html', c2)

		
		# Send email to each target of matchup if gm_updates = True
		if target_user1.gm_updates:
			send_mail(subject1, msg1_plain, settings.DEFAULT_FROM_EMAIL, [to_target1], html_message=msg1_html)
		if target_user2.gm_updates:
			send_mail(subject2, msg2_plain, settings.DEFAULT_FROM_EMAIL, [to_target2], html_message=msg2_html)
		
	return