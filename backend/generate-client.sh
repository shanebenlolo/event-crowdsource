#!/bin/bash

# Switch to the specified node version
nvm use v20.11.0

rm -rf \
 ../client-sdk/.openapi-generator \
 ../client-sdk/apis ../client-sdk/models \
 ../client-sdk/index.ts \
 ../client-sdk/runtime.ts

# Run the client generation command
npm run generate-client

# Navigate to the client-sdk directory
cd ../client-sdk

tsc

# Increment the minor version in package.json
current_version=$(grep -oP '"version": "\K(.*?)(?=")' package.json)
IFS='.' read -ra VER <<< "$current_version"
new_version="${VER[0]}.${VER[1]}.$((VER[2]+1))" # Increment the patch version
sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" package.json

# Publish the package
npm publish

# Navigate to the backend directory and install dependencies
cd ../backend
npm install event-crowdsource-client-sdk-2@latest

# Navigate to the frontend directory and install dependencies
cd ../frontend
npm install event-crowdsource-client-sdk-2@latest
