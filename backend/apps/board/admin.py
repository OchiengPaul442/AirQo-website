from django.contrib import admin
from .models import BoardMember, BoardMemberBiography
import nested_admin

# Register your models here.


class BoardMemberBiographyInline(nested_admin.NestedTabularInline):
    fields = ('description', 'order')
    model = BoardMemberBiography
    extra = 0


@admin.register(BoardMember)
class BoardMemberAdmin(nested_admin.NestedModelAdmin):
    list_display = ("name", "title", "image_tag")
    readonly_fields = (
        "id",
        "created",
        "image_tag",
        "modified",
    )
    fields = (
        "id",
        "name",
        "title",
        "picture",
        "image_tag",
        "twitter",
        "linked_in",
        "order",
        "created",
        "modified",
    )
    list_per_page = 10
    search_fields = ("name", "title")
    inlines = (BoardMemberBiographyInline,)

    def image_tag(self, obj):
        width, height = 100, 200
        from django.utils.html import format_html

        return format_html(f'<img src="{obj.picture.url}" height="{width}" />')

    image_tag.short_description = "Image Preview"
