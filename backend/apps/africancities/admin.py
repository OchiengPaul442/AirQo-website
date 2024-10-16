from django.contrib import admin
import nested_admin
from .models import AfricanCountry, City, Content, Image, Description


class ImageInline(nested_admin.NestedTabularInline):
    fields = ('image', 'order')
    model = Image
    extra = 0


class DescriptionInline(nested_admin.NestedTabularInline):
    fields = ('paragraph', 'order')
    model = Description
    extra = 0


class ContentInline(nested_admin.NestedStackedInline):
    fields = ('title', 'order')
    model = Content
    extra = 0
    inlines = (DescriptionInline, ImageInline,)


class CityInline(nested_admin.NestedTabularInline):
    fields = ('city_name', 'order')
    model = City
    extra = 0
    inlines = (ContentInline,)


@admin.register(AfricanCountry)
class AfricanCitiesAdmin(nested_admin.NestedModelAdmin):
    fields = ('country_name', 'country_flag', 'order')
    # Removed unnecessary readonly fields
    readonly_fields = ('id', 'created', 'modified')
    list_display = ('country_name', 'flag_preview', 'order')
    search_fields = ('country_name',)
    list_filter = ('created',)
    inlines = (CityInline,)
    list_per_page = 10

    def flag_preview(self, obj):
        """Displays a preview of the country flag in the admin panel."""
        if obj.country_flag:
            width, height = 60, 40
            from django.utils.html import escape, format_html
            return format_html(f'<img src="{escape(obj.country_flag.url)}" width="{width}" height="{height}" />')
        return "No flag"

    flag_preview.allow_tags = True
