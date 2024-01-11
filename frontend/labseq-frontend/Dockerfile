# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .


# Make port 4200 available to the world outside this container
EXPOSE 4200

# Start Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]


