FROM node:lts-alpine3.11

WORKDIR /usr/src/app

RUN npm i express http https fs path socket.io socket.io-redis xml2json uuid/v4 moment js2xmlparser

COPY node_modules/

COPY monitor.js .
COPY ./dist .
COPY config.js .

RUN mkdir -p /usr/src/app/queue
RUN mkdir -p /usr/src/app/executable
EXPOSE 8181
CMD [ "node", "monitor.js" ]
