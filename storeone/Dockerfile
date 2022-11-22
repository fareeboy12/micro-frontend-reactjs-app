FROM node:alpine

WORKDIR /

COPY ./package*.json .

RUN npm install

COPY . .

# COPY . .
# EXPOSE 3006
CMD ["npm", "start"]