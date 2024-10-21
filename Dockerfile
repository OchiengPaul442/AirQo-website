# Stage 1: Backend Setup (Django)
FROM python:3.11-slim AS backend-build

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install PostgreSQL client to connect to an external database
RUN apt-get update && apt-get install -y libpq-dev

# Set working directory
WORKDIR /app

# Copy requirements.txt to the root
COPY requirements.txt ./

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose backend port
EXPOSE 8000

# Command to start backend using Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]

# Stage 2: Frontend Setup (Next.js)
FROM node:18-alpine AS frontend-build

# Set working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install --production

# Copy the rest of the frontend files
COPY frontend/ .

# Build the Next.js app for production
RUN npm run build

# Stage 3: Final Setup
FROM python:3.11-slim AS final-stage

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy everything from the backend build stage
COPY --from=backend-build /app /app

# Copy the built frontend static files
COPY --from=frontend-build /app/frontend/.next /app/staticfiles/

# Expose ports for both frontend and backend
EXPOSE 8000 3000

# Command to run both backend and frontend concurrently
CMD ["bash", "-c", "gunicorn backend.wsgi:application --bind 0.0.0.0:8000 & npm run start --prefix frontend"]
