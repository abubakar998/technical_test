from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import ProductSerializer, ProductImagesSerializer, ImagesSerializer
from rest_framework import generics
from .models import Product, ProductImages

# Create your views here.

class ProductListView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'


class ProductImageUploadAPIView(generics.CreateAPIView):
    serializer_class = ProductImagesSerializer
    queryset = ProductImages.objects.all()


class ImageUploadAPIView(generics.CreateAPIView):
    serializer_class = ImagesSerializer
    queryset = ProductImages.objects.all()