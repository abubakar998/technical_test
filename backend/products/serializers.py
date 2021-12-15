from rest_framework import serializers
from .models import Product, ProductImages
from vendors.serializers import VendorSerializer

class ProductImagesSerializer(serializers.ModelSerializer):
    pid = serializers.IntegerField(write_only=True)
    class Meta:
        model = ProductImages
        fields = '__all__'

        write_only_fields = ("pid",)

    def create(self, validated_data):
        pid = validated_data.pop('pid')
        instance = self.Meta.model.objects.create(
            **validated_data
        )
         
        product = Product.objects.get(id=pid)
        product.photo.add(instance)
        product.save()
        return instance


class ProductSerializer(serializers.ModelSerializer):
    vendor_detail = VendorSerializer(source='vendor', read_only = True)
    photo_detail = ProductImagesSerializer(source='photo', read_only = True, many=True)
    class Meta:
        model = Product
        read_only_fields = ('vendor_detail', 'photo_detail',)
        fields = '__all__'
        
        # fields = ('id', 'vendor', 'vendor_detail','title','address', 'city','description','price','bedrooms', 'bathrooms', 'sqft', 'list_date', 'photo', 'photo_detail')

    
    # def create(self,validated_date):
    #     photo = validated_date.pop('photo', [])
    #     instance = self.Meta.model.objects.create(
    #         **validated_date
    #     )

    #     if photo:
    #         instance.photo.add(**photo)

    #     return instance