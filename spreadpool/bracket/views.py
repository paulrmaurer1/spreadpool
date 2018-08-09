#bracket/views.py

#Django modules
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model, login, authenticate
from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin
#Since we overrode standard User with bracket.User
#i.e. AUTH_USER_MODEL = 'bracket.User' in settings file
#need to update User with this line
User = get_user_model()

#REST framework modules
from rest_framework import viewsets
from bracket.serializers import UserSerializer, GroupSerializer

from .forms import SignupForm

# Create your views here.

class HomeView(LoginRequiredMixin, generic.ListView):
	template_name = 'bracket/home.html'
	login_url = '/login/'
	# redirect_field_name = 'redirect_to'

	def get_queryset(self):  # this is called as 'user_list', by default in template
		return User.objects.order_by('-date_joined').exclude(username='admin')

def signup(request):
	if request.method == "POST":  #after Sign-up form is submitted
		form = SignupForm(request.POST)
		if form.is_valid():
			new_user = form.save(commit=False)
			# create a default username from first & last name since required by User model
			new_user.username = form.cleaned_data.get('first_name')[0].lower() + form.cleaned_data.get('last_name').lower()
			new_user.save()
			email = form.cleaned_data.get('email')
			raw_password = form.cleaned_data.get('password1')
			user = authenticate(email=email, password=raw_password)
			login(request, user)
			return redirect('bracket:home')
	else:
		form = SignupForm()
	return render(request, 'bracket/signup.html', {'form': form})



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