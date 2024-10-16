from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AfricanCountryViewSet,
    CityViewSet,
    ContentViewSet,
    DescriptionViewSet,
    ImageViewSet,
)

router = DefaultRouter()
router.register(r'africancountries', AfricanCountryViewSet)
router.register(r'cities', CityViewSet)
router.register(r'contents', ContentViewSet)
router.register(r'descriptions', DescriptionViewSet)
router.register(r'images', ImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
