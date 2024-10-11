from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BoardMemberViewSet

# Initialize the router
router = DefaultRouter()

# Register the BoardMemberViewSet
router.register(r'board-members', BoardMemberViewSet, basename='board-member')

urlpatterns = [
    path('', include(router.urls)),
]
