#!/usr/bin/env bash
set -o errexit

# Install all dependencies (including devDependencies)
echo "Installing dependencies..."
npm install --production=false

# Run the build
echo "Building application..."
npm run build