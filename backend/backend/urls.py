"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
import products.views as pv
# from .views import*
import vendors.views as vv
import users.views as uv

router = routers.DefaultRouter()
# router.register(r'products', pv.ProductListView, 'Product')
router.register(r'vendors', vv.VendorView, 'Vendor')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('generic-products/', pv.ProductListView.as_view() ),
    path('generic-products/<id>/', pv.ProductDetailView.as_view() ),
    path('generic-users/', uv.UserListView.as_view() ),
    path('generic-user-create/', uv.UserCreate.as_view() ),
    path('generic-users/<id>/', uv.UserDetailView.as_view() ),
    path('product-images/', pv.ProductImageUploadAPIView.as_view(), name="img"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
