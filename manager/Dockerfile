FROM registry.cn-hangzhou.aliyuncs.com/mqttsnet-community/node:22.19.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --no-fund --no-update-notifier
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]