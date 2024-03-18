# /bracket/forms/forms.py

#Django modules
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from django.forms import ModelForm
User = get_user_model()

#Internal modules
from .models import Tbracket

class CheckNumEntriesMixin(object):
	'''
	Mixin to ensure that # of entries is between 1-4
	either when signing up or editing one's own profile
	'''
	def clean_num_entries(self):
		_num_entries = self.cleaned_data['num_entries']
		if _num_entries > 4 or _num_entries < 0:
			raise forms.ValidationError("Number of entries must be between 1-4")
		return _num_entries
	
class CheckFirstLastNameMixin(object):
	'''
	Mixin to ensure that first_name is different than
	last_name. Bots register with this approach.
	'''
	def clean_last_name(self):
		_last_name = self.cleaned_data['last_name']
		_first_name = self.cleaned_data['first_name']
		if _last_name == _first_name:
			raise forms.ValidationError("First name and last name cannot be the same.")
		return _last_name

class MyAuthenticationForm(AuthenticationForm):
	"""
	Override base django Authentication Form to convert email(username) to lowercase before login
	"""
	def clean_username(self):
		data = self.cleaned_data['username']
		return data.lower()

class SignupForm(CheckNumEntriesMixin, CheckFirstLastNameMixin, UserCreationForm):

	class Meta:
		model = User
		fields = ('first_name', 'last_name', 'num_entries', 'mult_entry_type', 'email', 'password1', 'password2',)
		# help_texts = {'num_entries': ('Max number of entries is 4.')}

class ProfileForm(CheckNumEntriesMixin, ModelForm):

	class Meta:
		model = User
		fields = ('first_name', 'last_name', 'email', 'num_entries', 'mult_entry_type',)

class DeleteProfileForm(ModelForm):

	class Meta:
		model = User
		fields = ()

class TbracketUpdateForm(ModelForm):

	class Meta:
		model = Tbracket
		fields = ('name',)
		widgets = {
			'name': forms.TextInput(attrs={
				'id': 'tbracket-name', 
				'required': True,
			})
		}

class TbracketNewForm(ModelForm):

	class Meta:
		model = Tbracket
		fields = ('name',)
		widgets = {
			'name': forms.TextInput(attrs={
				'id': 'tbracket-new-name', 
				'required': True,
			})
		}