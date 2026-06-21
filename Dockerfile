FROM node:24.17 AS base

FROM base AS build

COPY ./ /build
WORKDIR /build
RUN yarn --immutable
RUN yarn run build

FROM nginx AS frontend
COPY --from=build /build/build /dist
COPY ./nginx.conf /etc/nginx/nginx.conf
