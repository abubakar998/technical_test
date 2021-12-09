from django.contrib import admin
from .models import Product, ProductImages

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'price', 'is_published', 'price', 'list_date','vendor')

# Register your models here.

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImages)
