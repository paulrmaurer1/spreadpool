#bracket/views.py

#3rd party python modules
import json
import random
import operator

#Django modules
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model, login, authenticate
from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.http import Http404, HttpResponse
from django.db.models import Q
'''
Since we overrode standard User with bracket.User
i.e. AUTH_USER_MODEL = 'bracket.User' in settings file
need to update User with following line
'''
User = get_user_model()

#Internal modules
from bracket import forms
# from .forms import SignupForm, ProfileForm, TbracketUpdateForm, TbracketNewForm
from .models import Entry, Game, Matchup, Tbracket, Region
from .functions import find_game, reassign_bracket, reset_game, reset_bracket, game_update, create_entries, getLastGame, getLastGame_Team
from .email_functions import email_original_teams, email_spreads
from bracket import serializers

#REST framework modules
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework_jwt.settings import api_settings
from rest_framework.decorators import action

from django.conf import settings

#############################################################
# Django Views used as part of Production site
#############################################################

class IndexView(LoginRequiredMixin, ListView):
	# This is view within which to render all Angular pages
	template_name = 'bracket/index.html'
	login_url = '/login/'
	model = User
	path = ''

	def get_context_data(self, **kwargs):
		# Call the base implementation first to get a context
		context = super(IndexView, self).get_context_data(**kwargs)
		
		# Retrieve currently logged in user
		user = User.objects.get(email=self.request.user.email)
		
		# Create new JWT token manually
		jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
		jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
		payload = jwt_payload_handler(user)
		token = jwt_encode_handler(payload)
		
		# Return token to view for localStorage.setItem within template for passing to Angular
		context['token'] = token
		context['id'] = self.request.user.id
		context['before_tourney'] = settings.BEFORE_TOURNEY
		# print("IndexView context is", context)
		return context

class SignUp(CreateView):
	# Sign up page for people to enter pool
	form_class = forms.SignupForm
	# success_url = reverse_lazy('bracket:home')
	template_name = 'bracket/signup.html'

	#Create username and login user during form validation & saving process
	def form_valid(self, form):
		model = form.save(commit=False)
		model.username = form.cleaned_data.get('first_name')[0].lower() + form.cleaned_data.get('last_name').lower().replace(" ", "")
		model.email = form.cleaned_data.get('email').lower()
		model.save()
		# Log in user that just signed up and direct to Home page
		email = model.email
		raw_password = form.cleaned_data.get('password1')
		user = authenticate(email=email, password=raw_password)
		login(self.request, user)
		return redirect('bracket:home')

	def form_invalid(self, form, **kwargs):
		context = self.get_context_data(**kwargs)
		context['form'] = form
		# print("form contents are", context)
		# print("form kwargs are", kwargs)
		# return invalid submitted data back to form so user doesn't have to re-enter
		return self.render_to_response(context)

#############################################################
# Django Views used as part of original site
#############################################################

class LoggedInUserMixin(object):
	# Ensure that logged in User is only one allowed to delete/change their Profile
	model = User

	def get_object(self, queryset=None):
		obj = super(LoggedInUserMixin, self).get_object()
		if not obj.email == self.request.user.email:
			raise Http404
		user = User.objects.get(id=obj.id)
		self.user = user
		return obj

class ProfileView(LoginRequiredMixin, DetailView):
	# View user Profile
	login_url = '/login/'
	model = User
	template_name = 'bracket/profile.html'

class ProfileEdit(LoggedInUserMixin, LoginRequiredMixin, UpdateView):
	# Edit user Profile
	login_url = '/login/'
	form_class = forms.ProfileForm
	template_name = 'bracket/profile_edit.html'
	
class ProfileDelete(LoggedInUserMixin, LoginRequiredMixin, DeleteView):
	# Delete user Profile
	login_url = '/login/'
	success_url = reverse_lazy('login')
	template_name = 'bracket/user_confirm_delete.html'

'''
Unnecessary CBV views replaced by Angular pages
'''
# class AdminView(LoginRequiredMixin, ListView):
# 	# View various Admin tasks
# 	login_url = '/login/'
# 	model = Entry
# 	template_name = 'bracket/admin_page.html'

# class TbracketView(ListView):
# 	login_url = '/login/'
# 	form_class = forms.TbracketForm
# 	model = Tbracket
# 	template_name = 'bracket/tbracket_page.html'

'''
FBV approach to Edit Brackets page
'''
# @login_required
# def tbracket_page(request):
# # To support bracket admin page

