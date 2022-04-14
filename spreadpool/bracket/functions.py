# functions.py
#import internal entitities
from .models import Entry, Game, Matchup, Tbracket, Team, Region, User
from .email_functions import email_team_owners

#3rd party python modules
import random

#import django functions
from django.db.models import Q

def getLastGame(tbracket_id, orig_teamid):
	# determine last game that an original team's owner played in a particular bracket
	# *** Deprecated in favor of "getLastGame_Team" method ***

	#get first game that team played in
	last_game = Game.objects.get((Q(team1_id=orig_teamid) | Q(team2_id=orig_teamid)) & Q(id__lte=32))
	if last_game.team1.id == int(orig_teamid):
		owner_id = Matchup.objects.get(game_id=last_game.id, tbracket_id=tbracket_id).team1_owner_id
	else:
		owner_id = Matchup.objects.get(game_id=last_game.id, tbracket_id=tbracket_id).team2_owner_id

	#run while loop to keep finding child games where owner_id is either team1 or team2 owner of related matchup
	alive=True
	while alive:
		try:
			next_game = Game.objects.get(Q(parent_game1=last_game.id) | Q(parent_game2=last_game.id))
			if owner_id == Matchup.objects.get(game_id=next_game.id, tbracket_id=tbracket_id).team1_owner_id or \
			owner_id == Matchup.objects.get(game_id=next_game.id, tbracket_id=tbracket_id).team2_owner_id:
				last_game = next_game
			else:
				alive = False
		except Game.DoesNotExist:
			alive = False

	return last_game

def getLastGame_Team(orig_teamid):
	# determine last game & team that an original team's owner played in & with in a particular bracket
	# not necessarily with that same orig_team

	#get first game that team played in
	last_team_id = int(orig_teamid)
	last_game = Game.objects.get((Q(team1_id=last_team_id) | Q(team2_id=last_team_id)) & Q(id__lte=32))
	
	alive = True
	while alive:
		winning_owner = ''

		if last_team_id == last_game.team1_id:
			owner = 'owner1'
		else:
			owner = 'owner2'
		
		if (last_game.team1_score > 0 and last_game.team2_score > 0 and last_game.team1 and last_game.team2):
		
			if last_game.team1_score > last_game.team2_score:
				winning_team_id = last_game.team1_id
			else:
				winning_team_id = last_game.team2_id

			if last_game.spread > 0: 													# if Team 1 is favored
				if (last_game.team1_score - (last_game.spread + 0.5)) > last_game.team2_score:	# and Team1 beats spread
					winning_owner = 'owner1'
				else:																# and Team1 doesn't beat spread
					winning_owner = 'owner2'
			
			elif last_game.spread < 0: 													# if Team 2 is favored
				if (last_game.team2_score - (-last_game.spread + 0.5)) > last_game.team1_score:# and Team2 beats spread
					winning_owner = 'owner2'
				else:																		# and Team2 doesn't beat spread
					winning_owner = 'owner1'
			elif last_game.spread == 0: 																		# if pick'em, i.e. spread = 0
				if last_game.team1_score > last_game.team2_score: 							# and Team1 wins
					winning_owner = 'owner1'
				else:  																		# and Team2 wins
					winning_owner = 'owner2'

		if owner == winning_owner:
			# if owner == winning_owner, repeat while loop with next game in bracket (i.e. player advances)
			try:
				next_game = Game.objects.get(Q(parent_game1=last_game.id) | Q(parent_game2=last_game.id))
			except Game.DoesNotExist:
				# Championship game doesn't have a child game so return last result
				return last_game, last_team_id

			last_team_id = winning_team_id
			last_game = next_game
			print ("last_team_id =",last_team_id,"; last_game =",last_game)
		else:
			alive = False

	return last_game, last_team_id


