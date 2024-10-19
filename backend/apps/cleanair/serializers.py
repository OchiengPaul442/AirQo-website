from django.conf import settings
from rest_framework import serializers
from cloudinary.utils import cloudinary_url
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
        if obj.partner_logo:
            # Return secure Cloudinary URL if in production
            if not settings.DEBUG:
                return cloudinary_url(obj.partner_logo.public_id, secure=True)[0]
            else:
                return self.context['request'].build_absolute_uri(obj.partner_logo.url)
        return None

    class Meta:
        model = Partner
        exclude = ['order']
        ref_name = 'CleanAirPartner'



class SessionSerializer(serializers.ModelSerializer):
    session_details_html = serializers.SerializerMethodField()

    def get_session_details_html(self, obj):
        # Check if session_details has meaningful content
        if obj.session_details and obj.session_details.html and obj.session_details.html.strip() != '<p><br></p>':
            return obj.session_details.html  # Use .html to retrieve content
        return ''  # Return an empty string if there's no meaningful content

    class Meta:
        model = Session
        exclude = ['order', 'session_details']
        ref_name = 'CleanAirSession'



class CleanAirProgramSerializer(serializers.ModelSerializer):
    sub_text_html = serializers.SerializerMethodField()
    sessions = SessionSerializer(many=True)

    def get_sub_text_html(self, obj):
        # Check if sub_text has meaningful content
        if obj.sub_text and obj.sub_text.html and obj.sub_text.html.strip() != '<p><br></p>':
            return obj.sub_text.html  # Use .html to retrieve content
        return ''  # Return an empty string if there's no meaningful content

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
        if obj.bio and obj.bio.html and obj.bio.html.strip() != '<p><br></p>':
            return obj.bio.html  # Use .html to retrieve content
        return ''  # Return an empty string if there's no meaningful content

    def get_picture(self, obj):
        if obj.picture:
            # Return secure Cloudinary URL if in production
            if not settings.DEBUG:
                return cloudinary_url(obj.picture.public_id, secure=True)[0]
            else:
                return self.context['request'].build_absolute_uri(obj.picture.url)
        return None

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

    def get_introduction_html(self, obj):
        if obj.introduction and obj.introduction != '<p><br></p>':
            return obj.introduction.html 
        return ''  

    def get_background_image(self, obj):
        if obj.background_image:
            # Return secure Cloudinary URL if in production
            if not settings.DEBUG:
                return cloudinary_url(obj.background_image.public_id, secure=True)[0]
            else:
                return self.context['request'].build_absolute_uri(obj.background_image.url)
        return None

    def get_sponsorship_opportunities_about_html(self, obj):
        if obj.sponsorship_opportunities_about and obj.sponsorship_opportunities_about != '<p><br></p>':
            return obj.sponsorship_opportunities_about.html 
        return ''  

    def get_sponsorship_opportunities_schedule_html(self, obj):
        if obj.sponsorship_opportunities_schedule and obj.sponsorship_opportunities_schedule != '<p><br></p>':
            return obj.sponsorship_opportunities_schedule.html 
        return ''  

    def get_sponsorship_opportunities_partners_html(self, obj):
        if obj.sponsorship_opportunities_partners and obj.sponsorship_opportunities_partners != '<p><br></p>':
            return obj.sponsorship_opportunities_partners.html 
        return ''  

    def get_sponsorship_packages_html(self, obj):
        if obj.sponsorship_packages and obj.sponsorship_packages != '<p><br></p>':
            return obj.sponsorship_packages.html 
        return ''  

    def get_schedule_details_html(self, obj):
        if obj.schedule_details and obj.schedule_details != '<p><br></p>':
            return obj.schedule_details.html 
        return ''  

    def get_travel_logistics_vaccination_details_html(self, obj):
        if obj.travel_logistics_vaccination_details and obj.travel_logistics_vaccination_details != '<p><br></p>':
            return obj.travel_logistics_vaccination_details.html 
        return ''  

    def get_travel_logistics_visa_details_html(self, obj):
        if obj.travel_logistics_visa_details and obj.travel_logistics_visa_details != '<p><br></p>':
            return obj.travel_logistics_visa_details.html 
        return ''  

    def get_registration_details_html(self, obj):
        if obj.registration_details and obj.registration_details != '<p><br></p>':
            return obj.registration_details.html 
        return ''  

    def get_speakers_text_section_html(self, obj):
        if obj.speakers_text_section and obj.speakers_text_section != '<p><br></p>':
            return obj.speakers_text_section.html 
        return ''  

    def get_committee_text_section_html(self, obj):
        if obj.committee_text_section and obj.committee_text_section != '<p><br></p>':
            return obj.committee_text_section.html 
        return ''  

    def get_partners_text_section_html(self, obj):
        if obj.partners_text_section and obj.partners_text_section != '<p><br></p>':
            return obj.partners_text_section.html 
        return ''  

    def get_glossary_details_html(self, obj):
        if obj.glossary_details and obj.glossary_details != '<p><br></p>':
            return obj.glossary_details.html 
        return ''  

    def get_travel_logistics_accommodation_details_html(self, obj):
        if obj.travel_logistics_accommodation_details and obj.travel_logistics_accommodation_details != '<p><br></p>':
            return obj.travel_logistics_accommodation_details.html 
        return ''   

    # Repeat this pattern for other QuillField fields 

    class Meta:
        model = ForumEvent
        exclude = ['introduction', 'speakers_text_section', "travel_logistics_accommodation_details",
                   "glossary_details", "schedule_details", "partners_text_section",
                   "sponsorship_opportunities_about", "sponsorship_opportunities_schedule",
                   "sponsorship_packages", 'committee_text_section', 'registration_details',
                   'travel_logistics_vaccination_details', 'order',
                   "sponsorship_opportunities_partners"]
