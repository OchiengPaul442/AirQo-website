# Stage 1: Build the Frontend (Next.js)
FROM node:18-alpine AS frontend-build

# Set working directory for frontend
WORKDIR /app/frontend

# Copy the package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY frontend/ ./

# Build the Next.js application for production
RUN npm run build

# Stage 2: Backend (Django) Setup
FROM python:3.11-slim AS backend

# Set working directory for backend
WORKDIR /app/backend

# Install dependencies for backend (Django)
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend source code
COPY backend/ ./

# Collect static files
RUN python manage.py collectstatic --noinput

# Stage 3: Final Image (Combining Frontend & Backend)
FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Create app directories
WORKDIR /app

# Copy backend files from the backend build stage
COPY --from=backend /app/backend /app/backend

# Copy frontend build files from the frontend build stage
COPY --from=frontend-build /app/frontend/.next /app/frontend/.next
COPY --from=frontend-build /app/frontend/public /app/frontend/public

# Install backend dependencies
COPY backend/requirements.txt backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Expose ports for backend (Django) and frontend (Next.js)
EXPOSE 8000 3000

# Command to run backend and frontend
CMD ["sh", "-c", "python /app/backend/manage.py runserver 0.0.0.0:8000 & npm --prefix /app/frontend run start"]

