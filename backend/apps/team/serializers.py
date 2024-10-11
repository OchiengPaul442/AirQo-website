from rest_framework import serializers
from .models import Member, MemberBiography
from django.conf import settings
from cloudinary.utils import cloudinary_url


class MemberBiographySerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberBiography
        fields = ['id', 'description', 'order']


class MemberSerializer(serializers.ModelSerializer):
    descriptions = MemberBiographySerializer(many=True, read_only=True)
    picture_url = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = ['id', 'name', 'title', 'about', 'picture_url',
                  'twitter', 'linked_in', 'order', 'descriptions']

    def get_picture_url(self, obj):
        if obj.picture:
            if settings.DEBUG:
                # If in development mode, use local file URL
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.picture.url)
            else:
                # Use cloudinary_url for secure Cloudinary URLs
                url, options = cloudinary_url(
                    obj.picture.public_id, secure=True)
                return url
        return None
