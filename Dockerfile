FROM node:19-alpine
WORKDIR /home/app
COPY . .
RUN npm i && npm cache clean --force
ENTRYPOINT [ "npm" ]
CMD ["start"]