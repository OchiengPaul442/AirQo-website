import os
import sys
import dj_database_url
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(os.path.join(BASE_DIR, 'backend'))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv('DEBUG', 'False') == 'True'

ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', '').split(',')

# Application definition
INSTALLED_APPS = [
    # Django default apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Custom apps
    'apps.press',
    'apps.impact',
    'apps.event',
    'apps.highlights',
    'apps.career',
    'apps.publications',
    'apps.team',
    'apps.externalTeam',
    'apps.board',
    'apps.partners',
    'apps.cleanair',
    'apps.FAQ',
    'apps.africancities',

    # Third-party apps
    'corsheaders',
    'cloudinary',
    'cloudinary_storage',
    'rest_framework',
    'django_extensions',
    'ckeditor',
    'ckeditor_uploader',
    'nested_admin',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]

# Root URL configuration
ROOT_URLCONF = 'backend.urls'

# Templates configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],  # Add directories for custom templates if necessary
        'APP_DIRS': True,  # Ensure it finds templates from installed apps
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI application configuration
WSGI_APPLICATION = 'backend.wsgi.application'

# Database configuration: Separate for development (SQLite) and production (Postgres)
if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': os.getenv('DATABASE_ENGINE', 'django.db.backends.sqlite3'),
            'NAME': BASE_DIR / os.getenv('DATABASE_NAME', 'db.sqlite3'),
        }
    }
else:
    DATABASES = {
        'default': dj_database_url.config(default=os.getenv('DATABASE_URL'))
    }

# Password validation configuration
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = os.getenv('LANGUAGE_CODE', 'en-us')
TIME_ZONE = os.getenv('TIME_ZONE', 'UTC')
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# WhiteNoise configuration for serving static files in production
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files configuration (Development uses local storage, Production uses Cloudinary)
if DEBUG:
    # Development media files stored locally
    MEDIA_URL = '/media/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'assets')
    DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
else:
    # Production media files stored in Cloudinary
    CLOUDINARY_STORAGE = {
        'CLOUD_NAME': os.getenv('CLOUDINARY_CLOUD_NAME'),
        'API_KEY': os.getenv('CLOUDINARY_API_KEY'),
        'API_SECRET': os.getenv('CLOUDINARY_API_SECRET'),
        'SECURE': True,
    }
    DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
    MEDIA_URL = '/media/'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Django Rest Framework settings
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        # Browsable API during development
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',  # Allow access without authentication
    ],
}

# Debug logging (Optional)
if DEBUG:
    print(f"Debug mode is: {DEBUG}")
    print(f"Media files are stored in: {MEDIA_ROOT}")
else:
    print("Production mode is ON")

# CKEditor configurations
CKEDITOR_UPLOAD_PATH = "uploads/"  # Local upload path (for development)
CKEDITOR_IMAGE_BACKEND = "pillow"  # Image processing backend

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',  # Full toolbar with all free features
        'height': 300,  # Set minimum height, will expand as needed
        'width': 'auto',  # Auto width to fit container
        'extraPlugins': ','.join([
            'uploadimage',  # Allows image uploads
            'autolink',  # Automatically converts URLs to links
            'autoembed',  # Automatically embeds media (e.g., YouTube)
            'codesnippet',  # For code snippets
            'image2',  # Enhanced image plugin
        ]),
        'removePlugins': 'flash',  # Remove outdated plugins
        'filebrowserUploadUrl': '/ckeditor/upload/',  # URL for file uploads
        'filebrowserBrowseUrl': '/ckeditor/browse/',  # URL for browsing uploaded files
        'toolbarGroups': [
            {'name': 'clipboard', 'groups': ['clipboard', 'undo']},
            {'name': 'editing', 'groups': [
                'find', 'selection', 'spellchecker']},
            {'name': 'links'},
            {'name': 'insert'},
            {'name': 'forms'},
            {'name': 'tools'},
            {'name': 'document', 'groups': ['mode', 'document', 'doctools']},
            {'name': 'others'},
            '/',
            {'name': 'basicstyles', 'groups': ['basicstyles', 'cleanup']},
            {'name': 'paragraph', 'groups': [
                'list', 'indent', 'blocks', 'align', 'bidi']},
            {'name': 'styles'},
            {'name': 'colors'},
            {'name': 'about'},
        ],
        'tabSpaces': 4,
        'extraAllowedContent': 'img[alt,border,vspace,hspace,width,height,align];a[!href];',
    }
}


# Cloudinary-specific folder setup for CKEditor uploads in production
if not DEBUG:
    # Folder for event-related uploads
    CKEDITOR_UPLOAD_PATH = "website/uploads/"


SILENCED_SYSTEM_CHECKS = ['ckeditor.W001']
