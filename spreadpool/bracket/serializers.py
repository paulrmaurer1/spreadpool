from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from django.forms import IntegerField
from rest_framework import serializers
from django.db.models import Q
import threading

from .models import Entry, Game, Matchup, Tbracket, Region, Team
from .functions import game_update, determineStatus, getLastGame_Team, getNextUpGameString
from .email_functions import email_thanks_for_paying
from .core_functions import getFriendlyDate, getFriendlyTime

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'url', 'username', 'email', 'full_name', 'first_name', \
			'last_name', 'num_entries', 'mult_entry_type', 'is_staff', 'paid', 'gm_updates')

	def update(self, instance, validated_data):
		instance.first_name = validated_data.get('first_name', instance.first_name)
		instance.last_name = validated_data.get('last_name', instance.last_name)
		instance.email = validated_data.get('email', instance.email)
		instance.num_entries = validated_data.get('num_entries', instance.num_entries)
		instance.mult_entry_type = validated_data.get('mult_entry_type', instance.mult_entry_type)
		instance.gm_updates = validated_data.get('gm_updates', instance.gm_updates)
		# Before updating 'paid' value, check to see if update is changing value from false (not paid) to true (paid)
		# then trigger "thank you for paying email"
		if (instance.paid == False and validated_data['paid'] == True):
			email_thanks_for_paying(instance)
			# print ("Existing Paid value is:", instance.paid, "Updated value is:", validated_data['paid'],)
		instance.paid = validated_data.get('paid', instance.paid)
		instance.save()
		return instance


class GroupSerializer(serializers.HyperlinkedModelSerializer):
		class Meta:
				model = Group
				fields = ('url', 'name')

class EntrySerializer(serializers.ModelSerializer):
	# Modify GET results to show '__str__' defined in Models
	orig_team_a = serializers.StringRelatedField()
	orig_team_b = serializers.StringRelatedField()
	orig_team_c = serializers.StringRelatedField()
	orig_team_d = serializers.StringRelatedField()
	team_a = serializers.StringRelatedField()
	team_b = serializers.StringRelatedField()
	team_c = serializers.StringRelatedField()
	team_d = serializers.StringRelatedField()
	player = serializers.StringRelatedField()
	tbracket = serializers.StringRelatedField()
	
	class Meta:
		model = Entry
		fields = ('orig_team_a', 'orig_team_a_id', 'orig_team_b', 'orig_team_b_id', \
		 'orig_team_c', 'orig_team_c_id', 'orig_team_d', 'orig_team_d_id', \
		 'team_a', 'team_a_id', 'team_b', 'team_b_id', 'team_c', 'team_c_id', 'team_d', 'team_d_id', \
		 'player', 'tbracket', 'tbracket_id')

class EntryPlayerByBracketAndTeamSerializer(serializers.ModelSerializer):
	"""
	Serializer to retrive an entry's player name by Bracket and Team id
	"""
	player = serializers.StringRelatedField()
	
	class Meta:
		model = Entry
		fields = ('id', 'player', 'e_name', 'tbracket')

class EntryBracketsByPlayerSerializer(serializers.ModelSerializer):
	"""
	Serializer to retrieve bracket ids to which a player has been assigned
	"""
	# player = serializers.StringRelatedField()
	
	class Meta:
		model = Entry
		fields = ('id', 'tbracket', 'player')

