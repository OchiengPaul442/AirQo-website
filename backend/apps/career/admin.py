from django.contrib import admin
from .models import Career, Department


class CareerAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'type', 'closing_date')
    search_fields = ('title', 'department__name')
    list_filter = ('type', 'department')


admin.site.register(Career, CareerAdmin)
admin.site.register(Department)
