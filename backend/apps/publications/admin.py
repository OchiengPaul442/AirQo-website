from django.contrib import admin
from .models import Publication


@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'order']
    search_fields = ['title', 'category']
    list_filter = ['category']
    ordering = ['order', '-id']
