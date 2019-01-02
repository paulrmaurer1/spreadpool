from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Entry, Game, Matchup, Tbracket

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'full_name', 'groups')


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
	
	class Meta:
		model = Entry
		fields = '__all__'

class RawEntrySerializer(serializers.ModelSerializer):
	"""
	Serializer to retrive & update player-entry team assignments for assign_teams.py algorithm
	"""
	class Meta:
		model = Entry
		fields = ('id', 'player', 'orig_team_a', 'orig_team_b', 'orig_team_c', 'orig_team_d', 'team_a', 'team_b', 'team_c', 'team_d')

# class EntryByPlayerSerializer(serializers.ModelSerializer):
# 	player = serializers.StringRelatedField()
	
# 	class Meta:
# 		model = Entry
# 		fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
	"""
	Allows direct calls on Game model via games API
	"""
	team1 = serializers.StringRelatedField()
	team2 = serializers.StringRelatedField()
	region = serializers.StringRelatedField()

	class Meta:
		model = Game
		fields = ('id', 'region', 'team1', 'team2', 'spread', 'team1_score', 'team2_score')

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
	games = TbracketGameSerializer(many=True, read_only=True)

	def create(self, validated_data):
	# Create Tbracket entry and associated Matchup entries
		tbracket = Tbracket.objects.create(**validated_data)
		for game in Game.objects.all():
			Matchup.objects.create(tbracket=tbracket, game=game)
		return tbracket

	class Meta:
		model = Tbracket
		fields = ('id', 'name', 'games')

class MatchupSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Matchup
		fields = ('id', 'tbracket', 'game')