from rest_framework.routers import DefaultRouter
from .views import ImpactNumberViewSet

router = DefaultRouter()

# Register the ViewSet with the router, setting a basename for the ViewSet
router.register(r'impact-number', ImpactNumberViewSet, basename='impact-number')

urlpatterns = router.urls
