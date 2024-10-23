#!/bin/sh

# Run migrations
python manage.py migrate --noinput

# Collect static files
python manage.py collectstatic --noinput

# Start the application
gunicorn --bind 0.0.0.0:8000 backend.wsgi:application
