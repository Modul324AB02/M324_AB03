FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run lint && npm run test

RUN npm run build

CMD ["node", "build/index.js"]
