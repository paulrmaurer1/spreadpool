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

#REST framework modules
from rest_framework.viewsets import ModelViewSet
from bracket.serializers import UserSerializer, GroupSerializer, EntrySerializer, \
GameSerializer, MatchupSerializer, TbracketSerializer, RawEntrySerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class HomeView(LoginRequiredMixin, ListView):
	# Main Page with roster list during signup period
	# **TO DO** Create view of brackets on main page after signup period
	template_name = 'bracket/home.html'
	login_url = '/login/'
	# redirect_field_name = 'redirect_to'

	def get_queryset(self):  # this is referenced as 'user_list' by default in template
		# Create list that exludes admin and the user who is logged in, sorted by most recent joined
		custom_user_list = User.objects.exclude(username='admin')
		custom_user_list = custom_user_list.exclude(email=self.request.user.email)
		custom_user_list = custom_user_list.order_by('-date_joined')
		return custom_user_list

	def get_context_data(self, **kwargs):
		# Call the base implementation first to get a context
		context = super(HomeView, self).get_context_data(**kwargs)
		# Pass back the currently logged in user as 'logged_in_user'
		context['logged_in_user'] = User.objects.get(email=self.request.user.email)
		return context
		
class SignUp(CreateView):
	# Sign up page for people to enter pool
	form_class = SignupForm
	# success_url = reverse_lazy('bracket:home')
	template_name = 'bracket/signup.html'

	#Create username and login user during form validation & saving process
	def form_valid(self, form):
		model = form.save(commit=False)
		model.username = form.cleaned_data.get('first_name')[0].lower() + form.cleaned_data.get('last_name').lower()
		model.save()
		# Log in user that just signed up and direct to Home page
		email = form.cleaned_data.get('email')
		raw_password = form.cleaned_data.get('password1')
		user = authenticate(email=email, password=raw_password)
		login(self.request, user)
		return redirect('bracket:home')

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

class RawEntryViewSet(ModelViewSet):
	"""
	API endpoint that returns raw keys for player and team fields
	"""
	queryset = Entry.objects.all()
	serializer_class = RawEntrySerializer

	def get_queryset(self):
		"""
		Optionally filter entries by tbracketid
		"""
		queryset = Entry.objects.all()
		tbracketid = self.request.query_params.get('tbracketid', None)
		if tbracketid is not None:
			queryset = queryset.filter(tbracket=tbracketid)
		return queryset

# class EntryViewSetByPlayer(ModelViewSet):
# 	"""
# 	API endpoint that allows entries to be looked up by playerid
# 	e.g. player_entries/player_id/ i.e. player_entries/4/
# 	"""
# 	queryset = Entry.objects.all()
# 	serializer_class = EntryByPlayerSerializer
# 	lookup_field = 'player'  # this substitutes player_id for default pk (id) in url

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
		Optionally filter games by tbracket_id
		"""
		queryset = Game.objects.all()
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

#Functional responses

def tbracket_reassign_teams(request):
	"""
	Reassign teams to players within Entry model, acto upon bracket id sent by Ajax call to this view
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