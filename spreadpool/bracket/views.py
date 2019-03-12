#bracket/views.py

#3rd party python modules
import json
import random

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
from .forms import SignupForm, ProfileForm, TbracketUpdateForm, TbracketNewForm
from .models import Entry, Game, Matchup, Tbracket
from .functions import find_game, reassign_bracket, reset_game, reset_bracket, game_update, create_entries

#REST framework modules
from rest_framework.viewsets import ModelViewSet
from bracket.serializers import UserSerializer, GroupSerializer, EntrySerializer, \
GameSerializer, MatchupSerializer, TbracketSerializer, GameWithOwnersSerializer, \
EntryPlayerByBracketAndTeamSerializer, EntryBracketsByPlayerSerializer, GameWithMatchupDataSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework_jwt.settings import api_settings
from rest_framework.decorators import action

# Create your views here.

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
		return context


# @login_required
# def index(request, path = ''):
# 	"""
# 	Renders the Angular Single Page App (SPA)
# 	"""
# 	return render(request, 'bracket/index.html')

# class HomeView(LoginRequiredMixin, ListView):
# 	# Main Page with roster list during signup period
# 	# **TO DO** Create view of brackets on main page after signup period
# 	template_name = 'bracket/home.html'
# 	login_url = '/login/'
# 	# redirect_field_name = 'redirect_to'

# 	def get_queryset(self):  # this is referenced as 'user_list' by default in template
# 		# Create list that exludes admin and the user who is logged in, sorted by most recent joined
# 		custom_user_list = User.objects.exclude(username='admin')
# 		custom_user_list = custom_user_list.exclude(email=self.request.user.email)
# 		custom_user_list = custom_user_list.order_by('-date_joined')
# 		return custom_user_list

# 	def get_context_data(self, **kwargs):
# 		# Call the base implementation first to get a context
# 		context = super(HomeView, self).get_context_data(**kwargs)
# 		# Pass back the currently logged in user as 'logged_in_user'
# 		context['logged_in_user'] = User.objects.get(email=self.request.user.email)
# 		return context
		
class SignUp(CreateView):
	# Sign up page for people to enter pool
	form_class = SignupForm
	# success_url = reverse_lazy('bracket:home')
	template_name = 'bracket/signup.html'

	#Create username and login user during form validation & saving process
	def form_valid(self, form):
		model = form.save(commit=False)
		model.username = form.cleaned_data.get('first_name')[0].lower() + form.cleaned_data.get('last_name').lower().replace(" ", "")
		model.save()
		# Log in user that just signed up and direct to Home page
		email = form.cleaned_data.get('email')
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

'''
FBV approach to above
'''
# def signup(request):
# 	if request.method == "POST":  #after Sign-up form is submitted
# 		form = SignupForm(request.POST)
# 		if form.is_valid():
# 			new_user = form.save(commit=False)
# 			# create a default username from first & last name since required by User model
# 			new_user.username = form.cleaned_data.get('first_name')[0].lower() + form.cleaned_data.get('last_name').lower()
# 			new_user.save()
# 			email = form.cleaned_data.get('email')
# 			raw_password = form.cleaned_data.get('password1')
# 			user = authenticate(email=email, password=raw_password)
# 			login(request, user)
# 			return redirect('bracket:home')
# 	else:
# 		form = SignupForm()
# 	return render(request, 'bracket/signup.html', {'form': form})

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
	form_class = ProfileForm
	template_name = 'bracket/profile_edit.html'
	
class ProfileDelete(LoggedInUserMixin, LoginRequiredMixin, DeleteView):
	# Delete user Profile
	login_url = '/login/'
	success_url = reverse_lazy('login')
	template_name = 'bracket/user_confirm_delete.html'

class AdminView(LoginRequiredMixin, ListView):
	# View various Admin tasks
	login_url = '/login/'
	model = Entry
	template_name = 'bracket/admin_page.html'

# class TbracketView(ListView):
# 	login_url = '/login/'
# 	form_class = TbracketForm
# 	model = Tbracket
# 	template_name = 'bracket/tbracket_page.html'

@login_required
def tbracket_page(request):
# To support bracket admin page

	# Create bracket table with key attributes to pass to template
	tbracket_table = []
	for tbracket in Tbracket.objects.all().order_by('id'):
		tbracket_table.append({'id':tbracket.pk,'name':tbracket.name,'num_assigned': Entry.objects.filter(tbracket=tbracket.id).count()})

	tmpl_vars = {
		'form' : TbracketUpdateForm,
		'new_form' : TbracketNewForm,
		'tbracket_list' : tbracket_table,
		# 'tbracket_list' : Tbracket.objects.all().order_by('id'),
		# 'entry_list' : Entry.objects.all()
	}

	return render(request, 'bracket/tbracket_page.html', tmpl_vars)

