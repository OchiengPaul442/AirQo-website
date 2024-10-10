from django.contrib import admin
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_date', 'end_date',
                    'website_category', 'event_category', 'order')
    search_fields = ('title', 'location_name')
    ordering = ('order', '-start_date')


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('inquiry', 'email', 'role', 'event', 'order')
    search_fields = ('inquiry', 'email')
    ordering = ('order',)


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('date', 'event', 'order')
    search_fields = ('event',)
    ordering = ('order',)


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('session_title', 'start_time',
                    'end_time', 'venue', 'order')
    search_fields = ('session_title',)
    ordering = ('order',)


@admin.register(PartnerLogo)
class PartnerLogoAdmin(admin.ModelAdmin):
    list_display = ('name', 'event', 'order')
    search_fields = ('name',)
    ordering = ('order',)


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'event', 'order')
    search_fields = ('title',)
    ordering = ('order',)
