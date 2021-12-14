from django.contrib import admin
from .models import Product, ProductImages

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'address','price', 'is_published', 'price', 'list_date','vendor')
    list_display_links = ('id', 'title')
    list_filter = ('vendor',)
    list_editable = ('is_published',)
    search_fields = ('title', 'address', 'city', 'price')
    list_per_page = 25
# Register your models here.

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImages)
