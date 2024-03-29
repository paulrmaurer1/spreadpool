# bracket/urls.py

from django.urls import path, re_path
from django.conf.urls import url
from . import views

app_name = 'bracket'
urlpatterns = [
	re_path(r'^$', views.IndexView.as_view(), name='home'),
	path('signup/', views.SignUp.as_view(), name='signup'),
	
  # Old CBV urlpatters for profile editing - replace with Angular
	# path('profile/<int:pk>/', views.ProfileView.as_view(), name='profile'),
	# path('profile/<int:pk>/edit/', views.ProfileEdit.as_view(), name='profile_edit'),
	# path('profile/<int:pk>/delete/', views.ProfileDelete.as_view(), name='profile_delete'),

	# Unecessary CBV urlpatterns - replaced with Angular
	# path('admin_page/', views.AdminView.as_view(), name='admin_page'),
	# path('tbracket_page/', views.tbracket_page, name='tbracket_page'),
	# path('tbracket_reassign/', views.tbracket_reassign_teams, name='tbracket_reassign'),
	
	# Old FBV urlpatterns for above
	# url(r'^$', views.index, name='home'),
	# path('signup/', views.signup, name='signup'),
	# path('profile/<int:pk>/edit/', views.profile_edit, name='profile_edit'),
	# path('profile/<int:pk>/delete/', views.profile_delete, name='profile_delete'),
	
	]