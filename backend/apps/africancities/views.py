from rest_framework import viewsets
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


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer


class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer


class DescriptionViewSet(viewsets.ModelViewSet):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
