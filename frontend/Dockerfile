# Frontend Dockerfile
FROM node:18-alpine

# Install bash for wait-for-it script
RUN apk add --no-cache bash

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the frontend code
COPY . .

# Download wait-for-it.sh for waiting on backend service
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Build the Next.js app
RUN npm run build

# Expose the frontend port (default Next.js is 3000)
EXPOSE 3000

# Wait for the backend to be ready, then start the frontend
CMD ["/app/wait-for-it.sh", "django-backend", "8000", "--", "npm", "run", "start"]
