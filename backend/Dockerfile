# Backend Dockerfile
FROM node:latest

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the files
COPY . .

# Expose the backend API port
EXPOSE 5000

# Run the Express server
CMD ["yarn", "dev"]
