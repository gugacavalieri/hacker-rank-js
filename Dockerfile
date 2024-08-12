FROM node:22-alpine AS production

# Set user for running in CI
# files will be mounted by Docker Compose
ARG USER=node
ENV HOME /home/$USER
WORKDIR $HOME