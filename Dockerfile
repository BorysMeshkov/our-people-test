FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "start"]