FROM registry.cn-hangzhou.aliyuncs.com/mqttsnet-community/node-red:latest-22-minimal

COPY settings.js /data/
USER root
RUN chown -R node-red:root /data
USER node-red
RUN npm install --no-fund --no-update-notifier --save node-red-contrib-auth-mongodb node-red-contrib-storage-mongodb
RUN npm config set @private:registry http://registry:4873