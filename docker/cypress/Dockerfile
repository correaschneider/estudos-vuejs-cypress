FROM cypress/base:10

ARG http_proxy
ARG https_proxy
ARG no_proxy

WORKDIR /app

COPY package.json .
COPY package-lock.json .

ENV CI=1
RUN npm ci

RUN npx cypress verify

CMD [ "npx", "cypress", "run" ]