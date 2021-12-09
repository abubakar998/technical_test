from rest_framework import serializers
from .models import Product, ProductImages
from vendors.serializers import VendorSerializer

class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImages
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    vendor = VendorSerializer()
    photo = ProductImagesSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'