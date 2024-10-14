import nested_admin
from django.contrib import admin
from .models import AfricanCountry, City, Content, Description, Image

# Inline for Description under Content


class DescriptionInline(nested_admin.NestedTabularInline):
    model = Description
    extra = 1
    fields = ['paragraph', 'order']
    ordering = ['order']

# Inline for Image under Content


class ImageInline(nested_admin.NestedTabularInline):
    model = Image
    extra = 1
    fields = ['image', 'order']
    ordering = ['order']

# Inline for Content under City


class ContentInline(nested_admin.NestedTabularInline):
    model = Content
    extra = 1
    fields = ['title', 'order']
    ordering = ['order']
    # Nest Description and Image in Content
    inlines = [DescriptionInline, ImageInline]

# Inline for City under AfricanCountry


class CityInline(nested_admin.NestedTabularInline):
    model = City
    extra = 1
    fields = ['city_name', 'order']
    ordering = ['order']
    inlines = [ContentInline]  # Nest Content in City

# Admin for AfricanCountry


@admin.register(AfricanCountry)
class AfricanCountryAdmin(nested_admin.NestedModelAdmin):
    list_display = ['country_name', 'order', 'created_at', 'updated_at']
    search_fields = ['country_name']
    ordering = ['order']
    inlines = [CityInline]  # Nest City in AfricanCountry
    readonly_fields = ['created_at', 'updated_at']
