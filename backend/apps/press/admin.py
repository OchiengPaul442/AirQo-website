from django.contrib import admin
from django.utils.html import format_html
from .models import Press
import cloudinary.uploader

# Ensure Press is registered only once


@admin.register(Press)
class PressAdmin(admin.ModelAdmin):
    list_display = ('article_title', 'date_published', 'website_category', 'image_preview',
                    'order', 'is_deleted')
    list_filter = ('website_category', 'is_deleted', 'date_published')
    search_fields = ('article_title', 'article_intro', 'article_link')
    ordering = ('order', '-date_published')
    list_editable = ('order',)
    readonly_fields = ('created', 'modified', 'image_preview')

    fieldsets = (
        (None, {
            'fields': ('article_title', 'article_intro', 'article_link', 'date_published', 'publisher_logo', 'website_category', 'order', 'is_deleted', 'image_preview')
        }),
        ('Timestamps', {
            'fields': ('created', 'modified'),
        }),
    )

    def image_preview(self, obj):
        if obj.publisher_logo:
            return format_html('<img src="{}" width="150" height="150" />', obj.publisher_logo.url)
        return "No image available"

    # Sets the column name in the admin list view
    image_preview.short_description = 'Image Preview'

    # Override delete_queryset to handle bulk deletion
    def delete_queryset(self, request, queryset):
        # Loop through each selected object in the queryset
        for obj in queryset:
            # Check if the object has an image in Cloudinary
            if obj.publisher_logo:
                # Delete the Cloudinary image
                cloudinary.uploader.destroy(obj.publisher_logo.public_id)
            # Perform the soft delete or actual delete
            obj.delete()
