#!/bin/bash

# Setup PostgreSQL DB with Docker
echo "Starting PostgreSQL Docker container..."
cd pg
docker-compose up -d

# Get the running Postgres container ID
POSTGRES_CONTAINER_ID=$(docker ps -qf "ancestor=postgres:alpine")

if [ -z "$POSTGRES_CONTAINER_ID" ]; then
    echo "Postgres container not found. Please check if the container is running."
    exit 1
fi

echo "Executing SQL script to create tables..."
docker exec -i "$POSTGRES_CONTAINER_ID" psql -U postgres -d the_db <create.sql

cd ..

# Install project dependencies
echo "Installing npm dependencies..."
npm install

# Generate mock data
echo "Generating mock data..."
cd mock
node mock_create.js
cd ..

# Run the server in a background process
echo "Starting the server..."
node server.js &

# Wait for the server to start (optional sleep for a few seconds)
sleep 3

# Run tests in parallel using npx gatling
echo "Running Gatling tests in parallel..."
npx gatling run --simulation post &&
    npx gatling run --simulation postandref &&
    npx gatling run --simulation postwithref

echo "All tests completed."

# Stop the server
echo "Stopping the server..."
kill %1