# 	# Create bracket table with key attributes to pass to template
# 	tbracket_table = []
# 	for tbracket in Tbracket.objects.all().order_by('id'):
# 		tbracket_table.append({'id':tbracket.pk,'name':tbracket.name,'num_assigned': Entry.objects.filter(tbracket=tbracket.id).count()})

# 	tmpl_vars = {
# 		'form' : TbracketUpdateForm,
# 		'new_form' : TbracketNewForm,
# 		'tbracket_list' : tbracket_table,
# 		# 'tbracket_list' : Tbracket.objects.all().order_by('id'),
# 		# 'entry_list' : Entry.objects.all()
# 	}

# 	return render(request, 'bracket/tbracket_page.html', tmpl_vars)

'''
FBV approach to above
'''
# @login_required
# def profile_edit(request, pk):
# 	user_to_edit = get_object_or_404(User, pk=pk)
# 	if request.method == "POST":
# 		form = forms.ProfileForm(request.POST, instance=user_to_edit)
# 		if form.is_valid():
# 			form.save()
# 			return redirect('bracket:profile', pk=user_to_edit.pk)
# 	else:
# 		form = forms.ProfileForm(instance=user_to_edit)
# 	return render(request, 'bracket/profile_edit.html', {'form': form})
#
# @login_required
# def profile_delete(request, pk):
# 	user_to_delete = get_object_or_404(User, pk=pk)
# 	if request.method == "POST":
# 		form = forms.DeleteProfileForm(request.POST, instance = user_to_delete)
# 		if form.is_valid():
# 			user_to_delete.delete()
# 			return redirect('logout')
# 	else:
# 		form = forms.DeleteProfileForm(instance=user_to_delete)
# 	return render(request, 'bracket/profile_delete.html', {'form': form})

'''
FBV for old Django pages
'''

def tbracket_reassign_teams(request):
	"""
	Use this API endpoint once 16 players are assigned a bracket (though will work with less)
	Reassign teams to players within Entry model, based upon bracket id sent by API call to this view
	"""
	if request.method == 'POST':
		tbracketid = request.POST.get('tbracketid')
		entry_team_assignments = {}
		seed_counter = 1
		for entry in Entry.objects.filter(tbracket=tbracketid):
			#Following line works with existing team ids:
			# entry_team_assignments[entry.id] = [entry.team_a, entry.team_b, entry.team_c, entry.team_d]
			#Following line works with teams as long as their team ids = 1 - 64:
			entry_team_assignments[entry.id] = [seed_counter, seed_counter+16, seed_counter+32, seed_counter+48]
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
		
		#update Entry objects
		n = 0
		for entry in entry_team_assignments:
			Entry.objects.filter(pk=entry).update(team_a=region1[n],team_b=region2[n],team_c=region3[n],team_d=region4[n])
			Entry.objects.filter(pk=entry).update(orig_team_a=region1[n],orig_team_b=region2[n],orig_team_c=region3[n],orig_team_d=region4[n])
			n += 1

		reassigned_bracket = Tbracket.objects.get(id=tbracketid)

		return HttpResponse(
			json.dumps(reassigned_bracket.name), # return name of bracket for alerting purposes
			content_type="application/json"
		)
	else:
		return HttpResponse(
			json.dumps({"nothing to see": "this isn't happening"}),
			content_type="application/json"
		)


#############################################################
# Django REST framework ViewSet classes for End Points
#############################################################

class UserViewSet(ModelViewSet):
	"""
	API endpoint that allows users to be viewed or edited.
	Exclude admin for roster display purposes
	"""
	custom_user_list = User.objects.exclude(username='admin')
	custom_user_list = custom_user_list.order_by('-date_joined')
	queryset = custom_user_list
	serializer_class = serializers.UserSerializer

class GroupViewSet(ModelViewSet):
	"""
	API endpoint that allows groups to be viewed or edited.
	"""
	queryset = Group.objects.all()
	serializer_class = serializers.GroupSerializer

