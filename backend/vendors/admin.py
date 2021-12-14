from django.contrib import admin
from .models import Vendor

class VendorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')
    list_display_links = ('id', 'name')
    search_fields = ('name', )
    list_per_page = 25

# Register your models here.
admin.site.register(Vendor,VendorAdmin)
