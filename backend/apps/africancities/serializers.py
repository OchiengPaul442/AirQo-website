from rest_framework import serializers
# Import cloudinary_url for generating secure URLs
from cloudinary.utils import cloudinary_url
from .models import AfricanCountry, City, Content, Description, Image
# Import settings to determine the environment (DEBUG)
from django.conf import settings


class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ['id', 'image', 'image_url', 'order',
                  'content', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        # Return secure Cloudinary URL or local URL based on DEBUG setting
        if settings.DEBUG:
            # In development, return local file URL
            return obj.image.url if obj.image else None
        else:
            # In production, return secure Cloudinary URL with transformations
            if obj.image:
                cloudinary_img_url, options = cloudinary_url(
                    obj.image.name,  # The file name in Cloudinary
                    secure=True,  # Ensure the URL is secure (https)
                    # Optional transformations
                    transformation=[
                        {"quality": "auto:good", "fetch_format": "auto"}]
                )
                return cloudinary_img_url
            return None


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
    # Add custom field for flag URL
    country_flag_url = serializers.SerializerMethodField()

    class Meta:
        model = AfricanCountry
        fields = ['id', 'country_name', 'country_flag', 'country_flag_url',
                  'order', 'cities', 'created_at', 'updated_at']

    def get_country_flag_url(self, obj):
        # Return secure Cloudinary URL or local URL based on DEBUG setting
        if settings.DEBUG:
            # In development, return local file URL
            return obj.country_flag.url if obj.country_flag else None
        else:
            # In production, return secure Cloudinary URL with transformations
            if obj.country_flag:
                cloudinary_img_url, options = cloudinary_url(
                    obj.country_flag.name,  # The file name in Cloudinary
                    secure=True,  # Ensure the URL is secure (https)
                    # Optional transformations
                    transformation=[
                        {"quality": "auto:good", "fetch_format": "auto"}]
                )
                return cloudinary_img_url
            return None
