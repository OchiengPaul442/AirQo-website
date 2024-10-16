from rest_framework import serializers
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource
from cloudinary.utils import cloudinary_url
from django.conf import settings


class PartnerLogoSerializer(serializers.ModelSerializer):
    partner_logo_url = serializers.SerializerMethodField()

    class Meta:
        model = PartnerLogo
        fields = ['id', 'name', 'partner_logo_url', 'order']

    def get_partner_logo_url(self, obj):
        if obj.partner_logo:
            if settings.DEBUG:
                # If in development, use the local file URL
                return self.context['request'].build_absolute_uri(obj.partner_logo.url)
            else:
                # In production, return the Cloudinary secure URL
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
        ref_name = 'EventSessionSerializer'


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
        ref_name = 'EventProgramSerializer'


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['id', 'inquiry', 'role', 'email', 'order']


class EventListSerializer(serializers.ModelSerializer):
    event_tag = serializers.CharField(source='get_event_tag_display')
    event_image_url = serializers.SerializerMethodField()

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
            'event_tag',
            'event_image_url',
        ]

    def get_event_image_url(self, obj):
        if obj.event_image:
            if settings.DEBUG:
                # If in development, use the local file URL
                return self.context['request'].build_absolute_uri(obj.event_image.url)
            else:
                # In production, return the Cloudinary secure URL
                return cloudinary_url(obj.event_image.public_id, secure=True)[0]
        return None


class EventDetailSerializer(serializers.ModelSerializer):
    event_image_url = serializers.SerializerMethodField()
    background_image_url = serializers.SerializerMethodField()
    inquiries = InquirySerializer(many=True, read_only=True)
    programs = ProgramSerializer(many=True, read_only=True)
    partner_logos = PartnerLogoSerializer(many=True, read_only=True)
    resources = ResourceSerializer(many=True, read_only=True)
    event_tag = serializers.CharField(source='get_event_tag_display')

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
            'event_details',
            'order',
            'inquiries',
            'programs',
            'partner_logos',
            'resources',
        ]

    def get_event_image_url(self, obj):
        if obj.event_image:
            if settings.DEBUG:
                return self.context['request'].build_absolute_uri(obj.event_image.url)
            else:
                return cloudinary_url(obj.event_image.public_id, secure=True)[0]
        return None

    def get_background_image_url(self, obj):
        if obj.background_image:
            if settings.DEBUG:
                return self.context['request'].build_absolute_uri(obj.background_image.url)
            else:
                return cloudinary_url(obj.background_image.public_id, secure=True)[0]
        return None