class EntryViewSet(ModelViewSet):
	"""
	API endpoint that allows entries to be viewed or edited.
	Optional GET parameters include: ?tbracketid=, ?playerid=, or
	?teamid= any of the 4 active teams for a Player (team_a, team_b, team_c or team_d)
	"""
	queryset = Entry.objects.all()
	serializer_class = serializers.EntrySerializer

	def get_queryset(self):
		"""
		Optionally filter entries by playerid, tbracketid or teamid
		"""
		queryset = Entry.objects.all()
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is not None:
			queryset = queryset.filter(tbracket=tbracketid)
		if 'no_bracket' in self.request.query_params:
			queryset = queryset.filter(tbracket=None)
		playerid = self.request.query_params.get('playerid', None)
		if playerid is not None:
			queryset = queryset.filter(player=playerid)
		teamid = self.request.query_params.get('teamid', None)
		# Find entry(ies) where team_a, team_b, team_c, or team_d = teamid
		if teamid is not None:
			queryset = queryset.filter(
				Q(team_a=teamid) | Q(team_b=teamid) | Q(team_c=teamid) | Q(team_d=teamid)
				)
		return queryset

	@action(detail=False)
	def reset_all(self, request):
		"""
		Delete all, then Create new Entry records based on User data (i.e. num_entries & (S) or (D))
		"""
		entries = Entry.objects.all().delete()
		create_entries()
		return Response(status=status.HTTP_204_NO_CONTENT)

	@action(detail=False)
	def email_orig_teams_to_owners(self, request):
		"""
		Send email to each entry owner with their original teams. Normally called at the beginning
		of the tournament. If tbracketid is included in parameters, only email entries belonging
		to that bracket.  
		"""
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is None:
			tbracketid = "9999" # if no tbracketid parameter is sent, set to 9999 & generate emails for every entry
		email_original_teams(tbracketid)
		
		return Response({'tbracketid': tbracketid})

class EntryPlayerByBracketAndTeamViewSet(ModelViewSet):
	"""
	API endpoint to retrieve names associated with entries
	Optional GET parameters include: ?tbracketid= 
	If no tbracketid, will retrive all users whose entries match either team 1 or team 2
	"""
	queryset = Entry.objects.all()
	serializer_class = serializers.EntryPlayerByBracketAndTeamSerializer

	def get_queryset(self):
		"""
		Optionally filter entries by tbracketid, teamid
		"""
		queryset = Entry.objects.all().order_by('e_name')
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is not None:
			queryset = queryset.filter(tbracket=tbracketid)
		if 'no_bracket' in self.request.query_params:
			queryset = queryset.filter(tbracket=None)
		teamid = self.request.query_params.get('teamid', None)
		# Find entry(ies) where team_a, team_b, team_c, or team_d = teamid
		if teamid is not None:
			queryset = queryset.filter(
				Q(team_a=teamid) | Q(team_b=teamid) | Q(team_c=teamid) | Q(team_d=teamid)
				)
		return queryset

class EntryBracketsByPlayerViewSet(ModelViewSet):
	"""
	API endpoint that allows entry brackets to be looked up by playerid
	Optional GET parameters include: ?playerid=  e.g. entry_brackets?playerid=11
	"""
	queryset = Entry.objects.all()
	serializer_class = serializers.EntryBracketsByPlayerSerializer

	def get_queryset(self):
		"""
		Optionally filter entries by playerid, tbracketid or teamid
		"""
		queryset = Entry.objects.all()
		playerid = self.request.query_params.get('playerid', None)
		if playerid is not None:
			queryset = queryset.filter(player=playerid)
		return queryset

class EntryStandingsViewSet(ModelViewSet):
	"""
	API endpoint to retrieve names associated with entries
	Optional GET parameters include: ?tbracketid= 
	If no tbracketid, will retrieve all users whose entries match either team 1 or team 2
	"""
	queryset = Entry.objects.all()
	serializer_class = serializers.EntryStandingsSerializer

	def get_queryset(self):
		"""
		Optionally filter entries by tbracketid
		"""
		queryset = Entry.objects.all()
		queryset = queryset.order_by('player__first_name')
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is not None:
			queryset = queryset.filter(tbracket=tbracketid)

		return queryset

class EntryMyTeamsViewSet(ModelViewSet):
	"""
	API endpoint that retrieves a Player's entries and supplements with "Next Game" string
	For My Teams page -> team-details.component
	Optional GET parameters include: ?playerid=  e.g. entry_brackets?playerid=11
	"""
	queryset = Entry.objects.all()
	serializer_class = serializers.EntryMyTeamsSerializer

	def get_queryset(self):
		"""
		Optionally filter entries by playerid, tbracketid or teamid
		"""
		queryset = Entry.objects.all()
		playerid = self.request.query_params.get('playerid', None)
		if playerid is not None:
			queryset = queryset.filter(player=playerid)
		return queryset

