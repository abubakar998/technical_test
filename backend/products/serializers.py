from rest_framework import serializers
from .models import Product, ProductImages
from vendors.serializers import VendorSerializer

class ProductImagesSerializer(serializers.ModelSerializer):
    pid = serializers.IntegerField(write_only=True)
    class Meta:
        model = ProductImages
        fields = '__all__'

        write_only_fields = ("pid",)

    def create(self, validated_date):
        pid = validated_date.pop('pid')
        instance = self.Meta.model.objects.create(
            **validated_date
        )
         
        product = Product.objects.get(id=pid)
        product.photo.add(instance)
        product.save()
        return instance


class ProductSerializer(serializers.ModelSerializer):
    vendor = VendorSerializer()
    photo = ProductImagesSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'

    
    # def create(self,validated_date):
    #     photo = validated_date.pop('photo', [])
    #     instance = self.Meta.model.objects.create(
    #         **validated_date
    #     )

    #     if photo:
    #         instance.photo.add(**photo)

    #     return instance