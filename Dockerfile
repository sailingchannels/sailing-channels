FROM ubuntu:16.04
MAINTAINER Thomas Brüggemann <mail@thomasbrueggemann.com>
LABEL Description="sailing-channels.com Website" Vendor="Sailing Channels" Version="1.13.10"

# INSTALL DEPENDENCIES
RUN apt-get update -y && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# DOWNLOAD CODE
COPY ./ /srv
WORKDIR /srv

EXPOSE 8999

RUN npm install
ENV PORT=8999
ENV TAG=1.13.10
ENTRYPOINT exec npm start
