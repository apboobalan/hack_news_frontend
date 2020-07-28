FROM node:lts-alpine3.12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm install

RUN npm install react-scripts@3.4.1 -g

RUN npm install tailwindcss -g

CMD ["npm", "start"] 