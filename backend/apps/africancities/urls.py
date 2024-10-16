from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AfricanCityViewSet

router = DefaultRouter()
router.register(r'african-cities', AfricanCityViewSet,
                basename='african-cities')

urlpatterns = [
    path('', include(router.urls)),
]
