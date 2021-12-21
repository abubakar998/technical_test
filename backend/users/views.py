from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer
from django.contrib.auth.models import User

# Create your views here.

class UserCreate(generics.CreateAPIView):

    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserListView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'id'
