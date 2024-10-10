from django.contrib import admin
from .models import Event, Inquiry, Program, Session, PartnerLogo, Resource


class InquiryInline(admin.TabularInline):
    model = Inquiry
    extra = 1


class ProgramInline(admin.TabularInline):
    model = Program
    extra = 1


class SessionInline(admin.TabularInline):
    model = Session
    extra = 1


class PartnerLogoInline(admin.TabularInline):
    model = PartnerLogo
    extra = 1


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_date', 'end_date',
                    'website_category', 'event_category', 'order')
    search_fields = ('title', 'location_name')
    ordering = ('order', '-start_date')
    inlines = [InquiryInline, ProgramInline, SessionInline, PartnerLogoInline]


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'event', 'order')
    search_fields = ('title',)
    ordering = ('order',)
