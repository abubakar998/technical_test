from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VendorSerializer
from .models import Vendor

# Create your views here.

class VendorView(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    queryset = Vendor.objects.all()
    
