from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.press.urls')),
    # path('api/', include('apps.impact.urls')),
]
