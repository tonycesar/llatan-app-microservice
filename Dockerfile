FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT 8080
ENV PORT_SSL 8083

EXPOSE 8080
EXPOSE 8083

CMD [ "node", "app.js" ]
