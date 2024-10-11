# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    EventViewSet,
    InquiryViewSet,
    ProgramViewSet,
    SessionViewSet,
    PartnerLogoViewSet,
    ResourceViewSet,
)

router = DefaultRouter()
router.register(r'events', EventViewSet, basename='event')
router.register(r'inquiries', InquiryViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'partner-logos', PartnerLogoViewSet)
router.register(r'resources', ResourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