'''
FBV approach to above
'''
# @login_required
# def profile_edit(request, pk):
# 	user_to_edit = get_object_or_404(User, pk=pk)
# 	if request.method == "POST":
# 		form = ProfileForm(request.POST, instance=user_to_edit)
# 		if form.is_valid():
# 			form.save()
# 			return redirect('bracket:profile', pk=user_to_edit.pk)
# 	else:
# 		form = ProfileForm(instance=user_to_edit)
# 	return render(request, 'bracket/profile_edit.html', {'form': form})
#
# @login_required
# def profile_delete(request, pk):
# 	user_to_delete = get_object_or_404(User, pk=pk)
# 	if request.method == "POST":
# 		form = DeleteProfileForm(request.POST, instance = user_to_delete)
# 		if form.is_valid():
# 			user_to_delete.delete()
# 			return redirect('logout')
# 	else:
# 		form = DeleteProfileForm(instance=user_to_delete)
# 	return render(request, 'bracket/profile_delete.html', {'form': form})

	
#REST framework ViewSet classes
class UserViewSet(ModelViewSet):
	"""
	API endpoint that allows users to be viewed or edited.
	Exclude admin for roster display purposes
	"""
	custom_user_list = User.objects.exclude(username='admin')
	# custom_user_list = custom_user_list.exclude(email=self.request.user.email)
	custom_user_list = custom_user_list.order_by('-date_joined')
	queryset = custom_user_list
	# queryset = User.objects.all().order_by('-date_joined')
	serializer_class = UserSerializer

class GroupViewSet(ModelViewSet):
	"""
	API endpoint that allows groups to be viewed or edited.
	"""
	queryset = Group.objects.all()
	serializer_class = GroupSerializer

class EntryViewSet(ModelViewSet):
	"""
	API endpoint that allows entries to be viewed or edited.
	Optional GET parameters include: ?tbracketid=, ?playerid=, or
	?teamid= any of the 4 active teams for a Player (team_a, team_b, team_c or team_d)
	"""
	queryset = Entry.objects.all()
	serializer_class = EntrySerializer

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


class EntryPlayerByBracketAndTeamViewSet(ModelViewSet):
	"""
	API endpoint to retrieve names associated with entries
	Optional GET parameters include: ?tbracketid= 
	If no tbracketid, will retrive all users whose entries match either team 1 or team 2
	"""
	queryset = Entry.objects.all()
	serializer_class = EntryPlayerByBracketAndTeamSerializer

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
	serializer_class = EntryBracketsByPlayerSerializer

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
	API endpoint that allows entries to be viewed or edited.
	Games can be filtered by game table id, e.g. api/games/18
	Optional GET parameters include: ?regionid= (1=South, 2=West, 3=East, 4=Midwest, 5=FinalFour)
	"""
	queryset = Game.objects.all()
	serializer_class = GameSerializer

	def get_queryset(self):
		"""
		Optionally filter games by regionid or teamid
		"""
		queryset = Game.objects.all()
		regionid = self.request.query_params.get('regionid', None)
		if regionid is not None:
			queryset = queryset.filter(region=regionid)
		teamid = self.request.query_params.get('teamid', None)
		if teamid is not None:
			queryset = queryset.filter(Q(team1=teamid) | Q(team2=teamid))
			queryset = queryset.order_by('-t_round')
		return queryset

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
			game_update(game)
		return Response(status=status.HTTP_204_NO_CONTENT)

	

class GameWithTeamOwnersViewSet(ModelViewSet):
	"""
	API endpoint that allows Games to be viewed with respective owner of each team1 & team2
	Games can be filtered by game table id, e.g. api/games/18
	Optional GET parameters include: ?tbracketid=
	"""
	queryset = Game.objects.all()
	serializer_class = GameWithOwnersSerializer

class GameWithMatchupDataViewSet(ModelViewSet):
	"""
	API endpoint that allows Games to be viewed with respective Matchup owner(s) of each team1 & team2
	Games can be filtered by game table id, e.g. api/games/18
	Optional GET parameters include: ?tbracketid=
	"""
	queryset = Game.objects.all()
	serializer_class = GameWithMatchupDataSerializer

class MatchupViewSet(ModelViewSet):
	"""
	API endpoint that allows Matchups to be viewed or edited.
	Optional GET parameters include: ?tbracketid=, ?gameid=
	"""
	queryset = Matchup.objects.all()
	serializer_class = MatchupSerializer

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

class TbracketViewSet(ModelViewSet):
	"""
	API endpoint that allows Tbracket:games to be viewed
	Brackets can be filtered by tbracket table id, e.g. api/entries/1
	Mandatory GET parameter: ?gameid=
	"""
	queryset = Tbracket.objects.all().order_by('id')
	serializer_class = TbracketSerializer

	def destroy(self, request, *args, **kwargs):
		"""
		Delete Tbracket entry and associated Matchup entries
		"""
		try:
			instance = self.get_object()
			tbracket_id = instance.id
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


#Functional views for (old) Django pages

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