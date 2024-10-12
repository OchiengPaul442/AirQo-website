# backend/apps/cleanair/admin.py

import nested_admin
from django.contrib import admin
from .models import (
    CleanAirResource, ForumEvent, Partner, Program, Session,
    Support, Person, ForumResource, ResourceSession, ResourceFile, Engagement, Objective
)

# Inlines for Objective under Engagement


class ObjectiveInline(nested_admin.NestedTabularInline):
    model = Objective
    extra = 0
    fk_name = 'engagement'


# Inlines for Engagement under ForumEvent
class EngagementInline(nested_admin.NestedStackedInline):
    model = Engagement
    extra = 0
    fk_name = 'forum_event'
    inlines = [ObjectiveInline]


# Inlines for Support under ForumEvent
class SupportInline(nested_admin.NestedStackedInline):
    model = Support
    extra = 0
    fk_name = 'forum_event'


# Inlines for ResourceFile under ResourceSession
class ResourceFileInline(nested_admin.NestedTabularInline):
    model = ResourceFile
    extra = 0
    fk_name = 'session'


# Inlines for ResourceSession under ForumResource
class ResourceSessionInline(nested_admin.NestedStackedInline):
    model = ResourceSession
    extra = 0
    fk_name = 'forum_resource'
    inlines = [ResourceFileInline]


# Inlines for ForumResource under ForumEvent
class ForumResourceInline(nested_admin.NestedStackedInline):
    model = ForumResource
    extra = 0
    fk_name = 'forum_event'
    inlines = [ResourceSessionInline]


# Inlines for Session under Program
class SessionInline(nested_admin.NestedTabularInline):
    model = Session
    extra = 0
    fk_name = 'program'


# Inlines for Program under ForumEvent
class ProgramInline(nested_admin.NestedStackedInline):
    model = Program
    extra = 0
    fk_name = 'forum_event'
    inlines = [SessionInline]


# Inlines for Person under ForumEvent
class PersonInline(nested_admin.NestedTabularInline):
    model = Person
    extra = 0
    fk_name = 'forum_event'


# Inlines for Partner under ForumEvent
class PartnerInline(nested_admin.NestedTabularInline):
    model = Partner
    extra = 0
    fk_name = 'forum_event'


@admin.register(ForumEvent)
class ForumEventAdmin(nested_admin.NestedModelAdmin):
    list_display = ('title', 'start_date', 'end_date', 'order')
    inlines = [
        SupportInline,
        EngagementInline,
    ]
    search_fields = ('title', 'title_subtext')
    list_filter = ('start_date', 'end_date')


@admin.register(Program)
class ProgramAdmin(nested_admin.NestedModelAdmin):
    list_display = ('title', 'forum_event', 'order')
    inlines = [SessionInline]
    search_fields = ('title',)
    list_filter = ('forum_event',)


@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'forum_event', 'order')
    search_fields = ('name', 'title')
    list_filter = ('category', 'forum_event')


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'forum_event', 'order')
    search_fields = ('name', 'website_link')
    list_filter = ('category', 'forum_event')


@admin.register(ForumResource)
class ForumResourceAdmin(nested_admin.NestedModelAdmin):
    list_display = ('resource_title', 'forum_event', 'order')
    inlines = [ResourceSessionInline]
    search_fields = ('resource_title', 'resource_authors')
    list_filter = ('forum_event',)


@admin.register(CleanAirResource)
class CleanAirResourceAdmin(admin.ModelAdmin):
    list_display = ('resource_title', 'resource_category', 'order')
    search_fields = ('resource_title', 'resource_authors')
    list_filter = ('resource_category',)
