# Frontend Dockerfile
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies (only copy package.json and lock files first to cache node_modules)
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the frontend code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the frontend port (default Next.js is 3000)
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
