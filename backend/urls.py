from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.press.urls')),
    path('api/', include('apps.impact.urls')),
    path('api/', include('apps.event.urls')),
    path('api/', include('apps.highlights.urls')),
    path('api/', include('apps.career.urls')),
    path('api/', include('apps.publications.urls')),
    path('api/', include('apps.team.urls')),
    path('api/', include('apps.board.urls')),
    path('api/', include('apps.externalTeam.urls')),
    path('api/', include('apps.partners.urls')),
    path('api/', include('apps.cleanair.urls')),
    path('api/', include('apps.FAQ.urls')),
    path('api/', include('apps.africancities.urls')),

    # CKEditor routes for file upload and management
    path('ckeditor/', include('ckeditor_uploader.urls')),
]

# Add media URL for serving uploaded media files
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
