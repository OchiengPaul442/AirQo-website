from rest_framework import serializers
from .models import Tag, Highlight
# Import cloudinary_url to generate secure URL
from cloudinary.utils import cloudinary_url


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']


class HighlightSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    tag_ids = serializers.PrimaryKeyRelatedField(
        queryset=Tag.objects.all(),
        many=True,
        write_only=True,
        source='tags'
    )
    # SerializerMethodField to get the secure Cloudinary URL for the image
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Highlight
        fields = [
            'id',
            'title',
            'tags',
            'tag_ids',
            'image_url',  # Use the secure URL field instead of the raw image field
            'link',
            'link_title',
            'order'
        ]

    def get_image_url(self, obj):
        if obj.image:
            # Generate a secure Cloudinary URL for the image
            return cloudinary_url(obj.image.public_id, secure=True)[0]
        return None
