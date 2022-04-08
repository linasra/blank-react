# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16.14-alpine as build-stage
WORKDIR /app
COPY ./ /app/
RUN yarn install && yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.21.6
COPY --from=build-stage /app/build/ /usr/share/nginx/html