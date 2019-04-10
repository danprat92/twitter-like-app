FROM node:11.10.0-alpine

WORKDIR '/app'

COPY package.json .

RUN yarn

COPY . .

CMD ["npm", "run", "start"]

