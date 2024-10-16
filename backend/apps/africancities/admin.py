from django.contrib import admin
from .models import AfricanCountry, City, Content, Description, Image


class CityInline(admin.TabularInline):
    model = City
    extra = 1


class AfricanCountryAdmin(admin.ModelAdmin):
    inlines = [CityInline]


admin.site.register(AfricanCountry, AfricanCountryAdmin)
admin.site.register(City)
admin.site.register(Content)
admin.site.register(Description)
admin.site.register(Image)
