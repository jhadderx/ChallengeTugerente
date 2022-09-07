FROM node:18.7.0
WORKDIR /app
COPY package.json ./
COPY .babelrc ./
COPY webpack.config.js ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]