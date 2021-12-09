from django.db import models
from datetime import datetime
from vendors.models import Vendor

# Create your models here.

class ProductImages(models.Model):
    photo= models.ImageField(upload_to='photos/%Y/%m/%d',blank=True)
    def __str__(self):
        pk = self.id
        return f"photo-{pk}"

class Product(models.Model):
    vendor = models.ForeignKey(Vendor, on_delete = models.DO_NOTHING)
    title = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    sqft = models.IntegerField()
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d')
    photo = models.ManyToManyField(ProductImages,  blank=True, null=True,)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.title