class EntryStandingsSerializer(serializers.ModelSerializer):
	"""
	Serializer to retrieve entries with key info needed for Standings
	"""
	tbracket = serializers.StringRelatedField()
	player = serializers.SlugRelatedField(
		read_only=True,
		slug_field='full_name'
	)
	team_a = serializers.StringRelatedField()
	team_b = serializers.StringRelatedField()
	team_c = serializers.StringRelatedField()
	team_d = serializers.StringRelatedField()
	team_count = serializers.SerializerMethodField()
	count = IntegerField

	class Meta:
		model = Entry
		fields = ('id', 'tbracket', 'tbracket_id', 'player', 'player_id', 'team_count', \
			'team_a', 'team_b', 'team_c', 'team_d')

	def get_team_count(self, obj):
	# Return team_count field by adding up non-null (still active) teams
		count = 0
		if obj.team_a:
			count += 1
		if obj.team_b:
			count += 1
		if obj.team_c:
			count += 1
		if obj.team_d:
			count += 1
		return count

	def to_representation(self, obj):
		data = super().to_representation(obj)
		team_a_bonus, team_b_bonus, team_c_bonus, team_d_bonus = 0,0,0,0
		if data['team_a'] is None:
			data['team_a_status'] = '(OUT)'
			data['team_a'] = obj.last_team_a.bracket_name
		else:
			# data['team_a_status'], team_a_bonus = determineStatus(obj.team_a_id, obj.tbracket_id, obj.player_id)
			data['team_a_status'], team_a_bonus = determineStatus(obj.team_a_id, obj.tbracket_id, obj.player_id, obj.last_game_a)
		
		if data['team_b'] is None:
			data['team_b_status'] = '(OUT)'
			data['team_b'] = obj.last_team_b.bracket_name
		else:
			# data['team_b_status'], team_b_bonus = determineStatus(obj.team_b_id, obj.tbracket_id, obj.player_id)
			data['team_b_status'], team_b_bonus = determineStatus(obj.team_b_id, obj.tbracket_id, obj.player_id, obj.last_game_b)
		
		if data['team_c'] is None:
			data['team_c_status'] = '(OUT)'
			data['team_c'] = obj.last_team_c.bracket_name
		else:
			# data['team_c_status'], team_c_bonus = determineStatus(obj.team_c_id, obj.tbracket_id, obj.player_id)
			data['team_c_status'], team_c_bonus = determineStatus(obj.team_c_id, obj.tbracket_id, obj.player_id, obj.last_game_c)
		
		if data['team_d'] is None:
			data['team_d_status'] = '(OUT)'
			data['team_d'] = obj.last_team_d.bracket_name
		else:
			# data['team_d_status'], team_d_bonus = determineStatus(obj.team_d_id, obj.tbracket_id, obj.player_id)
			data['team_d_status'], team_d_bonus = determineStatus(obj.team_d_id, obj.tbracket_id, obj.player_id, obj.last_game_d)
		
		# Assign a point total adding bonus points for placing teams (5 for Champion, 2 for Semi-Final Winner, 1 for FF)
		data['standing_points'] = data['team_count']+team_a_bonus+team_b_bonus+ team_c_bonus+team_d_bonus

		return data
	
class EntryMyTeamsSerializer(serializers.ModelSerializer):
	"""
	Serializer to retrieve My Teams listings with next game up data
	"""
	# Modify GET results to show '__str__' defined in Models
	orig_team_a = serializers.StringRelatedField()
	orig_team_b = serializers.StringRelatedField()
	orig_team_c = serializers.StringRelatedField()
	orig_team_d = serializers.StringRelatedField()
	team_a = serializers.StringRelatedField()
	team_b = serializers.StringRelatedField()
	team_c = serializers.StringRelatedField()
	team_d = serializers.StringRelatedField()
	player = serializers.StringRelatedField()
	tbracket = serializers.StringRelatedField()
	
	class Meta:
		model = Entry
		fields = (
			'orig_team_a', 'orig_team_b', 'orig_team_c', 'orig_team_d', \
			'team_a', 'team_b', 'team_c', 'team_d', \
			'player', 'tbracket', 'tbracket_id'
		 )

	def to_representation(self, obj):
		data = super().to_representation(obj)
		# Determine next game up string for each active entry team
		
		last_game, last_team_id = getLastGame_Team(obj.orig_team_a_id)
		last_matchup = Matchup.objects.get(game=last_game.id, tbracket=obj.tbracket_id)
		data['next_team_a'], data['region_a'] = getNextUpGameString(last_game, last_matchup, obj.team_a, last_team_id, obj.player)
		
		last_game, last_team_id = getLastGame_Team(obj.orig_team_b_id)
		last_matchup = Matchup.objects.get(game=last_game.id, tbracket=obj.tbracket_id)
		data['next_team_b'], data['region_b'] = getNextUpGameString(last_game, last_matchup, obj.team_b, last_team_id, obj.player)
		
		last_game, last_team_id = getLastGame_Team( obj.orig_team_c_id)
		last_matchup = Matchup.objects.get(game=last_game.id, tbracket=obj.tbracket_id)
		data['next_team_c'], data['region_c'] = getNextUpGameString(last_game, last_matchup, obj.team_c, last_team_id, obj.player)
		
		last_game, last_team_id = getLastGame_Team(obj.orig_team_d_id)
		last_matchup = Matchup.objects.get(game=last_game.id, tbracket=obj.tbracket_id)
		data['next_team_d'], data['region_d'] = getNextUpGameString(last_game, last_matchup, obj.team_d, last_team_id, obj.player)
		
		return data

