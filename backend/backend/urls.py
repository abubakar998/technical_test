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
from django.urls import path, include, re_path
from django.conf import settings

from rest_framework.permissions import AllowAny
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from dj_rest_auth.views import PasswordResetView, PasswordResetConfirmView


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

    path(('users/'), include('users.urls')),
    path('generic-users/', uv.UserListView.as_view() ),
    path('generic-user-create/', uv.UserCreate.as_view() ),
    path('generic-users/<id>/', uv.UserDetailView.as_view() ),
    path('product-images/', pv.ProductImageUploadAPIView.as_view(), name="img"),
    path('image-upload/', pv.ImageUploadAPIView.as_view(), name="img_upload"),
    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


API_INFO = openapi.Info(
    title="jumpet API",
    default_version="v1",
    description="API documentation for jumpet App",
)

API_DOCS_SCHEMA_VIEWS = get_schema_view(
    API_INFO,
    public=True,
    permission_classes=(AllowAny,),
)

# if settings.USE_API_DOCS:
urlpatterns += [
    path("api-docs/", API_DOCS_SCHEMA_VIEWS.with_ui("swagger", cache_timeout=0), name="api_playground")
]