# Frontend Dockerfile
FROM node:18-alpine

# Install bash and dockerize
RUN apk add --no-cache bash curl
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-alpine-linux-amd64-v0.6.1.tar.gz

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the frontend code
COPY . .

# Accept the build argument and set it as an environment variable
ARG NEXT_PUBLIC_DJANGO_API_URL
ENV NEXT_PUBLIC_DJANGO_API_URL=${NEXT_PUBLIC_DJANGO_API_URL}

# Wait for the backend to be ready before building
RUN dockerize -wait tcp://backend:8000 -timeout 60s

# Build the Next.js app
RUN npm run build

# Expose the frontend port (default Next.js is 3000)
EXPOSE 3000

# Start the frontend
CMD ["npm", "run", "start"]
