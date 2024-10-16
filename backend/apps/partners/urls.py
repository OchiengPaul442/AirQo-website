# urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PartnerViewSet

router = DefaultRouter()
router.register(r'partners', PartnerViewSet, basename='partner')

urlpatterns = [
    path('api/', include(router.urls)),
]
