from django.db import models
from django.contrib.auth.models import AbstractUser  #to subclass AbstractUser for User
from django.conf import settings  #to reference User Class Foreign Key as 'settings.AUTH_USER_MODEL'
from django.urls import reverse

# Create your models here.
class User(AbstractUser):
	# Table which contains key user and profile data
	# Email will be only required field for login
	class Meta:
		db_table = 'user'

	MULTIPLE_ENTRY_CHOICES = (
		('D', 'Different Brackets'),
		('S', 'Same Bracket'),
	)

	#standard Abstract User fields, overriding default values where needed
	email = models.EmailField(unique=True)
	username = models.CharField(blank=True, null=True, max_length=150)
	
	#custom user profile fields
	num_entries = models.IntegerField(
		default=1,
		verbose_name="Number of Entries"  #Text on form widget
		)
	mult_entry_type = models.CharField(
		max_length=1,
		choices = MULTIPLE_ENTRY_CHOICES,
		default = 'D',
		verbose_name="(S)ame or (D)ifferent Brackets"  #Text on form widget
		)

	# Used by views.ProfileEdit(UpdateView) to return to standard profile view
	def get_absolute_url(self):
		return reverse('bracket:profile', kwargs={'pk': self.pk})	

	# When subclassing AbstractUser, below is required to define primary key, i.e. email
	# But still must include 'username' as REQUIRED_FIELDS to ensure default Django behavior
	REQUIRED_FIELDS = ['username']
	USERNAME_FIELD = 'email'

	def __str__(self):
		# return self.email
		return self.first_name + ' ' + self.last_name

	@property
	def full_name(self):
		return self.first_name + ' ' + self.last_name
	#for full name, can also use standard User method: get_full_name()

class Region(models.Model):
	#Track information about each Region
	class Meta:
		db_table = 'region'

	name = models.CharField(  #Unique name for each region
		max_length=10,
		unique = True
		)

	def __str__(self):
		return self.name

class Team(models.Model):
	# Table which contains all of the Tournament team names, seeds, and affiliate school
	# When populating table, primary key must be from 1 - 64
	class Meta:
		db_table = 'team'

	seed = models.IntegerField()
	region = models.ForeignKey(  #Region in which team is seeded
		Region,
		on_delete=models.CASCADE)
	short_name = models.CharField(max_length=10)
	long_name = models.CharField(max_length=255)
	school = models.CharField(max_length=255)

	# Below is what is returned when printing Team and by Entry API endpoint
	def __str__(self):
		return '%d-%s' % (self.seed, self.short_name)

class Game(models.Model):
	# Table which contains information about each of the 63 games in each tourney bracket
	# auto id will be populated via a fixture by the integer 1-63 to represent each game in tourney
	class Meta:
		db_table = 'game'

	region = models.ForeignKey(  #Region in which game is played
		Region,
		on_delete=models.CASCADE)
	t_round = models.IntegerField()  #Tournament round 1-6
	team1 = models.ForeignKey(  #Team that appears on top in this pairing
		Team,
		on_delete=models.CASCADE,
		related_name="team1",
		null=True,
		blank=True
		)
	team2 = models.ForeignKey(  #Team that appears on bottom in this pairing
		Team,
		on_delete=models.CASCADE,
		related_name="team2",
		null=True,
		blank=True
		)
	spread = models.IntegerField(default=0)  #Point Spread for game
	favorite = models.IntegerField(default=1)  #Team (1 or 2) that is favored in the pairing
	team1_score = models.IntegerField(default=0)  #Team 1 final score
	team2_score = models.IntegerField(default=0)  #Team 2 final score
	parent_game1 = models.ForeignKey(  #The feeder game, at top, of this pairing
		'self',
		on_delete=models.CASCADE,
		related_name="p_game1",
		null=True,
		blank=True
		)
	parent_game2 = models.ForeignKey(  #The feeder game, at bottom, of this pairing
		'self',
		on_delete=models.CASCADE,
		related_name="p_game2",
		null=True,
		blank=True
		)

	def __str__(self):
		return "Game #: {}".format(str(self.id))

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
	#Through model to associate Games with Brackets (many to many)
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
		verbose_name_plural = 'entries'

	player = models.ForeignKey(  #User associated with this entry
		settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
		)
	tbracket = models.ForeignKey(  #Bracket to which Entry is assigned
		Tbracket,
		on_delete=models.CASCADE,
		)
	team_a = models.ForeignKey(  #Region 1 Current Team
		Team,
		on_delete=models.CASCADE,
		related_name="team_a"
		)
	team_b = models.ForeignKey(  #Region 2 Current Team
		Team,
		on_delete=models.CASCADE,
		related_name="team_b"
		)
	team_c = models.ForeignKey(  #Region 3 Current Team
		Team,
		on_delete=models.CASCADE,
		related_name="team_c"
		)
	team_d = models.ForeignKey(  #Region 4 Current Team
		Team,
		on_delete=models.CASCADE,
		related_name="team_d"
		)
	orig_team_a = models.ForeignKey(  #Region 1 Original Team
		Team,
		on_delete=models.CASCADE,
		related_name="orig_team_a"
		)
	orig_team_b = models.ForeignKey(  #Region 2 Original Team
		Team,
		on_delete=models.CASCADE,
		related_name="orig_team_b"
		)
	orig_team_c = models.ForeignKey(  #Region 3 Original Team
		Team,
		on_delete=models.CASCADE,
		related_name="orig_team_c"
		)
	orig_team_d = models.ForeignKey(  #Region 4 Original Team
		Team,
		on_delete=models.CASCADE,
		related_name="orig_team_d"
		)