#bracket/views.py

#Django modules
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model, login, authenticate
from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.http import Http404
'''
Since we overrode standard User with bracket.User
i.e. AUTH_USER_MODEL = 'bracket.User' in settings file
need to update User with following line
'''
User = get_user_model()

#Internal modules
from .forms import SignupForm, ProfileForm

#REST framework modules
from rest_framework import viewsets
from bracket.serializers import UserSerializer, GroupSerializer

# Create your views here.

class HomeView(LoginRequiredMixin, ListView):
	# Main Page with roster list during signup period
	# **TO DO** Create view of brackets on main page after signup period
	template_name = 'bracket/home.html'
	login_url = '/login/'
	# redirect_field_name = 'redirect_to'

	def get_queryset(self):  # this is called as 'user_list', by default in template
		# Create list that exludes admin and the user who is logged in, sorted by most recent joined
		custom_user_list = User.objects.exclude(username='admin')
		custom_user_list = custom_user_list.exclude(email=self.request.user.email)
		custom_user_list = custom_user_list.order_by('-date_joined')
		return custom_user_list

	def get_context_data(self, **kwargs):
		# Call the base implementation first to get a context
		context = super(HomeView, self).get_context_data(**kwargs)
		# Pass back the currently logged in user
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
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer