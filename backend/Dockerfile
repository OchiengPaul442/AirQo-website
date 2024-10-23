# Backend Dockerfile
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code into the container
COPY . .

# Ensure environment variables are read and some Django-specific settings
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Run Django collectstatic command to gather static files (for production)
RUN python manage.py collectstatic --noinput

# Expose the port the Django app will run on
EXPOSE 8000

# Add execution permissions to entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Set the correct permissions to run as root (optional)
USER root

# Run the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]
