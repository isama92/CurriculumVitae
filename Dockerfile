FROM node:11.1

WORKDIR /usr/src/app

RUN mkdir client
RUN mkdir server

WORKDIR /usr/src/app/client
COPY client/package*.json /usr/src/app/client/
RUN npm install

WORKDIR /usr/src/app/server/
COPY server/package*.json /usr/src/app/server/
RUN npm install

COPY . /usr/src/app/

WORKDIR /usr/src/app/client
RUN npm run build

WORKDIR /usr/src/app/server/

CMD [ "npm", "start" ]

EXPOSE 3000
