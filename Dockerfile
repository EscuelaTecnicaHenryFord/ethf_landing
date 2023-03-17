FROM nginx:alpine

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

COPY ./nginx.conf /etc/nginx/nginx.conf