class GameSerializer(serializers.ModelSerializer):
	"""
	Allows direct calls on Game model via games API
	"""
	team1 = serializers.StringRelatedField()
	team2 = serializers.StringRelatedField()
	region = serializers.StringRelatedField()
	
	class Meta:
		model = Game
		fields = ('id', 'region', 'region_id', 't_round', 'team1', 'team2', 'team1_id', 'team2_id', 'spread', 'team1_score', 'team2_score', 'tipoff_date_time')

	def update(self, instance, validated_data):
		instance.team1_score = validated_data.get('team1_score', instance.team1_score)
		instance.spread = validated_data.get('spread', instance.spread)
		instance.team2_score = validated_data.get('team2_score', instance.team2_score)
		instance.tipoff_date_time = validated_data.get('tipoff_date_time', instance.tipoff_date_time)
		instance.save()

		# if url param '?send_email=true', update game & send emails
		_send_email = self.context['request'].GET.get('send_email')
		if _send_email is not None:
			if _send_email == "true":
				# print ("_send_email is True!")
				# game_update(instance, True)
				t = threading.Thread(target=game_update,args=[instance, True],daemon=True)
				t.start()
				return instance

		# otherwise, update game without sending emails
		# print ("_send_email is None or not set to true. It's set to:", _send_email)
		# game_update(instance, False)
		t = threading.Thread(target=game_update,args=[instance, False],daemon=True)
		t.start()
		return instance

	def to_representation(self, obj):
		data = super().to_representation(obj)
		data['tipoff_date'] = None
		data['tipoff_time'] = None

		# convert tipoff_date_time to front-end friendly strings for bracket display
		if (obj.tipoff_date_time):
			data['tipoff_date'] = getFriendlyDate(obj.tipoff_date_time)
			data['tipoff_time'] = getFriendlyTime(obj.tipoff_date_time)

		return data

class EntrySerializerForGameWithOwners(serializers.ModelSerializer):
	"""
	Serializer to nest within GameWithOwnersSerializer to provide entry details associated
	with Game team1 and team2
	"""
	player = serializers.StringRelatedField()
	
	class Meta:
		model = Entry
		fields = ('id', 'player', 'tbracket')

