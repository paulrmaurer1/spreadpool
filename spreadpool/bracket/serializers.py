from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.db.models import Q

from .models import Entry, Game, Matchup, Tbracket
from .functions import game_update

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'full_name', 'first_name', \
        	'last_name', 'num_entries', 'mult_entry_type', 'is_staff', 'paid')


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
		fields = ('orig_team_a', 'orig_team_b', 'orig_team_c', 'orig_team_d', \
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
	# player = serializers.StringRelatedField()
	player = serializers.SlugRelatedField(
		read_only=True,
		slug_field='full_name'
	)
	team_a = serializers.StringRelatedField()
	team_b = serializers.StringRelatedField()
	team_c = serializers.StringRelatedField()
	team_d = serializers.StringRelatedField()
	team_count = serializers.SerializerMethodField()

	class Meta:
		model = Entry
		fields = ('id', 'tbracket', 'tbracket_id', 'player', 'player_id', 'team_count', \
			'team_a', 'team_b', 'team_c', 'team_d')

	def get_team_count(self, obj):
	# Get count of non Null Active Teams
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
	

class GameSerializer(serializers.ModelSerializer):
	"""
	Allows direct calls on Game model via games API
	"""
	team1 = serializers.StringRelatedField()
	team2 = serializers.StringRelatedField()
	region = serializers.StringRelatedField()
	
	class Meta:
		model = Game
		fields = ('id', 'region', 't_round', 'team1', 'team2', 'team1_id', 'team2_id', 'spread', 'team1_score', 'team2_score')

	def update(self, instance, validated_data):
		instance.team1_score = validated_data.get('team1_score', instance.team1_score)
		instance.spread = validated_data.get('spread', instance.spread)
		instance.team2_score = validated_data.get('team2_score', instance.team2_score)
		instance.save()
		game_update(instance)
		# print ('Game id is: ' + str(instance.id))
		return instance


class EntrySerializerForGameWithOwners(serializers.ModelSerializer):
	"""
	Serializer to nest within GameWithOwnersSerializer to provide entry details associated
	with Game team1 and team2
	"""
	player = serializers.StringRelatedField()
	
	class Meta:
		model = Entry
		fields = ('id', 'player', 'tbracket')

class GameWithOwnersSerializer(serializers.ModelSerializer):
	"""
	Allows direct calls on Game model via games API
	"""
	team1_owner = serializers.SerializerMethodField()
	team2_owner = serializers.SerializerMethodField()
	team1 = serializers.StringRelatedField()
	team2 = serializers.StringRelatedField()
	region = serializers.StringRelatedField()
		
	class Meta:
		model = Game
		fields = ('id', 'region', 'team1', 'team2', 'team1_id', 'team2_id', 'team1_owner', 'team2_owner')

	def get_team1_owner(self, obj):
		# retrieve team1_owner by filtering nested Entry (Serializer) on matching team1_id then on tbracket (if url parameter)
		_team1_id = obj.team1_id
		team1_owner = Entry.objects.filter(Q(team_a=_team1_id) | Q(team_b=_team1_id) | Q(team_c=_team1_id) | Q(team_d=_team1_id))
		_tbracket_id = self.context['request'].GET.get('tbracketid')
		if _tbracket_id is not None:
			team1_owner = team1_owner.filter(tbracket = _tbracket_id)
		return EntrySerializerForGameWithOwners(team1_owner, many=True).data

	def get_team2_owner(self, obj):
		# retrieve team1_owner by filtering nested Entry (Serializer) on matching team1_id then on tbracket (if url parameter)
		_team2_id = obj.team2_id
		team2_owner = Entry.objects.filter(Q(team_a=_team2_id) | Q(team_b=_team2_id) | Q(team_c=_team2_id) | Q(team_d=_team2_id))
		_tbracket_id = self.context['request'].GET.get('tbracketid')
		if _tbracket_id is not None:
			team2_owner = team2_owner.filter(tbracket = _tbracket_id)
		return EntrySerializerForGameWithOwners(team2_owner, many=True).data

class GameWithMatchupDataSerializer(serializers.ModelSerializer):
	"""
	Allows direct calls on Game model via games API
	"""
	team1_owner = serializers.SerializerMethodField()
	team2_owner = serializers.SerializerMethodField()
	team1 = serializers.StringRelatedField()
	team2 = serializers.StringRelatedField()
	region = serializers.StringRelatedField()
	team1_owner = serializers.SerializerMethodField()
	team2_owner = serializers.SerializerMethodField()
		
	class Meta:
		model = Game
		fields = ('id', 'region', 'team1', 'team2', 'team1_id', 'team2_id', 'team1_owner', 'team2_owner')

	def get_team1_owner(self, obj):
		# Get team1_owner from related Matchup
		team1_owner = Matchup.objects.filter(game=obj.id)
		_tbracket_id = self.context['request'].GET.get('tbracketid')
		if _tbracket_id is not None:
			team1_owner = team1_owner.filter(tbracket=_tbracket_id)
		return MatchupSerializer(team1_owner, many=True).data

	def get_team2_owner(self, obj):
		# Get team1_owner from related Matchup
		team2_owner = Matchup.objects.filter(game=obj.id)
		_tbracket_id = self.context['request'].GET.get('tbracketid')
		if _tbracket_id is not None:
			team2_owner = team2_owner.filter(tbracket=_tbracket_id)
		return MatchupSerializer(team2_owner, many=True).data


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