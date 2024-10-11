from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet

# Initialize the router
router = DefaultRouter()

# Register the TeamViewSet
router.register(r'team', TeamViewSet, basename='team')

urlpatterns = [
    path('', include(router.urls)),
]
