FROM alpine:3

# Setup env
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install Node and npm
RUN apk add --update autoconf automake build-base libtool nasm pkgconf nodejs npm git && rm -rf /var/cache/apk/*

# Change workdir to have separate place for app
WORKDIR /gitops-website

# Add required files
ADD . .

# Install dependencies
RUN npm i

# Expose port for server
EXPOSE 8000

# Create entrypoint
ENTRYPOINT ["npm", "start"]