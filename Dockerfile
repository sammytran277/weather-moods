# Start with an official Node runtime as a parent image
FROM node:8
# Specify the author
MAINTAINER Sammy Tran <sammytran277@gmail.com>
# Specify the directory where subsequent commands will be run in the container
WORKDIR /app/frontend
# Copy dependencies file
COPY package.json /app/frontend
# Install dependencies
RUN npm install
# Copy the rest of the source code
COPY . /app/frontend
# Make port 3000
EXPOSE 3000
# Start the React app
CMD npm start