class GameViewSet(ModelViewSet):
	"""
	API endpoint that allows games to be viewed or edited.
	Games can be filtered by game table id, e.g. api/games/18
	Optional GET parameters include: ?regionid= (1=South, 2=West, 3=East, 4=Midwest, 5=FinalFour)
	?teamid= (primary key of team), or ?tround= (1-6)
	"""
	queryset = Game.objects.all()
	serializer_class = serializers.GameSerializer

	def get_queryset(self):
		"""
		Optionally filter games by regionid, teamid, t_round or null spread
		"""
		queryset = Game.objects.all()
		
		regionid = self.request.query_params.get('regionid', None)
		if regionid is not None:
			queryset = queryset.filter(region=regionid)
		
		teamid = self.request.query_params.get('teamid', None)
		if teamid is not None:
			queryset = queryset.filter(Q(team1=teamid) | Q(team2=teamid))
			queryset = queryset.order_by('-t_round')
		
		tround = self.request.query_params.get('tround', None)
		if tround is not None:
			queryset = queryset.filter(t_round=tround)
		
		if 'spread_set_no_score' in self.request.query_params:
			queryset = queryset.filter(spread__isnull=False).filter(team1_score=0).filter(team2_score=0)
		
		return queryset.order_by('id')

	@action(detail=True)
	def reset(self, request, pk=None):
		"""
		Clear scores and spread of each game; clear team_owners and winner from related Matchups
		"""
		game = self.get_object()
		gameid = game.id
		reset_game(gameid)
		return Response(status=status.HTTP_204_NO_CONTENT)

	@action(detail=False)
	def reset_all(self, request):
		"""
		Clear scores and spread of each game; clear team_owners and winner from related Matchups
		"""
		games = Game.objects.all().order_by('id')
		for game in games:
			gameid = game.id
			reset_game(gameid)
		return Response(status=status.HTTP_204_NO_CONTENT)

	@action(detail=False)
	def replay_all(self, request):
		"""
		Clear scores and spread of each game; clear team_owners and winner from related Matchups
		"""
		games = Game.objects.filter(team1_score__gt=0, team2_score__gt=0, team1__isnull=False, team2__isnull=False).order_by('id')
		for game in games:
			print ("Game #: " + str(game.id) + " updating...")
			game_update(game, False)
		return Response(status=status.HTTP_204_NO_CONTENT)

	@action(detail=False)
	def final_four(self, request):
		"""
		Check to see if it's the Final Four yet, i.e. game #s in rounds 1-4 all have team1_score and team2_score posted
		Return boolean, 'happening', =True if games 1-60 are done, =False if not
		"""
		happening = True;
		games = Game.objects.filter(t_round__lte=4).order_by('id')
		for game in games:
			if not(game.team1_score > 0 and game.team2_score > 0):
				happening = False;
		return Response({'happening': happening})

	@action(detail=False)
	def email_spreads_to_owners(self, request):
		"""
		Send email to each entry owner who has a game/matchup matching the tbracketid and tround where
		the spread has been set (i.e. is not null) and the scores = 0
		"""
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is None:
			tbracketid = "9999" # if no tbracketid parameter is sent, set to 9999 & generate emails for every bracket
		tround = self.request.query_params.get('tround', None)
		email_spreads(tbracketid, tround)
		
		return Response({'tbracketid': tbracketid})
	
class GameWithTeamOwnersViewSet(ModelViewSet):
	"""
	API endpoint that allows games to be retrieved for a Bracket
	Games can be filtered by game table id, e.g. /api/games_owners/
	Optional GET parameters include: ?tbracketid=
	"""
	queryset = Game.objects.all()
	serializer_class = serializers.GameWithOwnersSerializer

class GameWithMatchupDataViewSet(ModelViewSet):
	"""
	API endpoint that allows Games to be viewed with respective Matchup owner(s) of each team1 & team2
	Games can be filtered by game table id, e.g. /api/games_matchups/
	Optional GET parameters include: ?tbracketid=
	"""
	queryset = Game.objects.all()
	serializer_class = serializers.GameWithMatchupDataSerializer

class NewGameWithMatchupDataViewSet(ModelViewSet):
	"""
	API endpoint that allows game/matchup info to be retrieved for a Bracket. Data is used by brackets.component.ts
	to populate bracket view for each Region, e.g. /api/games_new_matchups/
	Required GET parameter (to get owners) is: ?tbracketid=
	"""
	queryset = Game.objects.all()
	serializer_class = serializers.NewGameWithMatchupDataSerializer

	def get_queryset(self):
		"""
		Optionally filter games by regionid
		"""
		queryset = Game.objects.all().order_by('id')
		regionid = self.request.query_params.get('regionid', None)
		if regionid is not None:
			queryset = queryset.filter(region=regionid)
		return queryset
		
