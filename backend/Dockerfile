FROM node:18-alpine
#as base

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]

# #Production step
# FROM base as production

# ENV NODE_PATH=./build

# RUN npm run build

# EXPOSE 5000

# CMD [ "npm", "start" ]

# https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f
