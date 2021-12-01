# STAGE 1: BUILD #
FROM node:14-alpine as build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
ARG REACT_APP_ENV
ARG REACT_APP_TEST
ENV REACT_APP_ENV $REACT_APP_ENV
ENV REACT_APP_TEST=true
RUN npm run build-docker

# STAGE 2: PRODUCTION DEPLOYMENT #
FROM nginx:1.21.4-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
