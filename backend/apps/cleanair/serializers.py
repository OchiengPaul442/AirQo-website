from rest_framework import serializers
from .models import (
    CleanAirResource, ForumEvent, Engagement, Partner, Program,
    Session, Support, Person, Objective, ForumResource,
    ResourceFile, ResourceSession
)


class CleanAirResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CleanAirResource
        fields = '__all__'


class ObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objective
        exclude = ['order']


class EngagementSerializer(serializers.ModelSerializer):
    objectives = ObjectiveSerializer(many=True, read_only=True)

    class Meta:
        model = Engagement
        fields = '__all__'


class PartnerSerializer(serializers.ModelSerializer):
    partner_logo = serializers.SerializerMethodField()

    def get_partner_logo(self, obj):
        return obj.partner_logo.url if obj.partner_logo else None

    class Meta:
        model = Partner
        exclude = ['order']
        ref_name = 'CleanAirPartner'


class SessionSerializer(serializers.ModelSerializer):
    session_details_html = serializers.SerializerMethodField()

    def get_session_details_html(self, obj):
        html = obj.session_details
        return '' if html.strip() == '<p><br></p>' else html

    class Meta:
        model = Session
        exclude = ['order', 'session_details']
        ref_name = 'CleanAirSession'


class CleanAirProgramSerializer(serializers.ModelSerializer):
    sub_text_html = serializers.SerializerMethodField()
    sessions = SessionSerializer(many=True)

    def get_sub_text_html(self, obj):
        html = obj.sub_text
        return '' if html.strip() == '<p><br></p>' else html

    class Meta:
        model = Program
        exclude = ['order']
        ref_name = 'CleanAirProgram'


class SupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Support
        exclude = ['order']


class PersonSerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()
    bio_html = serializers.SerializerMethodField()

    def get_bio_html(self, obj):
        html = obj.bio
        return '' if html.strip() == '<p><br></p>' else html

    def get_picture(self, obj):
        return obj.picture.url if obj.picture else None

    class Meta:
        model = Person
        exclude = ['bio', 'order']


class ResourceFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceFile
        fields = ['file', 'resource_summary', 'session']


class ResourceSessionSerializer(serializers.ModelSerializer):
    resource_files = ResourceFileSerializer(many=True, read_only=True)

    class Meta:
        model = ResourceSession
        fields = '__all__'


class ForumResourceSerializer(serializers.ModelSerializer):
    resource_sessions = ResourceSessionSerializer(many=True, read_only=True)

    class Meta:
        model = ForumResource
        fields = '__all__'


class ForumEventSerializer(serializers.ModelSerializer):
    forum_resources = ForumResourceSerializer(many=True, read_only=True)
    engagements = EngagementSerializer(read_only=True)
    partners = PartnerSerializer(many=True, read_only=True)
    supports = SupportSerializer(many=True, read_only=True)
    programs = CleanAirProgramSerializer(many=True, read_only=True)
    persons = PersonSerializer(many=True, read_only=True)
    background_image = serializers.SerializerMethodField()
    introduction_html = serializers.SerializerMethodField()
    sponsorship_opportunities_about_html = serializers.SerializerMethodField()
    sponsorship_opportunities_schedule_html = serializers.SerializerMethodField()
    sponsorship_opportunities_partners_html = serializers.SerializerMethodField()
    sponsorship_packages_html = serializers.SerializerMethodField()
    schedule_details_html = serializers.SerializerMethodField()
    travel_logistics_vaccination_details_html = serializers.SerializerMethodField()
    travel_logistics_visa_details_html = serializers.SerializerMethodField()
    registration_details_html = serializers.SerializerMethodField()
    speakers_text_section_html = serializers.SerializerMethodField()
    committee_text_section_html = serializers.SerializerMethodField()
    partners_text_section_html = serializers.SerializerMethodField()
    glossary_details_html = serializers.SerializerMethodField()
    travel_logistics_accommodation_details_html = serializers.SerializerMethodField()

    def get_background_image(self, obj):
        return obj.background_image.url if obj.background_image else None

    # Other HTML processing fields...

    class Meta:
        model = ForumEvent
        exclude = ['introduction', 'Speakers_text_section', "travel_logistics_accommodation_details",
                   "glossary_details", "schedule_details", "partners_text_section",
                   "sponsorship_opportunities_about", "sponsorship_opportunities_schedule",
                   "sponsorship_packages", 'Committee_text_section', 'registration_details',
                   'travel_logistics_vaccination_details', 'order', 'author_title', 'updated_by',
                   "sponsorship_opportunities_partners"]
