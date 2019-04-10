FROM node:11.10.0-alpine AS builder

WORKDIR '/app'

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
