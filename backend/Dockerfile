# Backend Dockerfile
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy requirements and install dependencies (This layer can be cached if requirements don't change)
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code into the container (only after installing dependencies)
COPY . .

# Ensure environment variables are read and some Django-specific settings
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Expose the port the Django app will run on
EXPOSE 8000

# Copy and set entrypoint
COPY entrypoint.sh /app/entrypoint.sh

# Add execution permissions to entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Run the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]
