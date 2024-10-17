# backend/apps/event/admin.py

from django.contrib import admin
import nested_admin
from backend.utils.admin import BaseQuillAdmin
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource


class InquiryInline(nested_admin.NestedTabularInline):
    model = Inquiry
    extra = 0
    readonly_fields = ('created_by', 'modified_by')
    sortable_field_name = 'order'
    fields = ('inquiry', 'role', 'email', 'order')


class PartnerLogoInline(nested_admin.NestedTabularInline):
    model = PartnerLogo
    extra = 0
    readonly_fields = ('created_by', 'modified_by')
    sortable_field_name = 'order'
    fields = ('name', 'partner_logo', 'order')


class ResourceInline(nested_admin.NestedTabularInline):
    model = Resource
    extra = 0
    readonly_fields = ('created_by', 'modified_by')
    fields = ('title', 'link', 'resource', 'order')
    sortable_field_name = 'order'


class SessionInline(nested_admin.NestedTabularInline):
    model = Session
    extra = 0
    readonly_fields = ('created_by', 'modified_by')
    fields = ('session_title', 'start_time', 'end_time',
              'venue', 'session_details', 'order')
    sortable_field_name = 'order'


class ProgramInline(nested_admin.NestedTabularInline):
    model = Program
    extra = 0
    readonly_fields = ('created_by', 'modified_by')
    fields = ('date', 'program_details', 'order')
    sortable_field_name = 'order'
    inlines = [SessionInline]


@admin.register(Event)
class EventAdmin(BaseQuillAdmin, nested_admin.NestedModelAdmin):
    list_display = (
        'title',
        'start_date',
        'end_date',
        'website_category',
        'event_category',
        'order'
    )
    search_fields = ('title', 'location_name')
    list_editable = ('order',)
    ordering = ('order', '-start_date')
    list_per_page = 10
    readonly_fields = ('id', 'unique_title', 'created_by', 'modified_by')
    inlines = [
        InquiryInline,
        ProgramInline,
        PartnerLogoInline,
        ResourceInline
    ]
