# backend/apps/cleanair/serializers.py

from rest_framework import serializers
from .models import (
    CleanAirResource, ForumEvent, Partner, Program, Session,
    Support, Person, ForumResource, ResourceSession, ResourceFile, Engagement, Objective
)


class ResourceFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceFile
        fields = ['id', 'resource_summary', 'file', 'order']


class ResourceSessionSerializer(serializers.ModelSerializer):
    resource_files = ResourceFileSerializer(many=True, read_only=True)

    class Meta:
        model = ResourceSession
        fields = ['id', 'session_title', 'order', 'resource_files']


class ForumResourceSerializer(serializers.ModelSerializer):
    resource_sessions = ResourceSessionSerializer(many=True, read_only=True)

    class Meta:
        model = ForumResource
        fields = ['id', 'resource_title',
                  'resource_authors', 'order', 'resource_sessions']


class SupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Support
        fields = ['id', 'query', 'name', 'role', 'email', 'order']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'name', 'title', 'bio', 'category',
                  'picture', 'twitter', 'linked_in', 'order']


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ['id', 'partner_logo', 'name',
                  'website_link', 'category', 'order']
        ref_name = 'CleanAirPartnerSerializer'


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'start_time', 'end_time',
                  'session_title', 'session_details', 'order']
        ref_name = 'CleanAirSessionSerializer'


class ProgramSerializer(serializers.ModelSerializer):
    sessions = SessionSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = ['id', 'title', 'sub_text', 'order', 'sessions']
        ref_name = 'CleanAirProgramSerializer'


class ObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objective
        fields = ['id', 'title', 'details', 'order']


class EngagementSerializer(serializers.ModelSerializer):
    objectives = ObjectiveSerializer(many=True, read_only=True)

    class Meta:
        model = Engagement
        fields = ['id', 'title', 'objectives']


class ForumEventSerializer(serializers.ModelSerializer):
    programs = ProgramSerializer(many=True, read_only=True)
    persons = PersonSerializer(many=True, read_only=True)
    partners = PartnerSerializer(many=True, read_only=True)
    forum_resources = ForumResourceSerializer(many=True, read_only=True)
    supports = SupportSerializer(many=True, read_only=True)
    engagements = EngagementSerializer(many=True, read_only=True)

    class Meta:
        model = ForumEvent
        fields = [
            'id', 'title', 'title_subtext', 'start_date', 'end_date',
            'start_time', 'end_time', 'introduction', 'speakers_text_section',
            'committee_text_section', 'partners_text_section', 'registration_link',
            'schedule_details', 'registration_details', 'sponsorship_opportunities_about',
            'sponsorship_opportunities_schedule', 'sponsorship_opportunities_partners',
            'sponsorship_packages', 'travel_logistics_vaccination_details',
            'travel_logistics_visa_details', 'travel_logistics_accommodation_details',
            'glossary_details', 'background_image', 'location_name',
            'location_link', 'engagements', 'programs', 'persons', 'partners',
            'forum_resources', 'supports'
        ]


class CleanAirResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CleanAirResource
        fields = ['id', 'resource_title', 'resource_link', 'resource_file',
                  'author_title', 'resource_category', 'resource_authors', 'order']
