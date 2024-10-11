# serializers.py
from rest_framework import serializers
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource
from cloudinary.utils import cloudinary_url


class PartnerLogoSerializer(serializers.ModelSerializer):
    partner_logo_url = serializers.SerializerMethodField()

    class Meta:
        model = PartnerLogo
        fields = ['id', 'name', 'partner_logo_url', 'order']

    def get_partner_logo_url(self, obj):
        if obj.partner_logo:
            return cloudinary_url(obj.partner_logo.public_id, secure=True)[0]
        return None


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ['id', 'title', 'link', 'resource', 'order']


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = [
            'id',
            'session_title',
            'start_time',
            'end_time',
            'venue',
            'session_details',
            'order'
        ]


class ProgramSerializer(serializers.ModelSerializer):
    sessions = SessionSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = [
            'id',
            'date',
            'program_details',  # Now a TextField
            'order',
            'sessions'
        ]


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['id', 'inquiry', 'role', 'email', 'order']


class EventSerializer(serializers.ModelSerializer):
    event_image_url = serializers.SerializerMethodField()
    background_image_url = serializers.SerializerMethodField()
    inquiries = InquirySerializer(many=True, read_only=True)
    programs = ProgramSerializer(many=True, read_only=True)
    partner_logos = PartnerLogoSerializer(many=True, read_only=True)
    resources = ResourceSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = [
            'id',
            'title',
            'title_subtext',
            'start_date',
            'end_date',
            'start_time',
            'end_time',
            'registration_link',
            'unique_title',
            'website_category',
            'event_tag',
            'event_category',
            'event_image_url',
            'background_image_url',
            'location_name',
            'location_link',
            'event_details',  # Now a TextField
            'order',
            'inquiries',
            'programs',
            'partner_logos',
            'resources',
        ]

    def get_event_image_url(self, obj):
        if obj.event_image:
            return cloudinary_url(obj.event_image.public_id, secure=True)[0]
        return None

    def get_background_image_url(self, obj):
        if obj.background_image:
            return cloudinary_url(obj.background_image.public_id, secure=True)[0]
        return None
