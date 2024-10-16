from rest_framework import serializers
from .models import AfricanCountry, City, Content, Description, Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'order', 'content']


class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = ['id', 'paragraph', 'order', 'content']


class ContentSerializer(serializers.ModelSerializer):
    descriptions = DescriptionSerializer(many=True, read_only=True)
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Content
        fields = ['id', 'title', 'order', 'city', 'descriptions', 'images']


class CitySerializer(serializers.ModelSerializer):
    contents = ContentSerializer(many=True, read_only=True)

    class Meta:
        model = City
        fields = ['id', 'city_name', 'order', 'african_country', 'contents']


class AfricanCountrySerializer(serializers.ModelSerializer):
    cities = CitySerializer(many=True, read_only=True)

    class Meta:
        model = AfricanCountry
        fields = ['id', 'country_name', 'country_flag', 'order', 'cities']
