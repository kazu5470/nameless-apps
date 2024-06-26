FROM node:18-alpine as builder

WORKDIR /usr/src/app

COPY backend/ ./

RUN yarn

RUN npx prisma generate --schema=./prisma/schema.prisma
RUN yarn build

FROM builder

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 9090

CMD [ "node", "dist/main.js" ]