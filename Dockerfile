FROM node:12.16-slim as base

ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock*.json ./
RUN npm i && \
  npm audit fix && \
  gatsby telemetry --disable

COPY . .

CMD ["npm", "start"]
