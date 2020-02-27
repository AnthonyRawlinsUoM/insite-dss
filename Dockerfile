FROM node:lts-alpine3.11 as build

WORKDIR /usr/src/app

RUN apk add git python openssh build-base
RUN ssh-keygen -t rsa -f github_key
RUN npm i express http https fs path socket.io socket.io-redis xml2json uuid moment js2xmlparser

COPY monitor.js .
COPY ./dist .
COPY config.js .

RUN mkdir -p /usr/src/app/queue
RUN mkdir -p /usr/src/app/executable


# Clean slate
FROM node:lts-alpine3.11
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app
EXPOSE 8181
CMD [ "node", "monitor.js" ]
