FROM node:19-alpine

WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app
COPY . .

# Run app
ENTRYPOINT ["npm", "run", "start"]