from django.contrib import admin
from .models import BoardMember, BoardMemberBiography
from django.utils.html import format_html


class BoardMemberBiographyInline(admin.TabularInline):
    model = BoardMemberBiography
    extra = 1
    fields = ['description', 'order']


@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'order', 'image_preview']
    search_fields = ['name', 'title']
    list_filter = ['order']
    list_editable = ('order',)
    ordering = ['order', 'name']
    inlines = [BoardMemberBiographyInline]

    # Image preview for the list view
    def image_preview(self, obj):
        if obj.picture:
            return format_html(f'<img src="{obj.picture.url}" style="width: 50px; height: 50px;" />')
        return ""
    image_preview.short_description = "Picture Preview"

    # Image preview for the detail view
    def image_preview_detail(self, obj):
        if obj.picture:
            return format_html(f'<img src="{obj.picture.url}" style="max-width: 300px; max-height: 300px;" />')
        return ""
    image_preview_detail.short_description = "Picture Preview"

    readonly_fields = ['image_preview_detail']

    fieldsets = (
        (None, {
            'fields': ('name', 'title', 'order', 'picture', 'twitter', 'linked_in')
        }),
        ('Image Preview', {
            'fields': ('image_preview_detail',),
            'classes': ('collapse',),
        }),
    )
