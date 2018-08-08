# bracket/urls.py

from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'bracket'
urlpatterns = [
	url(r'^$', views.HomeView.as_view(), name='home'),
	path('signup/', views.signup, name='signup'),
	]