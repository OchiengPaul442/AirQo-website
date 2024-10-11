from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CareerViewSet, DepartmentViewSet

# Create a router and register both Career and Department viewsets
router = DefaultRouter()
router.register(r'careers', CareerViewSet, basename='career')
# Ensure this is correctly registered
router.register(r'departments', DepartmentViewSet, basename='department')

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('', include(router.urls)),
]
