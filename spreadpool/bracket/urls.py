# bracket/urls.py

from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'bracket'
urlpatterns = [
	url(r'^$', views.HomeView.as_view(), name='home'),
	path('signup/', views.SignUp.as_view(), name='signup'),
	path('profile/<int:pk>/', views.ProfileView.as_view(), name='profile'),
	path('profile/<int:pk>/edit/', views.ProfileEdit.as_view(), name='profile_edit'),
	path('profile/<int:pk>/delete/', views.ProfileDelete.as_view(), name='profile_delete'),
	
	# Old FBV urlpatterns
	# path('signup/', views.signup, name='signup'),
	# path('profile/<int:pk>/edit/', views.profile_edit, name='profile_edit'),
	# path('profile/<int:pk>/delete/', views.profile_delete, name='profile_delete'),
	
	]