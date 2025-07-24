FROM node:18
WORKDIR /app
COPY typescript_service.ts .
COPY tsconfig.json .
RUN npm install -g typescript @types/node && tsc typescript_service.ts
CMD ["node", "typescript_service.js"]