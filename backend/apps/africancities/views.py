# views.py

from rest_framework import viewsets, permissions
from .models import AfricanCountry, City, Content, Description, Image
from .serializers import (
    AfricanCountrySerializer,
    CitySerializer,
    ContentSerializer,
    DescriptionSerializer,
    ImageSerializer,
)


class AfricanCountryViewSet(viewsets.ModelViewSet):
    queryset = AfricanCountry.objects.all()
    serializer_class = AfricanCountrySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DescriptionViewSet(viewsets.ModelViewSet):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
