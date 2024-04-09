FROM node:18-slim

ARG UID
ARG GID

ENV NODE-ENV=development

WORKDIR /var/app

# COPY package*.json ./

# RUN npm install

# COPY . .

RUN grep -c ${UID}:${GID} /etc/passwd \
    || ((grep -c :${GID}: /etc/group || groupadd -g ${GID} app) \
    && useradd -l -u ${UID} -ms /bin/bash -g ${GID} app \
    && mkdir -p /home/app/.pnpm && chown -R ${UID}:${GID} /home/app)

USER ${UID}:${GID}

CMD ["npm", "start" ]


# #Production step
# FROM base as production

# ENV NODE_PATH=./build

# RUN npm run build

# EXPOSE 5000

# CMD [ "npm", "start" ]

# https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f
