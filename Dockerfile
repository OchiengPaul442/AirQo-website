# Stage 1: Backend Setup
FROM python:3.11-slim AS backend-build

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory for the entire project
WORKDIR /app

# Copy the requirements.txt to the root
COPY requirements.txt ./

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project to the container
COPY . .

# Collect static files for Django
RUN python manage.py collectstatic --noinput

# Run database migrations
RUN python manage.py migrate

# Expose the backend port
EXPOSE 8000

# Command to start the Django backend
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]

# Stage 2: Frontend Setup (after backend is ready)
FROM node:18-alpine AS frontend-build

# Set working directory for the frontend
WORKDIR /app/frontend

# Copy the frontend package files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install --production

# Copy the rest of the frontend files
COPY frontend/ .

# Wait for the backend to be ready before building the frontend
RUN until curl -s http://127.0.0.1:8000/healthcheck; do sleep 5; done

# Build the Next.js app for production (ensure backend API is running)
RUN npm run build

# Stage 3: Final Setup for Running the Full Application
# Use a minimal Python image for the final stage
FROM python:3.11-slim AS final-stage

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory to /app
WORKDIR /app

# Copy everything from the backend build stage
COPY --from=backend-build /app /app

# Copy the built frontend static files
COPY --from=frontend-build /app/frontend/.next /app/staticfiles/

# Expose both ports for the frontend and backend
EXPOSE 8000 3000

# Command to start both Django and Next.js concurrently
CMD ["bash", "-c", "gunicorn backend.wsgi:application --bind 0.0.0.0:8000 & npm run start --prefix frontend"]
