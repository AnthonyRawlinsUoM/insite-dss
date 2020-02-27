FROM node:lts-alpine3.11

WORKDIR /usr/src/app

COPY ./dist .
COPY config.js .

RUN mkdir -p /usr/src/app/queue
RUN mkdir -p /usr/src/app/executable
EXPOSE 8181
CMD [ "node", "dist/INSITE/monitor.js" ]
