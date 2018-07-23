from django.db import models
from django.contrib.auth.models import AbstractUser  #to subclass AbstractUser for User
from django.conf import settings  #to reference User Class Foreign Key as 'settings.AUTH_USER_MODEL'

# Create your models here.
class User(AbstractUser):
	# Table which contains key user and profile data
	class Meta:
		db_table = 'user'

	email = models.EmailField(unique=True)
	username = models.CharField(blank=True, null=True, max_length=150)
	REQUIRED_FIELDS = ['username']
	USERNAME_FIELD = 'email'

	def __str__(self):
		return self.email

	def get_name(self):
		return self.first_name + " " + self.last_name

class Team(models.Model):
	# Table which contains all of the Tournament team names, seeds, and affiliate school
	class Meta:
		db_table = 'team'

	seed = models.IntegerField()
	short_name = models.CharField(max_length=10)
	long_name = models.CharField(max_length=255)
	school = models.CharField(max_length=255)

	def __str__(self):
		return self.short_name

class Game(models.Model):
	# Table which contains information about each of the 63 games in each tourney bracket
	class Meta:
		db_table = 'game'

	num = models.IntegerField(  #Game number 1-63
		primary_key = True, 
		unique = True
		)
	t_round = models.IntegerField(default=1)  #Tournament round 1-6
	team1 = models.ForeignKey(  #Team that appears on top in this pairing
		Team,
		on_delete=models.CASCADE,
		related_name="team1"
		)
	team2 = models.ForeignKey(  #Team that appears on bottom in this pairing
		Team,
		on_delete=models.CASCADE,
		related_name="team2"
		)
	favorite = models.IntegerField(default=1)  #Team (1 or 2) that is favored in the pairing
	team1_score = models.IntegerField(default=0)  #Team 1 final score
	team2_score = models.IntegerField(default=0)  #Team 2 final score
	parent_game1 = models.ForeignKey(  #The feeder game, at top, of this pairing
		'self',
		on_delete=models.CASCADE,
		related_name="p_game1",
		null=True
		)
	parent_game2 = models.ForeignKey(  #The feeder game, at bottom, of this pairing
		'self',
		on_delete=models.CASCADE,
		related_name="p_game2",
		null=True
		)

	def __str__(self):
		return "Game #: {}".format(str(self.num))

class Tbracket(models.Model):
	#Tracks info about each Tournament Bracket
	class Meta:
		db_table = 'tbracket'

	games = models.ManyToManyField(Game, through='Matchup')
	name = models.CharField(  #Unique name for each bracket
		max_length=10,
		unique = True
		)

	def __str__(self):
		return self.name

class Matchup(models.Model):
	#Intermediary model to associate Games with Brackets
	class Meta:
		db_table = 'matchup'

	tbracket = models.ForeignKey(
		Tbracket,
		on_delete=models.CASCADE
		)
	game = models.ForeignKey(
		Game,
		on_delete=models.CASCADE
		)
	winner = models.ForeignKey(  #Winner of pairing (once game is concluded)
		settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
		null=True
		)

class Entry(models.Model):
	#Track information about each Player's entry (players can have multiple entries)
	class Meta:
		db_table = 'entry'

	player = models.ForeignKey(  #User associated with this entry
		settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
		)
	tbracket = models.ForeignKey(  #Bracket to which Entry is assigned
		Tbracket,
		on_delete=models.CASCADE,
		)
	team_a = models.ForeignKey(  #1st Team of the entry
		Team,
		on_delete=models.CASCADE,
		related_name="team_a"
		)
	team_b = models.ForeignKey(  #2nd Team of the entry
		Team,
		on_delete=models.CASCADE,
		related_name="team_b"
		)
	team_c = models.ForeignKey(  #3rd Team of the entry
		Team,
		on_delete=models.CASCADE,
		related_name="team_c"
		)
	team_d = models.ForeignKey(  #4th Team of the entry
		Team,
		on_delete=models.CASCADE,
		related_name="team_d"
		)