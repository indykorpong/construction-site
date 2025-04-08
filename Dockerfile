FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run db:gen

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]