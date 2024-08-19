FROM node:18-slim AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/pokepacks/browser /usr/share/nginx/html
EXPOSE 80