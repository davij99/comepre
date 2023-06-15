FROM node:17-alpine
LABEL authors="dcugliari"

WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]

