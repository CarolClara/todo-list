FROM node:14.4.0-alpine3.12

WORKDIR /app/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

CMD ["npm", "run", "serve"]