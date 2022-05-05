# spreadpool/urls.py
#Django modules
from django.contrib import admin
from django.urls import path,re_path, include
from django.conf.urls import url, include
from django.contrib.auth import views as auth_views

#REST framework modules
from rest_framework.routers import DefaultRouter

#REST jwt (JSON Web Token) modules
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

#App: bracket views
from bracket import views
from bracket import forms

#Create a router and register our viewsets with it. This takes care of needing to explicitly create a set of views from ViewSets
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'entries', views.EntryViewSet)
router.register(r'entry_names', views.EntryPlayerByBracketAndTeamViewSet)
router.register(r'entry_brackets', views.EntryBracketsByPlayerViewSet)
router.register(r'entry_standings', views.EntryStandingsViewSet)
router.register(r'entry_myteams', views.EntryMyTeamsViewSet)
router.register(r'games', views.GameViewSet)
router.register(r'matchups', views.MatchupViewSet)
router.register(r'tbrackets', views.TbracketViewSet)
router.register(r'games_new_matchups', views.NewGameWithMatchupDataViewSet)
router.register(r'regions', views.RegionViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),  #Django admin site, default
    re_path(r'^login/$', auth_views.LoginView.as_view(authentication_form=forms.MyAuthenticationForm), name='login'),  #Direct login to default Django Login form
    re_path(r'^logout/$', auth_views.LogoutView.as_view(), name='logout'), #Direct logout to LOGOUT_REDIRECT_URL setting
    re_path(r'^', include('django.contrib.auth.urls')), #default url patterns for password reset views/templates
    re_path(r'^', include('bracket.urls')),  #point home URL to urls in bracket app
    
    # REST framework urlpatterns
    url(r'^api/', include(router.urls)), # Specify that all API calls need to be prefaced with api/*
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), # Standard login, logout views for browsable API
    path(r'api/api-token-auth/', obtain_jwt_token),  # jwt endpoint to obtain token & allow authentication via api, with prepended 'api/'
    path(r'api/api-token-refresh/', refresh_jwt_token),  # jwt endpoint to request a new token, with prepended 'api/'

    # Catch-all url pattern for compatibility with Angular routes
	url(r'^(?P<path>.*)/$', views.IndexView.as_view()),
]