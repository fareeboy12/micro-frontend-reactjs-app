FROM node:alpine

WORKDIR /

COPY ./package*.json .

RUN npm install

COPY . .

# COPY . .
# EXPOSE 3005
CMD ["yarn", "server"]