from cloudinary.utils import cloudinary_url
from rest_framework import serializers
from .models import Press
from django.conf import settings


class PressSerializer(serializers.ModelSerializer):
    publisher_logo_url = serializers.SerializerMethodField()

    class Meta:
        model = Press
        fields = [
            'id',
            'article_title',
            'article_intro',
            'article_link',
            'date_published',
            'publisher_logo',
            'publisher_logo_url',  # Include the generated logo URL
            'website_category',
            'article_tag',
            'order',
            'is_deleted',
            'created',
            'modified',
            'created_by',
            'modified_by'
        ]
        read_only_fields = ['created', 'modified',
                            'is_deleted', 'created_by', 'modified_by']

    def get_publisher_logo_url(self, obj):
        """
        Return the full URL for the publisher_logo, depending on the environment.
        """
        if obj.publisher_logo:
            if settings.DEBUG:
                # In development, return the local file URL
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.publisher_logo.url)
            else:
                # In production, return the Cloudinary URL
                return cloudinary_url(obj.publisher_logo.public_id, secure=True)[0]
        return None
