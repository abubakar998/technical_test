from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import ProductSerializer
from rest_framework import generics
from .models import Product

# Create your views here.

class ProductListView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductDetailView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'