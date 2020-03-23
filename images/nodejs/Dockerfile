FROM node:latest

WORKDIR /usr/src/app

# Insert nodemon for hot restart
RUN npm install -g nodemon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./app/package*.json ./

######### Start WEBSERVER setup
# Modify www-data user and set UID, GID to 500
# https://muffinresearch.co.uk/linux-changing-uids-and-gids-for-user/
RUN groupadd --gid 7527 docker_node \
  && useradd --uid 7527 --gid docker_node --shell /bin/bash --create-home docker_node

RUN groupmod -g 777 www-data \
    && usermod -u 777 www-data \
    && usermod -g 777 www-data

######### End of WEBSERVER setup

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000

#CMD [ "nodemon", "npm start" ]