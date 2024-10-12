# backend/apps/cleanair/views.py

from rest_framework import viewsets
from .models import (
    CleanAirResource, ForumEvent, Partner, Program, Session,
    Support, Person, ForumResource, ResourceSession, ResourceFile, Engagement, Objective
)
from .serializers import (
    CleanAirResourceSerializer, ForumEventSerializer, PartnerSerializer,
    ProgramSerializer, SessionSerializer, SupportSerializer,
    PersonSerializer, ForumResourceSerializer, ResourceSessionSerializer,
    ResourceFileSerializer, EngagementSerializer, ObjectiveSerializer
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class CleanAirResourceViewSet(viewsets.ModelViewSet):
    queryset = CleanAirResource.objects.all()
    serializer_class = CleanAirResourceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ForumEventViewSet(viewsets.ModelViewSet):
    queryset = ForumEvent.objects.all()
    serializer_class = ForumEventSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class PartnerViewSet(viewsets.ModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SupportViewSet(viewsets.ModelViewSet):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ForumResourceViewSet(viewsets.ModelViewSet):
    queryset = ForumResource.objects.all()
    serializer_class = ForumResourceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ResourceSessionViewSet(viewsets.ModelViewSet):
    queryset = ResourceSession.objects.all()
    serializer_class = ResourceSessionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ResourceFileViewSet(viewsets.ModelViewSet):
    queryset = ResourceFile.objects.all()
    serializer_class = ResourceFileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class EngagementViewSet(viewsets.ModelViewSet):
    queryset = Engagement.objects.all()
    serializer_class = EngagementSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ObjectiveViewSet(viewsets.ModelViewSet):
    queryset = Objective.objects.all()
    serializer_class = ObjectiveSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
