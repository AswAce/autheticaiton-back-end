FROM node:16 as build

COPY ./package.json /package.json
COPY ./package-lock.json /package-lock.json

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
