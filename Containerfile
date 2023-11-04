# Use the NODE_VERSION argument to specify the Node.js version
ARG NODE_VERSION

# Use the specified Node.js version as the base image
FROM node:${NODE_VERSION}-alpine

# Set Node args
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk add --update autoconf automake build-base libtool nasm pkgconf && \
    rm -rf /var/cache/apk/*

# Setup work directory
WORKDIR /gitops-website

# Set permissions for non-root user
RUN chown -R node:node /gitops-website

# Switch user to non-root
USER node

# Add repo files with correct user:group ownership
ADD --chown=node:node . .

# Install dependencies
RUN npm ci

# Expose port for server
EXPOSE 8000

# Create entrypoint
ENTRYPOINT ["npm", "start"]