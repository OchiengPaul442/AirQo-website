#!/bin/sh

# Run Django migrations
python manage.py migrate --noinput

# Collect static files
python manage.py collectstatic --noinput

# Start Gunicorn
exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000 --workers 3 --log-level info
