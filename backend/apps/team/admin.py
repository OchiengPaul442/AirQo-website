from django.contrib import admin
from .models import Member, MemberBiography
from django.utils.html import format_html


class MemberBiographyInline(admin.TabularInline):
    model = MemberBiography
    extra = 1
    fields = ['description', 'order']


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'order',
                    'image_preview']  # List display with preview
    search_fields = ['name', 'title']
    list_filter = ['order']
    list_editable = ('order',)
    ordering = ['order', 'name']
    inlines = [MemberBiographyInline]  # Inline biographies in Member admin

    # Image preview method for the list view
    def image_preview(self, obj):
        if obj.picture:
            return format_html(f'<img src="{obj.picture.url}" style="width: 50px; height: 50px;" />')
        return ""
    image_preview.short_description = "Picture Preview"

    # Image preview method for the detail view
    def image_preview_detail(self, obj):
        if obj.picture:
            return format_html(f'<img src="{obj.picture.url}" style="max-width: 300px; max-height: 300px;" />')
        return ""
    image_preview_detail.short_description = "Picture Preview"

    # Display image preview in readonly fields
    readonly_fields = ['image_preview_detail']

    # Customizing the admin form layout, excluding the image_preview_detail from fieldsets
    fieldsets = (
        (None, {
            'fields': ('name', 'title', 'about', 'order', 'picture', 'twitter', 'linked_in')
        }),
        ('Image Preview', {
            'fields': ('image_preview_detail',),
            'classes': ('collapse',),
        }),
    )
