# /bracket/forms/forms.py

from django import forms

from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from django.forms import ModelForm
User = get_user_model()

class SignupForm(UserCreationForm):

	class Meta:
		model = User
		fields = ('first_name', 'last_name', 'num_entries', 'mult_entry_type', 'email', 'password1', 'password2',)

class ProfileForm(ModelForm):

	class Meta:
		model = User
		fields = ('first_name', 'last_name', 'email', 'num_entries', 'mult_entry_type',)

class DeleteProfileForm(ModelForm):

	class Meta:
		model = User
		fields = ()