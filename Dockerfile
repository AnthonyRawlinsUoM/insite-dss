FROM node:lts-alpine3.11

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8181
CMD [ "node", "monitor.js" ]
