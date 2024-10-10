from django.urls import path
from .views import PressViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'press', PressViewSet, basename='press')

urlpatterns = router.urls
