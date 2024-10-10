from rest_framework import serializers
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource
from cloudinary.utils import cloudinary_url


class EventSerializer(serializers.ModelSerializer):
    event_image_url = serializers.SerializerMethodField()
    background_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = '__all__'

    def get_event_image_url(self, obj):
        if obj.event_image:
            return cloudinary_url(obj.event_image.public_id, secure=True)[0]
        return None

    def get_background_image_url(self, obj):
        if obj.background_image:
            return cloudinary_url(obj.background_image.public_id, secure=True)[0]
        return None


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'


class PartnerLogoSerializer(serializers.ModelSerializer):
    partner_logo_url = serializers.SerializerMethodField()

    class Meta:
        model = PartnerLogo
        fields = ['id', 'name', 'partner_logo_url']

    def get_partner_logo_url(self, obj):
        if obj.partner_logo:
            return cloudinary_url(obj.partner_logo.public_id, secure=True)[0]
        return None


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'
