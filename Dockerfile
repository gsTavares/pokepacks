FROM node:18-slim AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/pokepacks/browser /usr/share/nginx/html
EXPOSE 80