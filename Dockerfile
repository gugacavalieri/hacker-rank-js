FROM node:22-alpine as production

# Set user for running in CI
# files will be mounted by Docker Compose
ARG USER=node
ENV HOME /home/$USER/app
USER $USER
WORKDIR $HOME
RUN mkdir $HOME/node_modules $HOME/.npm