# functions.py
#import internal entitities
from .models import Entry, Game, Matchup, Tbracket, Team, Region, User

#3rd party python modules
import random

#import django functions
from django.db.models import Q

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
	Set game spared and scores to 0/None
	"""
	game.spread = None
	game.team1_score = 0
	game.team2_score = 0
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

	# Reset Entry Active Teams to Original Active Teams
	for entry in Entry.objects.filter(tbracket=tbracketid):
		entry.team_a = entry.orig_team_a
		entry.team_b = entry.orig_team_b
		entry.team_c = entry.orig_team_c
		entry.team_d = entry.orig_team_d
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


def game_update(game):
	"""
	This function takes the result of a game update makes appropriate changes
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
			if (game.team1_score - (game.spread + 0.5)) > game.team2_score: # and Team1 beats spread
				owner1_retains(game, child_game1, child_game2)
			else:																		# and Team1 doesn't beat spread
				if game.team1_score > game.team2_score:  							# yet Team1 won game
					owner2_inherits(game, child_game1, child_game2)
				else:																		# and Team 1 lost game
					owner2_retains(game, child_game1, child_game2)
		
		elif game.spread < 0: 													# if Team 2 is favored
			if (game.team2_score - (-game.spread + 0.5)) > game.team1_score:# and Team2 beats spread
				owner2_retains(game, child_game1, child_game2)
			else:																		# and Team2 doesn't beat spread
				if game.team2_score > game.team1_score:								# yet Team2 won game
					owner1_inherits(game, child_game1, child_game2)
				else:																		# and Team 2 lost game
					owner1_retains(game, child_game1, child_game2)
		elif game.spread == 0: 																		# if pick'em, i.e. spread = 0
			if game.team1_score > game.team2_score: 							# and Team1 wins
				owner1_retains(game, child_game1, child_game2)
			else:  																		# and Team2 wins
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

		# Update respective entry's Active Teams based on owner1 retaining
		if game.region_id == 1:
			entry_team1.team_a=game.team1
			entry_team2.team_a=None
		if game.region_id == 2:
			entry_team1.team_b=game.team1
			entry_team2.team_b=None
		if game.region_id == 3:
			entry_team1.team_c=game.team1
			entry_team2.team_c=None
		if game.region_id == 4:
			entry_team1.team_d=game.team1
			entry_team2.team_d=None
		entry_team1.save()
		entry_team2.save()
		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team1_owner_id)
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team1_owner_id)
			
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

		# Update respective entry's Active Teams based on owner1 retaining
		if game.region_id == 1:
			entry_team1.team_a=None
			entry_team2.team_a=game.team2
		if game.region_id == 2:
			entry_team1.team_b=None
			entry_team2.team_b=game.team2
		if game.region_id == 3:
			entry_team1.team_c=None
			entry_team2.team_c=game.team2
		if game.region_id == 4:
			entry_team1.team_d=None
			entry_team2.team_d=game.team2
		entry_team1.save()
		entry_team2.save()
		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team2_owner_id)
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team2_owner_id)

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

		# Update respective entry's Active Teams based on owner1 inheriting
		if game.region_id == 1:
			entry_team1.team_a=game.team2
			entry_team2.team_a=None
		if game.region_id == 2:
			entry_team1.team_b=game.team2
			entry_team2.team_b=None
		if game.region_id == 3:
			entry_team1.team_c=game.team2
			entry_team2.team_c=None
		if game.region_id == 4:
			entry_team1.team_d=game.team2
			entry_team2.team_d=None
		entry_team1.save()
		entry_team2.save()
		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team1_owner_id)
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team1_owner_id)

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

		# Update respective entry's Active Teams based on owner2 inheriting
		if game.region_id == 1:
			entry_team1.team_a=None
			entry_team2.team_a=game.team1
		if game.region_id == 2:
			entry_team1.team_b=None
			entry_team2.team_b=game.team1
		if game.region_id == 3:
			entry_team1.team_c=None
			entry_team2.team_c=game.team1
		if game.region_id == 4:
			entry_team1.team_d=None
			entry_team2.team_d=game.team1
		entry_team1.save()
		entry_team2.save()
		# Update approprate child game with retaining owner
		if c_game1 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game1.id).update(team1_owner=match.team2_owner_id)
		if c_game2 != None:
			Matchup.objects.filter(tbracket=match.tbracket_id, game=c_game2.id).update(team2_owner=match.team2_owner_id)

	return

def find_game(x):
	"""
	x = team_id. Returns a dict with {'game_id', matchup 'owner_field' to udpate}
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