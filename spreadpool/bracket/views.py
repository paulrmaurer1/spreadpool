#bracket/views.py

#Django modules
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
#Since we overrode standard User with bracket.User
#i.e. AUTH_USER_MODEL = 'bracket.User' in settings file
#need to update User with this line
User = get_user_model()

#REST framework modules
from rest_framework import viewsets
from bracket.serializers import UserSerializer, GroupSerializer

# Create your views here.

# Use login_required decorator to not allow to any  
# view without authenticating, otherwise redirect to login
@login_required(login_url='login/')
def home(request):
    return render(request,'bracket/home.html')


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