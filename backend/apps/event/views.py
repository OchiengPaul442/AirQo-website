from rest_framework import viewsets
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource
from .serializers import EventSerializer, InquirySerializer, ProgramSerializer, SessionSerializer, PartnerLogoSerializer, ResourceSerializer


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class InquiryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer


class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer


class SessionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer


class PartnerLogoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PartnerLogo.objects.all()
    serializer_class = PartnerLogoSerializer


class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
