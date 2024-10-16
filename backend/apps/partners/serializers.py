# serializers.py

from rest_framework import serializers
from .models import Partner, PartnerDescription


class PartnerDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerDescription
        fields = ("id", "description", "partner", "order")


class PartnerSerializer(serializers.ModelSerializer):
    descriptions = PartnerDescriptionSerializer(read_only=True, many=True)
    partner_image = serializers.SerializerMethodField()
    partner_logo = serializers.SerializerMethodField()

    class Meta:
        model = Partner
        fields = '__all__'
        ref_name = 'PartnerList'

    def get_partner_logo(self, obj):
        if obj.partner_logo:
            return obj.partner_logo.url
        return None

    def get_partner_image(self, obj):
        if obj.partner_image:
            return obj.partner_image.url
        return None
