FROM node:16-alpine

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]