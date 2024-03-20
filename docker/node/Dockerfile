FROM node:20

RUN useradd -m alex && usermod -a -G node alex

RUN npm install -g npm@latest

WORKDIR /react-start

USER node
