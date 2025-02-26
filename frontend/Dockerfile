# Frontend Dockerfile
FROM node:latest

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the files
COPY . .

# Expose the Next.js app port
EXPOSE 3000

# Run Next.js dev server
CMD ["yarn", "dev"]
