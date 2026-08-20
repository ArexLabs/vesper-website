# Development
dev:
    npx next dev --turbopack

# Build
build:
    npx next build

# Start production server
start:
    npx next start

# Lint
lint:
    npx next lint

# Type check
typecheck:
    npx tsc --noEmit

# Format code
fmt:
    npx prettier --write "src/**/*.{ts,tsx,css,json}"

# Check formatting
fmt-check:
    npx prettier --check "src/**/*.{ts,tsx,css,json}"

# Database: push schema
db-push:
    npx drizzle-kit push

# Database: generate migrations
db-generate:
    npx drizzle-kit generate

# Database: run migrations
db-migrate:
    npx drizzle-kit migrate

# Database: open studio
db-studio:
    npx drizzle-kit studio

# Database: seed
db-seed:
    DATABASE_URL="postgresql://vesper:2RuCj9FIJlt35hbuYQWo@5.175.245.175:5678/webdb" npx tsx src/db/seed.ts

# Docker: build image
docker-build:
    docker build -t vesper-website .

# Docker: run container
docker-run:
    docker run -p 3000:3000 --env-file .env vesper-website

# Clean build artifacts
clean:
    rm -rf .next node_modules/.cache

# Install dependencies
install:
    npm ci

# Full setup: install + db push + seed
setup: install db-push db-seed

# Check everything (lint + typecheck + build)
check: lint typecheck build
