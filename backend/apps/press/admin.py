from django.contrib import admin
from .models import Press


@admin.register(Press)
class PressAdmin(admin.ModelAdmin):
    list_display = ('article_title', 'date_published',
                    'website_category', 'article_tag', 'order', 'is_deleted')
    list_filter = ('website_category', 'article_tag',
                   'is_deleted', 'date_published')
    search_fields = ('article_title', 'article_intro', 'article_link')
    ordering = ('order', '-date_published')
    list_editable = ('order',)
    readonly_fields = ('created', 'modified')

    fieldsets = (
        (None, {
            'fields': ('article_title', 'article_intro', 'article_link', 'date_published', 'publisher_logo', 'website_category', 'article_tag', 'order', 'is_deleted')
        }),
        ('Timestamps', {
            'fields': ('created', 'modified'),
        }),
    )
