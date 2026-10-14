FROM node:24-alpine
WORKDIR /app
COPY cloudflare_worker.js ./cloudflare_worker.js
COPY scripts/hdrezka-relay.cjs ./scripts/hdrezka-relay.cjs
USER node
EXPOSE 8787
CMD ["node", "scripts/hdrezka-relay.cjs"]
