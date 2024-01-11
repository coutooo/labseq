#!/bin/bash

# Change directory to the backend
cd backend/labseq-app/

# Clean and package the backend using Maven Wrapper
./mvnw clean package

# Build the Docker image for the backend
docker build -f src/main/docker/Dockerfile.jvm -t labseqbackend .

# Move back to the root directory
cd ../../

# Change directory to the frontend
cd frontend/labseq-frontend/

# Build the Docker image for the frontend
docker build -t labseqfrontend .

# Move back to the root directory
cd ../../

# Bring up the entire application using docker-compose
docker-compose up

# Access the application in the browser
echo "Access Labseq Calculator at: http://localhost:4200/"
