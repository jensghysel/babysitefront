# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node
# Copy all local files into the image.
COPY ./build /build

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 5000