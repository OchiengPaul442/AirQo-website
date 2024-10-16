# serializers.py
from rest_framework import serializers
from .models import Partner, PartnerDescription
from cloudinary import CloudinaryImage
from django.conf import settings


class PartnerDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerDescription
        fields = ['id', 'description', 'order', 'partner']


class PartnerSerializer(serializers.ModelSerializer):
    descriptions = PartnerDescriptionSerializer(many=True, read_only=True)
    partner_logo_url = serializers.SerializerMethodField()
    partner_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Partner
        fields = [
            'id',
            'partner_name',
            'partner_logo',
            'partner_logo_url',
            'partner_image',
            'partner_image_url',
            'order',
            'partner_link',
            'type',
            'website_category',
            'descriptions',
        ]
        ref_name = 'PartnersPartnerSerializer'

    def get_partner_logo_url(self, obj):
        request = self.context.get('request')
        if obj.partner_logo:
            if settings.DEBUG:
                return request.build_absolute_uri(obj.partner_logo.url) if request else obj.partner_logo.url
            else:
                # For Cloudinary, use the Cloudinary URL
                return CloudinaryImage(obj.partner_logo.public_id).build_url(secure=True)
        return None

    def get_partner_image_url(self, obj):
        request = self.context.get('request')
        if obj.partner_image:
            if settings.DEBUG:
                return request.build_absolute_uri(obj.partner_image.url) if request else obj.partner_image.url
            else:
                # For Cloudinary, use the Cloudinary URL
                return CloudinaryImage(obj.partner_image.public_id).build_url(secure=True)
        return None
