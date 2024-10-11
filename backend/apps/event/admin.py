# admin.py
from django.contrib import admin
import nested_admin  # Import nested_admin
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource


class InquiryInline(nested_admin.NestedTabularInline):
    model = Inquiry
    extra = 1
    readonly_fields = ()  # Removed 'id'
    sortable_field_name = 'order'  # Enable sorting based on 'order' field
    fields = ('inquiry', 'role', 'email', 'order')  # Specify fields to display


class PartnerLogoInline(nested_admin.NestedTabularInline):
    model = PartnerLogo
    extra = 1
    readonly_fields = ()  # Removed 'id'
    sortable_field_name = 'order'
    fields = ('name', 'partner_logo', 'order')


class ResourceInline(nested_admin.NestedTabularInline):
    model = Resource
    extra = 1
    readonly_fields = ()  # Removed 'id'
    fields = ('title', 'link', 'resource', 'order')
    sortable_field_name = 'order'


class SessionInline(nested_admin.NestedTabularInline):
    model = Session
    extra = 1
    readonly_fields = ()  # Removed 'id'
    fields = ('session_title', 'start_time', 'end_time',
              'venue', 'session_details', 'order')
    sortable_field_name = 'order'


class ProgramInline(nested_admin.NestedTabularInline):
    model = Program
    extra = 1
    readonly_fields = ()  # Removed 'id'
    fields = ('date', 'program_details', 'order')
    sortable_field_name = 'order'
    inlines = [SessionInline]  # Nest SessionInline within ProgramInline


@admin.register(Event)
class EventAdmin(nested_admin.NestedModelAdmin):
    list_display = (
        'title',
        'start_date',
        'end_date',
        'website_category',
        'event_category',
        'order'
    )
    search_fields = ('title', 'location_name')
    ordering = ('order', '-start_date')
    inlines = [
        InquiryInline,
        # Nested ProgramInline (which includes SessionInline)
        ProgramInline,
        PartnerLogoInline,
        ResourceInline
    ]
    # Keep 'id' and 'unique_title' as readonly
    readonly_fields = ('id', 'unique_title')
