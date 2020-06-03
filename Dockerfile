FROM node:lts-alpine3.11 as build

WORKDIR /usr/src/app

RUN apk add git python openssh build-base
RUN ssh-keygen -t rsa -f github_key

#RUN npm i epipebomb express http https fs path socket.io socket.io-redis xml2json uuid moment js2xmlparser sqlite3 jsonschema @swimlane/ngx-datatable

COPY package.json .
RUN npm install

COPY monitor.js .
COPY ./dist .
COPY config.js .
COPY glaciatorParametersSchema.json .

RUN mkdir -p /usr/src/app/queue
RUN mkdir -p /usr/src/app/executable
RUN mkdir -p /usr/src/app/database


# Clean slate
FROM node:lts-alpine3.11
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 8181
CMD [ "node", "monitor.js" ]
