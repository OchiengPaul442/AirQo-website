
from django.contrib import admin
from django.utils.html import format_html
from .models import Partner, PartnerDescription


class PartnerDescriptionInline(admin.TabularInline):
    model = PartnerDescription
    extra = 0
    min_num = 0
    fields = ('description', 'order')
    ordering = ('order',)


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ('partner_name', 'type', 'order', 'website_category',
                    'partner_logo_preview', 'partner_image_preview')
    search_fields = ('partner_name',)
    list_filter = ('type', 'website_category')
    list_editable = ('order',)
    inlines = [PartnerDescriptionInline]
    ordering = ('order', 'id')

    # Image preview for partner_logo in list view
    def partner_logo_preview(self, obj):
        if obj.partner_logo:
            return format_html('<img src="{}" style="width: 50px; height: 50px;" />', obj.partner_logo.url)
        return "-"

    # Image preview for partner_image in list view
    def partner_image_preview(self, obj):
        if obj.partner_image:
            return format_html('<img src="{}" style="width: 50px; height: 50px;" />', obj.partner_image.url)
        return "-"

    partner_logo_preview.short_description = 'Logo Preview'
    partner_image_preview.short_description = 'Image Preview'

    # Image previews in the form view
    def get_readonly_fields(self, request, obj=None):
        readonly_fields = list(super().get_readonly_fields(request, obj))
        if obj:
            readonly_fields.extend(
                ['partner_logo_preview', 'partner_image_preview'])
        return readonly_fields

    def partner_logo_preview(self, obj):
        if obj.partner_logo:
            return format_html('<img src="{}" style="max-width: 200px; max-height: 200px;" />', obj.partner_logo.url)
        return "-"

    def partner_image_preview(self, obj):
        if obj.partner_image:
            return format_html('<img src="{}" style="max-width: 200px; max-height: 200px;" />', obj.partner_image.url)
        return "-"
