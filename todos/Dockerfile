# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package manager files
COPY package.json pnpm-lock.yaml ./

# Copy .env file
COPY .env .env

# Install pnpm globally and app dependencies
RUN npm install pnpm -g \
    && pnpm install --frozen-lockfile

# Copy application source code
COPY . .

# Run Prisma migrations for production
RUN npx prisma migrate dev --name init
# Build the production-ready application
RUN npm run build
RUN RUN chown -R node:node /usr/src/app
# Expose the application port
EXPOSE 3000

# Use non-root user for running the app
USER node

# Start the application`
CMD ["sudo", "npm", "run", "start"]