# def getNextUpGameString(last_game, last_matchup, tbracket_id, team_id, last_team_id):
def getNextUpGameString(last_game, last_matchup, active_team, last_team_id, player):
	# determine the Next Game status for a given Player's active team

	if (active_team is None # Team lost before the Final Four
		or (last_game.id in [61,62] and last_matchup.winner_id and player.id != last_matchup.winner_id) # User was in Final Four but lost
		or (last_game.id==63 and last_matchup.winner_id)): # User was in championship and game has concluded
		if last_game.id not in [61,62,63]: # Team lost before the Final Four in which case User's active team is null, **OUT**
			# determine which team the user owns and select the other team & owner as having lost to
			if last_game.team1_id == last_team_id:
				nextup_game = "Lost to: " + str(last_game.team2) + " (" + str(last_matchup.team2_owner) + ") with " + str(last_game.team1)
			if last_game.team2_id == last_team_id:
				nextup_game = "Lost to: " + str(last_game.team1) + " (" + str(last_matchup.team1_owner) + ") with " + str(last_game.team2)
		elif last_game.id in [61,62]: # User's last game was a Final Four game, i.e. Semi-Final
			if player.id != last_matchup.winner_id: # and User did not win
				# determine which team the user owns and select the other team & owner as having lost to
				if last_game.team1_id == last_team_id:
					nextup_game = "Lost to: " + str(last_game.team2) + " (" + str(last_matchup.team2_owner) + ") with " + str(last_game.team1)
				if last_game.team2_id == last_team_id:
					nextup_game = "Lost to: " + str(last_game.team1) + " (" + str(last_matchup.team1_owner) + ") with " + str(last_game.team2)
		else: # User's last game was the Championship game
			if player.id == last_matchup.winner_id: # User was the winner
				if player.id == last_matchup.team1_owner_id:
					# determine which team the user owns and state that won against other owner
					nextup_game = "Won against: " + str(last_matchup.team2_owner) + " with " + str(last_game.team1)
				else:
					nextup_game = "Won against: " + str(last_matchup.team1_owner) + " with " + str(last_game.team2)
			else:
				# determine which team the user owns and state that lost against the other owner
				if player.id == last_matchup.team1_owner_id:
					nextup_game = "Lost to: " + str(last_matchup.team2_owner) + " with " + str(last_game.team1)
				else: # player held team2
					nextup_game = "Lost to: " + str(last_matchup.team1_owner) + " with " + str(last_game.team2)

		# append proper Round within which last game was lost
		if (last_game.t_round <= 4):
			nextup_game += " in Round " + str(last_game.t_round)
		
		elif (last_game.t_round == 5):
			nextup_game += " in the Semi-Finals"
		
		else:
			nextup_game += " in the Championship"

		# if last game played is in Final Four round, update _region_id for proper route navigation purposes
		# region_id = last_game.region_id
	
	# if owner's team is still in it
	else:
		# append proper Round within which next game is being played
		if (last_game.t_round <= 4):
			nextup_game = "Round " + str(last_game.t_round)
		
		elif (last_game.t_round == 5):
			nextup_game = "Semi-Final"
		
		else:
			nextup_game = "Finals"

		# determine proper spread based on whether Team1 or Team 2
		if (last_game.team1_id == last_team_id and last_game.team2 is not None):
			if (last_game.spread is not None):
				if (last_game.spread > 0):
					nextup_game += " Favored by " + str(last_game.spread) + " 1/2"
				elif (last_game.spread < 0):
					nextup_game += " Underdog by " + str(abs(last_game.spread)) + " 1/2"
				elif (last_game.spread == 0):
					nextup_game += " Pick'em"
			nextup_game += " vs. " + str(last_game.team2) + " (" + str(last_matchup.team2_owner) + ")"
		# end if
		
		elif (last_game.team2_id == last_team_id and last_game.team1 is not None):
			if (last_game.spread is not None):
				if (last_game.spread < 0):
					nextup_game += " Favored by " + str(abs(last_game.spread)) + " 1/2"
				elif (last_game.spread > 0):
					nextup_game += " Underdog by " + str(last_game.spread) + " 1/2"
				elif (last_game.spread == 0):
					nextup_game += " Pick'em"
			nextup_game += " vs. " + str(last_game.team1) + " (" + str(last_matchup.team1_owner) + ")"

		# Otherwise if no opponent yet, show vs. TBD
		else:
			nextup_game += " vs. TBD"

		# Append display friendly game time & date if available
		if (last_game.tipoff_date_time is not None):
			nextup_game += " on "+'{dt.month}/{dt.day} ({dt:%a})'.format(dt=last_game.tipoff_date_time)
			nextup_game += " at "+'{dt:%I}:{dt:%M} {dt:%p}'.format(dt=last_game.tipoff_date_time)

		#if last game played is in Final Four round, update _region_id for proper route navigation purposes
		# region_id = last_matchup.region_id

	return nextup_game


def determineStatus(team_id, tbracket_id, player_id):
	# determine status, i.e. furthest/current round that team is in or whether semi-finalist or champion 
	# for EntryStandingsSerializer and subsequently display within Standings page
	status = None
	if team_id:
		latest_game = Game.objects.filter(Q(team1_id=team_id) | Q(team2_id=team_id)).order_by('-id')[0]
		if latest_game.t_round <= 4:
			status = "(Round " + str(latest_game.t_round) + ")"
		elif latest_game.t_round == 5:
			status = "(Final Four)"
		else:
			# determine champion to assign status of either Champion or Semifinalist
			related_matchup = Matchup.objects.get(tbracket_id=tbracket_id, game_id=latest_game.id)
			print ("Championship matchup is:", related_matchup, related_matchup.winner_id, player_id)
			if related_matchup.winner_id == player_id:
				status = "(Champion)"
			else:
				status = "(Semi-finalist)"
	return status