class NewGameWithMatchupDataSerializer(serializers.ModelSerializer):
	"""
	End point that returns information needed to populate each bracket with key game & matchup data
	including teams, owner, spread, and tipoff date/time
	"""
	class Meta:
		model = Game
		fields = ('id', 'region_id')

	def to_representation(self, obj):
		data = super().to_representation(obj)
		data['tbracket_id'] = None
		data['team1_owner'] = None
		data['team1_owner_id'] = None
		data['team2_owner'] = None
		data['team2_owner_id'] = None
		data['winner'] = None

		# Grab owner related data for each Game from associated Matchup
		related_matchups = Matchup.objects.filter(game=obj.id)
		_tbracket_id = self.context['request'].GET.get('tbracketid')
		try:
			Tbracket.objects.get(id=_tbracket_id) # Check to make sure is a valid bracket
			specific_matchup = related_matchups.get(tbracket=_tbracket_id) 
		except:
			return data
		
		data['tbracket_id'] = _tbracket_id
		if specific_matchup.team1_owner:
			data['team1_owner'] = specific_matchup.team1_owner.short_name
			data['team1_owner_id'] = specific_matchup.team1_owner.id
		if specific_matchup.team2_owner:
			data['team2_owner'] = specific_matchup.team2_owner.short_name
			data['team2_owner_id'] = specific_matchup.team2_owner.id
		if specific_matchup.winner_id:
			data['winner'] = specific_matchup.winner.short_name

		return data

class FilteredGameSerializer(serializers.ListSerializer):
	"""
	This class allows nested 'games' serializer within TbracketSerializer to be filtered based on a ?gameid= parameter
	within the tbrackets API call
	"""
	def to_representation(self, data):
		game_id=self.context['request'].GET.get('gameid')
		data = data.filter(id=game_id)
		return super(FilteredGameSerializer, self).to_representation(data)

class TbracketGameSerializer(serializers.ModelSerializer):
	"""
	Similar to GameSerializer except is overriding list_serializer_class to allow
	for filtered Game results
	"""
	team1 = serializers.StringRelatedField()
	team2 = serializers.StringRelatedField()
	region = serializers.StringRelatedField()

	class Meta:
		model = Game
		list_serializer_class = FilteredGameSerializer
		fields = ('id', 'region', 'team1', 'team2')

class TbracketSerializer(serializers.ModelSerializer):
	# Create nested serializer here to pull in games for each bracket
	# COMMENTED OUT NEXT LINE SINCE NOT APPLICABLE TO ANY USE CASE
	# games = TbracketGameSerializer(many=True, read_only=True)
	
	entry_count = serializers.SerializerMethodField()

	def create(self, validated_data):
	# Create Tbracket entry and associated Matchup entries
		tbracket = Tbracket.objects.create(**validated_data)
		for game in Game.objects.all():
			Matchup.objects.create(tbracket=tbracket, game=game)
		return tbracket

	def get_entry_count(self, obj):
	# Get count of Entryies belonging to each Tbracket
		return Entry.objects.filter(tbracket=obj.id).count()

	class Meta:
		model = Tbracket
		# fields = ('id', 'name', 'entry_count', 'games')
		fields = ('id', 'name', 'entry_count')

class MatchupSerializer(serializers.ModelSerializer):
	
	team1_owner = serializers.StringRelatedField()
	team2_owner = serializers.StringRelatedField()

	class Meta:
		model = Matchup
		fields = ('id', 'tbracket', 'game', 'winner', 'team1_owner', 'team2_owner', 'team1_owner_id', 'team2_owner_id')


class MatchupLastGameSerializer(serializers.ModelSerializer):

	team1_owner = serializers.StringRelatedField()
	team2_owner = serializers.StringRelatedField()

	class Meta:
		model = Matchup
		fields = ('id', 'tbracket', 'game', 'winner', 'team1_owner', 'team2_owner', 'team1_owner_id', 'team2_owner_id')

	def to_representation(self, obj):
		data = super().to_representation(obj)
		related_game = obj.game
		# set default values
		data['team1'] = None
		data['team1_id'] = None
		data['team2'] = None
		data['team2_id'] = None
		data['spread'] = related_game.spread
		data['region_id'] = related_game.region_id
		data['t_round'] = related_game.t_round
		data['tipoff_date_time'] = related_game.tipoff_date_time

		if related_game.team1:
			data['team1'] = related_game.team1.bracket_name
			data['team1_id'] = related_game.team1_id
		if related_game.team2:
			data['team2'] = related_game.team2.bracket_name
			data['team2_id'] = related_game.team2_id
		
		return data


class RegionSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Region
		fields = ('id', 'name')