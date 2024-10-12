# backend/apps/cleanair/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CleanAirResourceViewSet, ForumEventViewSet, PartnerViewSet, ProgramViewSet,
    SessionViewSet, SupportViewSet, PersonViewSet, ForumResourceViewSet,
    ResourceSessionViewSet, ResourceFileViewSet, EngagementViewSet, ObjectiveViewSet
)

router = DefaultRouter()
router.register(r'clean-air-resources', CleanAirResourceViewSet)
router.register(r'forum-events', ForumEventViewSet)
router.register(r'partners', PartnerViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'supports', SupportViewSet)
router.register(r'persons', PersonViewSet)
router.register(r'forum-resources', ForumResourceViewSet)
router.register(r'resource-sessions', ResourceSessionViewSet)
router.register(r'resource-files', ResourceFileViewSet)
router.register(r'engagements', EngagementViewSet)
router.register(r'objectives', ObjectiveViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