def create_entries():
	players = User.objects.exclude(username='admin') # Create entries for all users except Admin (user.id = 1)
	for player in players:
		if player.num_entries > 1:
			for i in range (player.num_entries):
				entry_name = player.username + "(" + str(i+1) + "of" + str(player.num_entries) + ')-' + player.mult_entry_type
				Entry.objects.create(player=player, e_name=entry_name)
				print (entry_name)
		else:
			entry_name = player.username
			Entry.objects.create(player=player, e_name=entry_name)
			print (entry_name)


def reset_game(gameid):
	"""
	Clear teams (except if Round 1), scores, and spread of each game; clear team_owners and winner from related Matchups
	"""
	game = Game.objects.get(id=gameid)
	# print (game, game.id, game.team1_id, game.team2_id, game.spread)
	"""
	Set game spread, scores, and tipoff_date_time to 0/None
	"""
	game.spread = None
	game.team1_score = 0
	game.team2_score = 0
	game.tipoff_date_time = None

	"""
	If game in Round 2-6, clear out Teams and all related Matchups
	Round 1 Matchups not touched...they can only be changed with
	Bracket - Reassign & Bracket - Reset actions
	"""
	if game.id > 32:
		game.team1 = None
		game.team2 = None
		related_matchups = Matchup.objects.filter(game=gameid)
		for match in related_matchups:
			match.winner = None
			match.team1_owner = None
			match.team2_owner = None
			match.save()
	game.save()
	return

def reset_rnd2to6_matchups(bracketid):
	"""
	This is used in conjunction with reset & reassign brackets to clear out matchups in Rd 2-6
	"""
	related_matchups = Matchup.objects.filter(tbracket=bracketid, game__gt=32)
	for match in related_matchups:
		match.winner = None
		match.team1_owner = None
		match.team2_owner = None
		match.save()


