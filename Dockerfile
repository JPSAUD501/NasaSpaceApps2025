FROM oven/bun:1 AS python-base

RUN apt-get update \
	&& apt-get install -y --no-install-recommends python3 python3-pip \
	&& rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install --no-cache-dir markdown xhtml2pdf

FROM python-base AS base
WORKDIR /app

COPY package.json bun.lock ./
RUN bun ci

FROM base AS builder
COPY nest-cli.json tsconfig.json tsconfig.build.json ./
COPY src ./src
RUN bun run build

FROM python-base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=7071

COPY --from=base /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/files ./dist/files
COPY --from=builder /app/src/modules/mission/script.py ./src/modules/mission/script.py
COPY package.json bun.lock ./

EXPOSE 3000

CMD ["bun", "dist/main.js"]
