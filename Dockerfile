FROM node:12

#CREATE APP DIRECTORY
WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .

EXPOSE 8080

CMD ["node","server.js"]