# Base Node.js version
ARG NODE_VERSION=22.14.0

# Development stage
FROM node:${NODE_VERSION} AS development

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files and install dependencies using npm install
COPY package.json package-lock.json /app/
RUN npm install

# Copy the entire project source code to the container
COPY . .

# Run Prisma generate
RUN npx prisma generate

# Default command for builder stage
CMD ["npm", "run", "dev"]