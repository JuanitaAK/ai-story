FROM node:18.16.0-alpine3.17

RUN mkdir -p /mystory/back-app

WORKDIR /mystory/back-app

COPY src/package.json src/package-lock.json 

RUN npm install

COPY src/ .

EXPOSE 5000

CMD ["npm", "start"]
