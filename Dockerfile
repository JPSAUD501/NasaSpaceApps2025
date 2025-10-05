FROM oven/bun:1 AS python-base

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		python3 \
		python3-pip \
		python3-markdown \
		python3-xhtml2pdf \
	&& rm -rf /var/lib/apt/lists/*

FROM python-base AS base
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile=false

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
