from django.shortcuts import render

#REST framework modules
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from bracket.serializers import UserSerializer, GroupSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your views here.

#REST framework classes
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