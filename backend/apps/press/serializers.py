from rest_framework import serializers
from .models import Press


class PressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Press
        fields = [
            'id',
            'article_title',
            'article_intro',
            'article_link',
            'date_published',
            'publisher_logo',
            'website_category',
            'article_tag',
            'order',
            'is_deleted',
            'created',
            'modified'
        ]
        read_only_fields = ['created', 'modified', 'is_deleted']
