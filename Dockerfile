FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN yarn build

COPY ./dist .
