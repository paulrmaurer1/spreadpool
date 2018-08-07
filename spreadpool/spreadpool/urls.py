# spreadpool/urls.py

#Django modules
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include
from django.contrib.auth import views as auth_views

#REST framework modules
from rest_framework import routers

#App: bracket views
from bracket import views

#REST framework router class definitions
# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),  #Django admin site, default
    url(r'^login/$', auth_views.login, name='login'),  #point login/ to default Django Login form
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),
	# path('signup/', views.SignUp.as_view(), name='signup'),
	url(r'', include('bracket.urls')),  #point home URL to urls in bracket app
    
    #REST framework urlpatterns
    # url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]