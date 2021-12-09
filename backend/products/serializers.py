from rest_framework import serializers
from .models import Product, ProductImages

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','vendor','title', 'address','description','price', 'bedrooms','bathrooms', 'sqft', 'photo_main','photo', 'is_published', 'list_date' )

