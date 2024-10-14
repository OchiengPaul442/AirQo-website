# urls.py

from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'african-countries',
                views.AfricanCountryViewSet, basename='africancountry')
router.register(r'cities', views.CityViewSet, basename='city')
router.register(r'contents', views.ContentViewSet, basename='content')
router.register(r'descriptions', views.DescriptionViewSet,
                basename='description')
router.register(r'images', views.ImageViewSet, basename='image')

urlpatterns = router.urls