class MatchupViewSet(ModelViewSet):
	"""
	API endpoint that allows Matchups to be viewed or edited.
	Optional GET parameters include: ?tbracketid=, ?gameid=
	"""
	queryset = Matchup.objects.all()
	serializer_class = serializers.MatchupSerializer

	def get_queryset(self):
		"""
		Optionally filter entries by tbracketid
		"""
		queryset = Matchup.objects.all()
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is not None:
			queryset = queryset.filter(tbracket=tbracketid)
		gameid = self.request.query_params.get('gameid', None)
		if gameid is not None:
			queryset = queryset.filter(game=gameid)
		return queryset

class MatchupLastGameViewSet(ModelViewSet):
	"""
	API endpoint that retrieves the last matchup in which the owner of orig_teamid
	played in a specific bracket
	Required GET parameters include: ?tbracketid=, ?orig_teamid= 
	"""
	queryset = Matchup.objects.all()
	serializer_class = serializers.MatchupLastGameSerializer

	def get_queryset(self):
		"""
		Use parameters to find last matchup/game
		"""
		queryset = Matchup.objects.all()
		tbracketid = self.request.query_params.get('tbracketid', None)
		orig_teamid = self.request.query_params.get('orig_teamid', None)
		if tbracketid is not None and orig_teamid is not None:
			# if parameters are passed call function
			last_game = getLastGame(tbracketid, orig_teamid)
			queryset = queryset.filter(game=last_game.id, tbracket=tbracketid)
		return queryset

class TbracketViewSet(ModelViewSet):
	"""
	API endpoint that allows Tbracket:games to be viewed
	Brackets can be filtered by tbracket table id, e.g. api/entries/1
	Mandatory GET parameter: ?gameid=
	"""
	queryset = Tbracket.objects.all()
	serializer_class = serializers.TbracketSerializer

	def get_queryset(self):
		"""
		Optionally sort by playerid's entry tbrackets
		"""
		queryset = Tbracket.objects.all().order_by('id')
		player_tbrackets=[]
		sorted_queryset = queryset
		# print (queryset)
		playerid = self.request.query_params.get('playerid', None)
		if playerid is not None:
			sorted_queryset = [] # empty sorted_querset for re-sort
			# Create list of player tbracket ids
			player_entries = Entry.objects.filter(player=playerid)
			for player in player_entries:
				if player.tbracket_id not in player_tbrackets:
					player_tbrackets.append(player.tbracket_id)
			# print (player_tbrackets)
			# Re-sort querset putting player tbracket ids first
			for tb in queryset:
				if tb.id in player_tbrackets:
					tb.name += "*"  # append * to any bracket.name to which a player belongs
					sorted_queryset.insert(0, tb)
				else:
					sorted_queryset.append(tb)
			# print(sorted_queryset)
		return sorted_queryset

	def destroy(self, request, *args, **kwargs):
		"""
		Delete Tbracket entry and associated Matchup entries
		"""
		try:
			instance = self.get_object()
			tbracket_id = instance.id
			assigned_entries = Entry.objects.filter(tbracket=tbracket_id)
			assigned_entries.update(tbracket=None)
			self.perform_destroy(instance)
			related_matchups = Matchup.objects.filter(tbracket=tbracket_id)
			related_matchups.delete()
		except Http404:
			pass
		return Response(status=status.HTTP_204_NO_CONTENT)

	@action(detail=True)
	def reassign(self, request, pk=None):
		"""
		Assign teams or re-assign teams randomly to entries that match the called Tbracket
		Only should perform this after Tbracket has just been created
		"""
		tbracket = self.get_object()
		tbracketid = tbracket.id
		reassign_bracket(tbracketid)
		return Response(status=status.HTTP_204_NO_CONTENT)

	@action(detail=True)
	def reset(self, request, pk=None):
		"""
		Reset all Bracket Matchup to default values
		Restore all Entry Active Teams to Original Active Teams
		Update all First Round Matchups with restored Owners
		No Games are affected
		"""
		tbracket = self.get_object()
		tbracketid = tbracket.id
		reset_bracket(tbracketid)
		return Response(status=status.HTTP_204_NO_CONTENT)

class RegionViewSet(ModelViewSet):
	"""
	API endpoint that allows Matchups to be viewed or edited.
	Optional GET parameters include: ?tbracketid=, ?gameid=
	"""
	queryset = Region.objects.all().order_by('id')
	serializer_class = serializers.RegionSerializer