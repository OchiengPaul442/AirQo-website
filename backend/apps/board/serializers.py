from rest_framework import serializers
from .models import BoardMember, BoardMemberBiography
from django.conf import settings
from cloudinary.utils import cloudinary_url


class BoardMemberBiographySerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardMemberBiography
        fields = ['id', 'description', 'order']


class BoardMemberSerializer(serializers.ModelSerializer):
    descriptions = BoardMemberBiographySerializer(many=True, read_only=True)
    picture_url = serializers.SerializerMethodField()

    class Meta:
        model = BoardMember
        fields = ['id', 'name', 'title', 'picture_url',
                  'twitter', 'linked_in', 'order', 'descriptions']

    def get_picture_url(self, obj):
        if obj.picture:
            if settings.DEBUG:
                # If in development mode, use local file URL
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.picture.url)
            else:
                # Cloudinary URL for production
                url, options = cloudinary_url(
                    obj.picture.public_id, secure=True)
                return url
        return None
