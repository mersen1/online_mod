FROM node:24-alpine AS dependencies
WORKDIR /app
RUN npm install --global pnpm@11.25.0
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile --ignore-scripts

FROM node:24-alpine
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY cloudflare_worker.js ./cloudflare_worker.js
COPY scripts/hdrezka-relay.cjs ./scripts/hdrezka-relay.cjs
USER node
EXPOSE 8787
CMD ["node", "scripts/hdrezka-relay.cjs"]
