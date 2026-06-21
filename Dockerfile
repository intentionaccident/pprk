FROM node:24.17 AS base

FROM base AS build

WORKDIR /build

COPY [ "yarn.lock", "package.json", "yarnrc.yml", ".yarn", "/build" ]
RUN yarn --immutable

COPY ./ /build
WORKDIR /build
RUN yarn run build

FROM nginx AS frontend
COPY --from=build /build/build /dist
COPY ./nginx.conf /etc/nginx/nginx.conf
