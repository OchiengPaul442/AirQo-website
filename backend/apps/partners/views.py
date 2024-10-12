# views.py
from rest_framework import viewsets
from .models import Partner
from .serializers import PartnerSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class PartnerViewSet(viewsets.ModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