def reassign_bracket(tbracketid):
	"""
	Assign teams or re-assign teams randomly to entries that match the called Tbracket
	Only should perform this after Tbracket has just been created
	"""
	entry_team_assignments = {}
	seed_counter = 1
	for entry in Entry.objects.filter(tbracket=tbracketid):
		#Following line works with existing team ids:
		# entry_team_assignments[entry.id] = [entry.team_a, entry.team_b, entry.team_c, entry.team_d]
		#Following line works with teams as long as their team ids = 1 - 64:
		#If there are less entries than 16, will only randomize up to # of entries by seed in each region

		entry_team_assignments[entry.id] = [seed_counter, seed_counter+16, seed_counter+32, seed_counter+48, entry.player]
		# print (entry_team_assignments[entry.id])
		seed_counter += 1

	# assign team_id's from each region to list
	region1, region2, region3, region4 = [], [], [], []
	for entry, teams in entry_team_assignments.items():
		region1.append(teams[0])
		region2.append(teams[1])
		region3.append(teams[2])
		region4.append(teams[3])
	
	# randomly assign teams within each region
	random.shuffle(region1)
	random.shuffle(region2)
	random.shuffle(region3)
	random.shuffle(region4)
	
	#update Entry & Round 1 Matchup objects
	n = 0
	for entry, teams in entry_team_assignments.items():
		Entry.objects.filter(pk=entry).update(team_a=region1[n],team_b=region2[n],team_c=region3[n],team_d=region4[n])
		Entry.objects.filter(pk=entry).update(orig_team_a=region1[n],orig_team_b=region2[n],orig_team_c=region3[n],orig_team_d=region4[n])
		Entry.objects.filter(pk=entry).update(last_team_a=region1[n],last_team_b=region2[n],last_team_c=region3[n],last_team_d=region4[n])

		# Reset last_game to first round game assigned
		Entry.objects.filter(pk=entry).update(
			last_game_a=find_game(region1[n])['game_id'],
			last_game_b=find_game(region2[n])['game_id'],
			last_game_c=find_game(region3[n])['game_id'],
			last_game_d=find_game(region4[n])['game_id']
		)
		
		# print (find_game(region1[n])['game_id'], find_game(region1[n])['owner_field'], tbracketid, teams[4])

		if find_game(region1[n])['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region1[n])['game_id']).update(team1_owner=teams[4])
		elif find_game(region1[n])['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region1[n])['game_id']).update(team2_owner=teams[4])

		if find_game(region2[n])['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region2[n])['game_id']).update(team1_owner=teams[4])
		elif find_game(region2[n])['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region2[n])['game_id']).update(team2_owner=teams[4])
		
		if find_game(region3[n])['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region3[n])['game_id']).update(team1_owner=teams[4])
		elif find_game(region3[n])['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region3[n])['game_id']).update(team2_owner=teams[4])
		
		if find_game(region4[n])['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region4[n])['game_id']).update(team1_owner=teams[4])
		elif find_game(region4[n])['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(region4[n])['game_id']).update(team2_owner=teams[4])
					
		n += 1

	reset_rnd2to6_matchups(tbracketid);

	return

def reset_bracket(tbracketid):
	"""
		Reset all Bracket Matchup to default values
		Restore all Entry Active Teams to Original Active Teams
		Update all First Round Matchups with restored Owners
		No Games are affected
	"""
	# Reset all Bracket Matchups to their default values
	Matchup.objects.filter(tbracket=tbracketid).update(winner = None, team1_owner = None, team2_owner = None)

	# Reset Entry Active Teams & Last Teams to Original Active Teams
	for entry in Entry.objects.filter(tbracket=tbracketid):
		entry.team_a = entry.last_team_a = entry.orig_team_a
		entry.team_b = entry.last_team_b = entry.orig_team_b
		entry.team_c = entry.last_team_c = entry.orig_team_c
		entry.team_d = entry.last_team_d = entry.orig_team_d

		# Reset Entry Last Games to first round games
		entry.last_game_a = Game.objects.get(id=find_game(entry.team_a_id)['game_id'])
		entry.last_game_b = Game.objects.get(id=find_game(entry.team_b_id)['game_id'])
		entry.last_game_c = Game.objects.get(id=find_game(entry.team_c_id)['game_id'])
		entry.last_game_d = Game.objects.get(id=find_game(entry.team_d_id)['game_id'])

		entry.save()

		# Update all First Round Matchups to related Entry team_owners
		if find_game(entry.team_a_id)['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_a_id)['game_id']).update(team1_owner=entry.player)
		elif find_game(entry.team_a_id)['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_a_id)['game_id']).update(team2_owner=entry.player)

		if find_game(entry.team_b_id)['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_b_id)['game_id']).update(team1_owner=entry.player)
		elif find_game(entry.team_b_id)['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_b_id)['game_id']).update(team2_owner=entry.player)

		if find_game(entry.team_c_id)['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_c_id)['game_id']).update(team1_owner=entry.player)
		elif find_game(entry.team_c_id)['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_c_id)['game_id']).update(team2_owner=entry.player)

		if find_game(entry.team_d_id)['owner_field'] == 'team1_owner': 
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_d_id)['game_id']).update(team1_owner=entry.player)
		elif find_game(entry.team_d_id)['owner_field'] == 'team2_owner':
			Matchup.objects.filter(tbracket=tbracketid, game=find_game(entry.team_d_id)['game_id']).update(team2_owner=entry.player)

	reset_rnd2to6_matchups(tbracketid);

	return


def game_update(game, send_email):
	"""
	This function takes the result of a game update and makes appropriate changes
	game = Game entry that was updated by API call to api/games/x/
	"""

	"""
	Determine how team owners move forward with their teams and
	call appropriate function based on game outcome vs. spread
	"""
	# if a final score has been posted and teams exist for this game
	if (game.team1_score > 0 and game.team2_score > 0 and game.team1 and game.team2):
		"""
		Move winning team into next(child) game
		"""
		# Identify winning team that advances
		if game.team1_score > game.team2_score:
			winner=Team.objects.get(pk=game.team1_id)
		else:
			winner=Team.objects.get(pk=game.team2_id)
		
		# If the descendant game's parent_game1 is this game, 
		# set the team1 of descendant game to winner
		try:
			child_game1 = Game.objects.get(parent_game1=game.id)
		except Game.DoesNotExist:
			child_game1 = None

		if child_game1 != None:
			child_game1.team1=winner
			child_game1.save()

		# If the descendant game's parent_game2 is this game, 
		# set the team2 of descendant game = winner
		try:
			child_game2 = Game.objects.get(parent_game2=game.id)
		except Game.DoesNotExist:
			child_game2 = None

		if child_game2 != None:
			child_game2.team2=winner
			child_game2.save()

		"""
		Determine which owner advances and 
		(1) Update respective owners' active teams,
		(2) Update child game's corresponding Matchup to appropriate owner, and
		(3) Update related matchups winner_id
		"""

		if game.spread > 0: 													# if Team 1 is favored
			if (game.team1_score - (game.spread + 0.5)) > game.team2_score:	# and Team1 beats spread
				if (send_email):
					email_team_owners(game, 1)
				owner1_retains(game, child_game1, child_game2)
			else:																# and Team1 doesn't beat spread
				if game.team1_score > game.team2_score:  							# yet Team1 won game
					if (send_email):
						email_team_owners(game, 2)
					owner2_inherits(game, child_game1, child_game2)
				else:																		# and Team 1 lost game
					if (send_email):
						email_team_owners(game, 3)
					owner2_retains(game, child_game1, child_game2)
		
		elif game.spread < 0: 													# if Team 2 is favored
			if (game.team2_score - (-game.spread + 0.5)) > game.team1_score:# and Team2 beats spread
				if (send_email):
					email_team_owners(game, 4)
				owner2_retains(game, child_game1, child_game2)
			else:																		# and Team2 doesn't beat spread
				if game.team2_score > game.team1_score:								# yet Team2 won game
					if (send_email):
						email_team_owners(game, 5)
					owner1_inherits(game, child_game1, child_game2)
				else:																		# and Team 2 lost game
					if (send_email):
						email_team_owners(game, 6)
					owner1_retains(game, child_game1, child_game2)
		elif game.spread == 0: 																		# if pick'em, i.e. spread = 0
			if game.team1_score > game.team2_score: 							# and Team1 wins
				if (send_email):
					email_team_owners(game, 7)
				owner1_retains(game, child_game1, child_game2)
			else:  																		# and Team2 wins
				if (send_email):
					email_team_owners(game, 8)
				owner2_retains(game, child_game1, child_game2)

	return

def owner1_retains(game, c_game1, c_game2):
	"""
	No change to Entries where any active team = t1
	Set Entries' active team where any active team = t2 to Null
	Update Matchups related to Child Game with advancing Owner
	"""
	# Find Matchups for game and use team_owner_id's to update respective Players' Active Team
	matchset = Matchup.objects.filter(game=game.id)
	# For each match that's related to game
	for match in matchset:
		# Find entry that matches on bracket & game.team1
		try:
			entry_team1 = Entry.objects.get(Q(team_a=game.team1_id) | Q(team_b=game.team1_id) | Q(team_c=game.team1_id) | Q(team_d=game.team1_id), 
				tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		# Find entry that matches on bracket & game.team2
		try:
			entry_team2 = Entry.objects.get(Q(team_a=game.team2_id) | Q(team_b=game.team2_id) | Q(team_c=game.team2_id) | Q(team_d=game.team2_id),
				tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		
		print (match, entry_team1, entry_team2)
		# Update game's matchup winner_id with owner1
		match.winner=match.team1_owner
		match.save()

		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team1_owner_id)
			winner_c_game = c_game1
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team1_owner_id)
			winner_c_game = c_game2
		if c_game1 == None and c_game2 == None:
			winner_c_game = Game.objects.get(id=63)  # only game without child game is Finals

		# Update respective entry's Active Teams, Last Team & Last Game appeared based on owner1 retaining
		if game.region_id == 1:
			entry_team1.last_team_a=game.team1
			entry_team2.last_team_a=game.team2
			entry_team1.team_a=game.team1
			entry_team2.team_a=None
			entry_team1.last_game_a=winner_c_game
			entry_team2.last_game_a=game
		if game.region_id == 2:
			entry_team1.last_team_b=game.team1
			entry_team2.last_team_b=game.team2
			entry_team1.team_b=game.team1
			entry_team2.team_b=None
			entry_team1.last_game_b=winner_c_game
			entry_team2.last_game_b=game
		if game.region_id == 3:
			entry_team1.last_team_c=game.team1
			entry_team2.last_team_c=game.team2
			entry_team1.team_c=game.team1
			entry_team2.team_c=None
			entry_team1.last_game_c=winner_c_game
			entry_team2.last_game_c=game
		if game.region_id == 4:
			entry_team1.last_team_d=game.team1
			entry_team2.last_team_d=game.team2
			entry_team1.team_d=game.team1
			entry_team2.team_d=None
			entry_team1.last_game_d=winner_c_game
			entry_team2.last_game_d=game
		# if game.region_id == 5, don't do anything...owners keep teams
			
		# save entries
		entry_team1.save()
		entry_team2.save()

	return

def owner2_retains(game, c_game1, c_game2):
	"""
	No change to Entries where any active team = t2
	Set Entries' active team where any active team = t1 to Null
	Update Matchups related to Child Game with advancing Owner
	"""
	# Find Matchups for game and use team_owner_id's to update respective Players' Active Team
	matchset = Matchup.objects.filter(game=game.id)
	# For each match that's related to game
	for match in matchset:
		# Find entry that matches on bracket & game.team1
		try: entry_team1 = Entry.objects.get(Q(team_a=game.team1_id) | Q(team_b=game.team1_id) | Q(team_c=game.team1_id) | Q(team_d=game.team1_id),
			tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		# Find entry that matches on bracket & game.team2
		try: entry_team2 = Entry.objects.get(Q(team_a=game.team2_id) | Q(team_b=game.team2_id) | Q(team_c=game.team2_id) | Q(team_d=game.team2_id),
			tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		
		print (match, entry_team1, entry_team2)
		# Update game's matchup winner_id with owner2
		match.winner=match.team2_owner
		match.save()

		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team2_owner_id)
			winner_c_game = c_game1
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team2_owner_id)
			winner_c_game = c_game2
		if c_game1 == None and c_game2 == None:
			winner_c_game = Game.objects.get(id=63)  # only game without child game is Finals

		# Update respective entry's Active Teams, Last Team & Last Game appeared based on owner2 retaining
		if game.region_id == 1:
			entry_team1.last_team_a=game.team1
			entry_team2.last_team_a=game.team2
			entry_team1.team_a=None
			entry_team2.team_a=game.team2
			entry_team1.last_game_a=game
			entry_team2.last_game_a=winner_c_game
		if game.region_id == 2:
			entry_team1.last_team_b=game.team1
			entry_team2.last_team_b=game.team2
			entry_team1.team_b=None
			entry_team2.team_b=game.team2
			entry_team1.last_game_b=game
			entry_team2.last_game_b=winner_c_game
		if game.region_id == 3:
			entry_team1.last_team_c=game.team1
			entry_team2.last_team_c=game.team2
			entry_team1.team_c=None
			entry_team2.team_c=game.team2
			entry_team1.last_game_c=game
			entry_team2.last_game_c=winner_c_game
		if game.region_id == 4:
			entry_team1.last_team_d=game.team1
			entry_team2.last_team_d=game.team2
			entry_team1.team_d=None
			entry_team2.team_d=game.team2
			entry_team1.last_game_d=game
			entry_team2.last_game_d=winner_c_game
		# if game.region_id == 5, don't do anything...owners keep teams

		# save entries
		entry_team1.save()
		entry_team2.save()
		
	return

def owner1_inherits(game, c_game1, c_game2):
	"""
	Set Entries' active team where any active team = t2 to Null
	Update Matchups related to Child Game with advancing Owner
	Change Entries whose active team = t1 to inherit t2
	"""
	# Find Matchups for game and use team_owner_id's to update respective Players' Active Team
	matchset = Matchup.objects.filter(game=game.id)
	# For each match that's related to game
	for match in matchset:
		# Find entry that matches on bracket & game.team1
		try: entry_team1 = Entry.objects.get(Q(team_a=game.team1_id) | Q(team_b=game.team1_id) | Q(team_c=game.team1_id) | Q(team_d=game.team1_id),
			tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		# Find entry that matches on bracket & game.team2
		try: entry_team2 = Entry.objects.get(Q(team_a=game.team2_id) | Q(team_b=game.team2_id) | Q(team_c=game.team2_id) | Q(team_d=game.team2_id),
			tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		
		print (match, entry_team1, entry_team2)
		# Update game's matchup winner_id with owner1
		match.winner=match.team1_owner
		match.save()

		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team1_owner_id)
			winner_c_game = c_game1
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team1_owner_id)
			winner_c_game = c_game2
		if c_game1 == None and c_game2 == None:
			winner_c_game = Game.objects.get(id=63)  # only game without child game is Finals

		# Update respective entry's Active Teams, Last Team & Last Game appeared based on owner1 inheriting
		if game.region_id == 1:
			entry_team1.last_team_a=game.team2
			entry_team2.last_team_a=game.team1
			entry_team1.team_a=game.team2
			entry_team2.team_a=None
			entry_team1.last_game_a=winner_c_game
			entry_team2.last_game_a=game
		if game.region_id == 2:
			entry_team1.last_team_b=game.team2
			entry_team2.last_team_b=game.team1
			entry_team1.team_b=game.team2
			entry_team2.team_b=None
			entry_team1.last_game_b=winner_c_game
			entry_team2.last_game_b=game
		if game.region_id == 3:
			entry_team1.last_team_c=game.team2
			entry_team2.last_team_c=game.team1
			entry_team1.team_c=game.team2
			entry_team2.team_c=None
			entry_team1.last_game_c=winner_c_game
			entry_team2.last_game_c=game
		if game.region_id == 4:
			entry_team1.last_team_d=game.team2
			entry_team2.last_team_d=game.team1
			entry_team1.team_d=game.team2
			entry_team2.team_d=None
			entry_team1.last_game_d=winner_c_game
			entry_team2.last_game_d=game
		if game.region_id == 5:
		# If Final Four team, swap teams so that both owners retain a team for Standings purposes
			if entry_team1.team_a_id == game.team1_id:
				entry_team1.team_a=game.team2
				entry_team1.last_team_a=game.team2
				entry_team1.last_game_a=winner_c_game
			elif entry_team1.team_b_id == game.team1_id:
				entry_team1.team_b=game.team2
				entry_team1.last_team_b=game.team2
				entry_team1.last_game_b=winner_c_game
			elif entry_team1.team_c_id == game.team1_id:
				entry_team1.team_c=game.team2
				entry_team1.last_team_c=game.team2
				entry_team1.last_game_c=winner_c_game
			elif entry_team1.team_d_id == game.team1_id:
				entry_team1.team_d=game.team2
				entry_team1.last_team_d=game.team2
				entry_team1.last_game_d=winner_c_game

			if entry_team2.team_a_id == game.team2_id:
				entry_team2.team_a=game.team1
				entry_team2.last_team_a=game.team1
				entry_team2.last_game_a=game
			elif entry_team2.team_b_id == game.team2_id:
				entry_team2.team_b=game.team1
				entry_team2.last_team_b=game.team1
				entry_team2.last_game_b=game
			elif entry_team2.team_c_id == game.team2_id:
				entry_team2.team_c=game.team1
				entry_team2.last_team_c=game.team1
				entry_team2.last_game_c=game
			elif entry_team2.team_d_id == game.team2_id:
				entry_team2.team_d=game.team1
				entry_team2.last_team_d=game.team1
				entry_team2.last_game_d=game
		
		# save entries
		entry_team1.save()
		entry_team2.save()

	return

def owner2_inherits(game, c_game1, c_game2):
	"""
	Set Entries' active team where any active team = t1 to Null
	Update Matchups related to Child Game with advancing Owner
	Change Entries whose active team = t2 to inherit t1
	"""
	# Find Matchups for game and use team_owner_id's to update respective Players' Active Team
	matchset = Matchup.objects.filter(game=game.id)
	# For each match that's related to game
	for match in matchset:
		# Find entry that matches on bracket & game.team1
		try: entry_team1 = Entry.objects.get(Q(team_a=game.team1_id) | Q(team_b=game.team1_id) | Q(team_c=game.team1_id) | Q(team_d=game.team1_id),
			tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		# Find entry that matches on bracket & game.team2
		try: entry_team2 = Entry.objects.get(Q(team_a=game.team2_id) | Q(team_b=game.team2_id) | Q(team_c=game.team2_id) | Q(team_d=game.team2_id),
			tbracket=match.tbracket_id)
		except Entry.DoesNotExist:
			continue
		
		print (match, entry_team1, entry_team2)
		# Update game's matchup winner_id with owner2
		match.winner=match.team2_owner
		match.save()

		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team2_owner_id)
			winner_c_game = c_game1
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team2_owner_id)
			winner_c_game = c_game2
		if c_game1 == None and c_game2 == None:
			winner_c_game = Game.objects.get(id=63)  # only game without child game is Finals

		# Update respective entry's Active Teams, Last Team & Last Game appeared based on owner2 inheriting
		if game.region_id == 1:
			entry_team1.last_team_a=game.team2
			entry_team2.last_team_a=game.team1
			entry_team1.team_a=None
			entry_team2.team_a=game.team1
			entry_team1.last_game_a=game
			entry_team2.last_game_a=winner_c_game
		if game.region_id == 2:
			entry_team1.last_team_b=game.team2
			entry_team2.last_team_b=game.team1
			entry_team1.team_b=None
			entry_team2.team_b=game.team1
			entry_team1.last_game_b=game
			entry_team2.last_game_b=winner_c_game
		if game.region_id == 3:
			entry_team1.last_team_c=game.team2
			entry_team2.last_team_c=game.team1
			entry_team1.team_c=None
			entry_team2.team_c=game.team1
			entry_team1.last_game_c=game
			entry_team2.last_game_c=winner_c_game
		if game.region_id == 4:
			entry_team1.last_team_d=game.team2
			entry_team2.last_team_d=game.team1
			entry_team1.team_d=None
			entry_team2.team_d=game.team1
			entry_team1.last_game_d=game
			entry_team2.last_game_d=winner_c_game
		if game.region_id == 5:
		# If Final Four team, swap teams so that both owners retain a team for Standings purposes
			if entry_team1.team_a_id == game.team1_id:
				entry_team1.team_a=game.team2
				entry_team1.last_team_a=game.team2
				entry_team1.last_game_a=game
			elif entry_team1.team_b_id == game.team1_id:
				entry_team1.team_b=game.team2
				entry_team1.last_team_b=game.team2
				entry_team1.last_game_b=game
			elif entry_team1.team_c_id == game.team1_id:
				entry_team1.team_c=game.team2
				entry_team1.last_team_c=game.team2
				entry_team1.last_game_c=game
			elif entry_team1.team_d_id == game.team1_id:
				entry_team1.team_d=game.team2
				entry_team1.last_team_d=game.team2
				entry_team1.last_game_d=game

			if entry_team2.team_a_id == game.team2_id:
				entry_team2.team_a=game.team1
				entry_team2.last_team_a=game.team1
				entry_team2.last_game_a=winner_c_game
			elif entry_team2.team_b_id == game.team2_id:
				entry_team2.team_b=game.team1
				entry_team2.last_team_b=game.team1
				entry_team2.last_game_b=winner_c_game
			elif entry_team2.team_c_id == game.team2_id:
				entry_team2.team_c=game.team1
				entry_team2.last_team_c=game.team1
				entry_team2.last_game_c=winner_c_game
			elif entry_team2.team_d_id == game.team2_id:
				entry_team2.team_d=game.team1
				entry_team2.last_team_d=game.team1
				entry_team2.last_game_d=winner_c_game
		
		# save entries
		entry_team1.save()
		entry_team2.save()
		
	return

def find_game(x):
	"""
	x = team_id. Returns a dict with {'game_id', matchup 'owner_field'} to update
	For purpose of updating related First Round matchup game when Brackets are
	Reassigned or Reset
	"""
	return {
		1: {'game_id': 1, 'owner_field': 'team1_owner'},
		2: {'game_id': 8, 'owner_field': 'team1_owner'},
		3: {'game_id': 6, 'owner_field': 'team1_owner'},
		4: {'game_id': 4, 'owner_field': 'team1_owner'},
		5: {'game_id': 3, 'owner_field': 'team1_owner'},
		6: {'game_id': 5, 'owner_field': 'team1_owner'},
		7: {'game_id': 7, 'owner_field': 'team1_owner'},
		8: {'game_id': 2, 'owner_field': 'team1_owner'},
		9: {'game_id': 2, 'owner_field': 'team2_owner'},
		10: {'game_id': 7, 'owner_field': 'team2_owner'},
		11: {'game_id': 5, 'owner_field': 'team2_owner'},
		12: {'game_id': 3, 'owner_field': 'team2_owner'},
		13: {'game_id': 4, 'owner_field': 'team2_owner'},
		14: {'game_id': 6, 'owner_field': 'team2_owner'},
		15: {'game_id': 8, 'owner_field': 'team2_owner'},
		16: {'game_id': 1, 'owner_field': 'team2_owner'},
		17: {'game_id': 9, 'owner_field': 'team1_owner'},
		18: {'game_id': 16, 'owner_field': 'team1_owner'},
		19: {'game_id': 14, 'owner_field': 'team1_owner'},
		20: {'game_id': 12, 'owner_field': 'team1_owner'},
		21: {'game_id': 11, 'owner_field': 'team1_owner'},
		22: {'game_id': 13, 'owner_field': 'team1_owner'},
		23: {'game_id': 15, 'owner_field': 'team1_owner'},
		24: {'game_id': 10, 'owner_field': 'team1_owner'},
		25: {'game_id': 10, 'owner_field': 'team2_owner'},
		26: {'game_id': 15, 'owner_field': 'team2_owner'},
		27: {'game_id': 13, 'owner_field': 'team2_owner'},
		28: {'game_id': 11, 'owner_field': 'team2_owner'},
		29: {'game_id': 12, 'owner_field': 'team2_owner'},
		30: {'game_id': 14, 'owner_field': 'team2_owner'},
		31: {'game_id': 16, 'owner_field': 'team2_owner'},
		32: {'game_id': 9, 'owner_field': 'team2_owner'},
		33: {'game_id': 17, 'owner_field': 'team1_owner'},
		34: {'game_id': 24, 'owner_field': 'team1_owner'},
		35: {'game_id': 22, 'owner_field': 'team1_owner'},
		36: {'game_id': 20, 'owner_field': 'team1_owner'},
		37: {'game_id': 19, 'owner_field': 'team1_owner'},
		38: {'game_id': 21, 'owner_field': 'team1_owner'},
		39: {'game_id': 23, 'owner_field': 'team1_owner'},
		40: {'game_id': 18, 'owner_field': 'team1_owner'},
		41: {'game_id': 18, 'owner_field': 'team2_owner'},
		42: {'game_id': 23, 'owner_field': 'team2_owner'},
		43: {'game_id': 21, 'owner_field': 'team2_owner'},
		44: {'game_id': 19, 'owner_field': 'team2_owner'},
		45: {'game_id': 20, 'owner_field': 'team2_owner'},
		46: {'game_id': 22, 'owner_field': 'team2_owner'},
		47: {'game_id': 24, 'owner_field': 'team2_owner'},
		48: {'game_id': 17, 'owner_field': 'team2_owner'},
		49: {'game_id': 25, 'owner_field': 'team1_owner'},
		50: {'game_id': 32, 'owner_field': 'team1_owner'},
		51: {'game_id': 30, 'owner_field': 'team1_owner'},
		52: {'game_id': 28, 'owner_field': 'team1_owner'},
		53: {'game_id': 27, 'owner_field': 'team1_owner'},
		54: {'game_id': 29, 'owner_field': 'team1_owner'},
		55: {'game_id': 31, 'owner_field': 'team1_owner'},
		56: {'game_id': 26, 'owner_field': 'team1_owner'},
		57: {'game_id': 26, 'owner_field': 'team2_owner'},
		58: {'game_id': 31, 'owner_field': 'team2_owner'},
		59: {'game_id': 29, 'owner_field': 'team2_owner'},
		60: {'game_id': 27, 'owner_field': 'team2_owner'},
		61: {'game_id': 28, 'owner_field': 'team2_owner'},
		62: {'game_id': 30, 'owner_field': 'team2_owner'},
		63: {'game_id': 32, 'owner_field': 'team2_owner'},
		64: {'game_id': 25, 'owner_field': 'team2_owner'},
	}.get(x, {'game_id': 0, 'owner_field': ''})

def getFriendlyDate(storedDate):
	# Convert the stored tipoff_date_time to a front-end friendly date

	friendlyDate = '{dt.month}/{dt.day} ({dt:%a})'.format(dt=storedDate)

	return friendlyDate

def getFriendlyTime(storedDate):
	# Convert the stored tipoff_date_time to a front-end friendly time

	friendlyTime = '{dt:%I}:{dt:%M} {dt:%p}'.format(dt=storedDate)

	return friendlyTime