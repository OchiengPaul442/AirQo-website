# admin.py
from django.contrib import admin
from django.utils.html import format_html
from .models import (
    CleanAirResource, ForumEvent, Partner, Program, Session, Support,
    Person, Engagement, Objective, ForumResource, ResourceFile, ResourceSession
)
from nested_admin import NestedTabularInline, NestedModelAdmin

# Inlines


class ObjectiveInline(NestedTabularInline):
    model = Objective
    extra = 0


class EngagementInline(NestedTabularInline):
    model = Engagement
    inlines = [ObjectiveInline]
    extra = 0


class SessionInline(NestedTabularInline):
    model = Session
    extra = 0  # Adjust this value based on your needs


class SupportInline(NestedTabularInline):
    model = Support
    extra = 0


class ResourceFileInline(NestedTabularInline):
    model = ResourceFile
    extra = 1


class ResourceSessionInline(NestedTabularInline):
    model = ResourceSession
    extra = 1
    inlines = [ResourceFileInline]

# Admins


@admin.register(CleanAirResource)
class CleanAirResourceAdmin(admin.ModelAdmin):
    list_display = ('resource_title', 'resource_category',
                    'order', 'author_title')
    list_filter = ('resource_category', 'author_title')
    search_fields = ('resource_title', 'author_title')
    readonly_fields = ('author_title',)
    list_per_page = 12


@admin.register(ForumEvent)
class ForumEventAdmin(NestedModelAdmin):
    list_display = ('title', 'start_date', 'end_date',
                    'order')  # Removed 'author_title'
    list_filter = ('start_date', 'end_date')
    search_fields = ('title',)
    readonly_fields = ()  # Removed 'author_title'
    list_per_page = 12
    inlines = [EngagementInline, SupportInline]


@admin.register(Program)
class ProgramAdmin(NestedModelAdmin):
    list_display = ('title', 'forum_event',)
    list_filter = ('forum_event',)
    search_fields = ('title', 'forum_event__title',)
    list_per_page = 12
    inlines = [SessionInline]


@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'forum_event', 'category',
                    'image_preview', 'order')
    list_filter = ('forum_event',)
    search_fields = ('name', 'category', 'forum_event__title',)
    list_per_page = 12

    def image_preview(self, obj):
        if obj.picture:
            height = 200
            return format_html('<img src="{}" height="{}" />', obj.picture.url, height)
        return ""
    image_preview.short_description = 'Picture'


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ('name', 'forum_event', 'category', 'logo_preview', 'order')
    list_filter = ('forum_event',)
    search_fields = ('name', 'category', 'forum_event__title',)
    list_per_page = 12

    def logo_preview(self, obj):
        if obj.partner_logo:
            height = 200
            return format_html('<img src="{}" height="{}" />', obj.partner_logo.url, height)
        return ""
    logo_preview.short_description = 'Logo'


@admin.register(ForumResource)
class ForumResourceAdmin(NestedModelAdmin):
    inlines = [ResourceSessionInline]
    list_display = ('resource_title', 'resource_authors',
                    'order', 'forum_event')
    search_fields = ('resource_title', 'resource_authors')
    list_filter = ('forum_event',)
