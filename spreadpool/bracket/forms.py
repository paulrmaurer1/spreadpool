# /bracket/forms/forms.py

from django import forms

from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from django.forms import ModelForm
User = get_user_model()

class CheckNumEntriesMixin(object):
	def clean_num_entries(self):
		_num_entries = self.cleaned_data['num_entries']
		if _num_entries > 4 or _num_entries < 0:
			raise forms.ValidationError("Number of entries must be between 1-4")
		return _num_entries

class SignupForm(CheckNumEntriesMixin, UserCreationForm):

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