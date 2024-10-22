#!/bin/sh

# Start the Django backend
python /app/backend/manage.py runserver 0.0.0.0:8000 &

# Wait until the backend is up (you can customize this)
while ! curl http://localhost:8000/ 2>&1 | grep -q '200'; do
  echo "Waiting for backend to start..."
  sleep 5
done

# Start the Next.js frontend
npm --prefix /app/frontend run start
