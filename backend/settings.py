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

# Swagger configuration
SWAGGER_SETTINGS = {
    'DEFAULT_INFO': 'backend.urls.api_info',
}

# Application definition
INSTALLED_APPS = [
    # Django default apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party apps
    'corsheaders',
    'cloudinary',
    'cloudinary_storage',
    'rest_framework',
    'django_extensions',
    'ckeditor',
    'ckeditor_uploader',
    'nested_admin',
    'drf_yasg',  # Added for Swagger

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
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be first
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS Configuration
CORS_ORIGIN_ALLOW_ALL = False  # Disallow all origins by default

# Retrieve allowed origins from .env and split into a list
CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS', '').split(',')

# Retrieve regex patterns from .env and split into a list
CORS_ORIGIN_REGEX_WHITELIST = [
    pattern.strip() for pattern in os.getenv('CORS_ORIGIN_REGEX_WHITELIST', '').split(',')
]

# CSRF Trusted Origins
CSRF_TRUSTED_ORIGINS = os.getenv('CSRF_TRUSTED_ORIGINS', '').split(',')

# Root URL configuration
ROOT_URLCONF = 'backend.urls'

# Templates configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
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
        'toolbar': 'full',
        'height': 300,
        'width': 'auto',
        'extraPlugins': ','.join([
            'uploadimage',
            'autolink',
            'autoembed',
            'codesnippet',
            'image2',
        ]),
        'removePlugins': 'flash',
        'filebrowserUploadUrl': '/ckeditor/upload/',
        'filebrowserBrowseUrl': '/ckeditor/browse/',
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
