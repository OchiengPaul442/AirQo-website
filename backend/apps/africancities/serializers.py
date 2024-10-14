# serializers.py

from rest_framework import serializers
from .models import AfricanCountry, City, Content, Description, Image


class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['id', 'image', 'image_url', 'order',
                  'content', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        return obj.image.url if obj.image else None


class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = ['id', 'paragraph', 'order',
                  'content', 'created_at', 'updated_at']


class ContentSerializer(serializers.ModelSerializer):
    descriptions = DescriptionSerializer(many=True, read_only=True)
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Content
        fields = ['id', 'title', 'order', 'city',
                  'descriptions', 'images', 'created_at', 'updated_at']


class CitySerializer(serializers.ModelSerializer):
    contents = ContentSerializer(many=True, read_only=True)

    class Meta:
        model = City
        fields = ['id', 'city_name', 'order', 'african_country',
                  'contents', 'created_at', 'updated_at']


class AfricanCountrySerializer(serializers.ModelSerializer):
    cities = CitySerializer(many=True, read_only=True)

    class Meta:
        model = AfricanCountry
        fields = ['id', 'country_name', 'country_flag',
                  'order', 'cities', 'created_at', 'updated_at']
