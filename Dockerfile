# Step 1: Use official Node.js image
FROM node:22

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the project files into the container
COPY . .

# Step 5: Expose the port on which the React app will run
EXPOSE 3000

# Step 6: Start the React app
CMD ["npm", "start"]