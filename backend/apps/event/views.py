# views.py
from rest_framework import viewsets
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource
from .serializers import (
    EventListSerializer,
    EventDetailSerializer,
    InquirySerializer,
    ProgramSerializer,
    SessionSerializer,
    PartnerLogoSerializer,
    ResourceSerializer,
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset that provides the standard actions for Event model.
    """
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'id'  # Assuming 'id' is the UUID field

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EventDetailSerializer
        return EventListSerializer

    def get_queryset(self):
        queryset = Event.objects.prefetch_related(
            'inquiries',
            'programs__sessions',
            'partner_logos',
            'resources'
        ).all()
        category = self.request.query_params.get('category', None)
        if category in ['airqo', 'cleanair']:
            queryset = queryset.filter(website_category=category)
        return queryset

    # The 'details' action seems redundant since 'retrieve' already provides detail.
    # If you have a specific purpose for it, you can keep it; otherwise, consider removing it.
    # Uncomment the following if needed:
    """
    @action(detail=True, methods=['get'])
    def details(self, request, id=None):
        event = self.get_object()
        serializer = self.get_serializer(event)
        return Response(serializer.data)
    """


class InquiryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Inquiry.objects.select_related('event').all()
    serializer_class = InquirySerializer
    lookup_field = 'id'


class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.select_related(
        'event').prefetch_related('sessions').all()
    serializer_class = ProgramSerializer
    lookup_field = 'id'


class SessionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Session.objects.select_related('program__event').all()
    serializer_class = SessionSerializer
    lookup_field = 'id'


class PartnerLogoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PartnerLogo.objects.select_related('event').all()
    serializer_class = PartnerLogoSerializer
    lookup_field = 'id'


class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.select_related('event').all()
    serializer_class = ResourceSerializer
    lookup_field = 'id'
