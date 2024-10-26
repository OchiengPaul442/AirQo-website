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

# Get the environment variables from build arguments
ARG NEXT_PUBLIC_DJANGO_API_URL
ENV NEXT_PUBLIC_DJANGO_API_URL=${NEXT_PUBLIC_DJANGO_API_URL}

RUN echo "NEXT_PUBLIC_DJANGO_API_URL is $NEXT_PUBLIC_DJANGO_API_URL"


# Build the Next.js app
RUN npm run build

# Expose the frontend port (default Next.js is 3000)
EXPOSE 3000

# Wait for the backend to be ready, then start the frontend
CMD ["/bin/bash", "/app/wait-for-it.sh", "backend:8000", "--", "npm", "run", "start"]
