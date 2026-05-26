<div align="center">

# Vesper Launcher

A blazing-fast, native Minecraft launcher built for performance and simplicity.

[![Website](https://shieldcn.dev/badge/Website-launcher.devflare.de-blue.svg?variant=outline)](https://launcher.devflare.de)
[![Discord](https://shieldcn.dev/badge/Discord-Join-white.svg?variant=outline&icon=discord)](https://dc.devflare.de)
[![License GPLv3](https://shieldcn.dev/badge/license-GPLv3-green.svg?variant=outline)](LICENSE.md)
[![Launcher built with Rust](https://shieldcn.dev/badge/Launcher%20built%20with-Rust-orange.svg?variant=outline)](https://www.rust-lang.org)
[![TypeScript](https://shieldcn.dev/badge/TypeScript-3178C6.svg?variant=outline&icon=typescript)](https://www.typescriptlang.org)

</div>

> **Launcher Repository:** [ArexLabs/vesper-client](https://github.com/ArexLabs/vesper-client)

---

## About

Vesper is a next-generation Minecraft launcher designed to get you into the game **instantly** — without the bloat of Electron-based apps.

This repository contains the **Vesper website** ([ArexLabs/vesper-website](https://github.com/ArexLabs/vesper-website)). The launcher itself lives at [ArexLabs/vesper-client](https://github.com/ArexLabs/vesper-client).

---

## Features

### Client / Launcher

- **Instant Launch** — No lag, no heavy frameworks. Launch directly into your game in seconds.
- **Native Mod Support** — Integrated with Modrinth and CurseForge for effortless mod installation.
- **Modern UI** — Clean, minimalist interface that puts you in control.
- **Secure Authentication** — Microsoft OAuth2 login with zero telemetry.
- **Rich Integrations** — Discord RPC and modloader presence support out of the box.

### Website

- **Landing Page** — Feature overview, hero section, and download CTA
- **Documentation** — Roadmap, tech stack, changelog, and system requirements
- **Gallery** — Screenshots and visual previews of the launcher
- **Blog** — News and updates about Vesper development
- **Support** — Contact form and FAQ
- **Responsive Design** — Fully responsive across desktop and mobile
- **Dark/Light Mode** — Theme toggle with system preference detection
- **Press `d`** — Quick toggle between dark and light mode anywhere on the site

---

## Blog

The blog is powered by **PostgreSQL** via [Neon](https://neon.tech) and [Drizzle ORM](https://orm.drizzle.team).

### Admin Dashboard

The admin dashboard at `/admin` lets you manage blog posts (create, edit, delete). It uses **Better Auth** for authentication.

#### Access

Only users with the `admin` role can access the dashboard. Non-admin users and unauthenticated visitors are redirected to `/admin/login`.

#### Setup

```bash
# Install dependencies
npm install better-auth

# Create auth tables
npm run db:init

# Create your first admin user
bun scripts/create-admin.ts you@email.com yourpassword

# Start dev server
npm run dev
```

Then visit `/admin/login`, sign in, and manage posts at `/admin`.

#### Env variables

```
BETTER_AUTH_SECRET=<base64 32-byte key>
BETTER_AUTH_URL=http://localhost:3000
```

#### Schema

Posts use the same `posts` table. Auth tables (`user`, `session`, `account`, `verification`) are in `src/db/auth-schema.ts`.

### Schema

Blog posts live in a `posts` table with: `slug`, `title`, `date`, `author`, `excerpt`, `content` (Markdown), and timestamps.

### Database setup

```bash
# Copy the .env.example and add your DATABASE_URL
cp .env.example .env

# Initialize the table and seed with existing posts
node scripts/init-db.mjs
```

### Adding a new post

Posts are rendered from `content` as Markdown via `react-markdown`. To add a post, insert a row into the `posts` table:

```sql
INSERT INTO posts (slug, title, date, author, excerpt, content)
VALUES (
  'my-new-post',
  'My New Post',
  NOW(),
  'Author Name',
  'Short excerpt for the listing page.',
  '## Full Markdown body here\n\nWith **formatting**.'
);
```

Or directly from a seed script using Drizzle:

```ts
import { db } from "@/db";
import { posts } from "@/db/schema";

await db.insert(posts).values({
  slug: "my-new-post",
  title: "My New Post",
  date: new Date(),
  author: "Author Name",
  excerpt: "Short excerpt...",
  content: "## Full body",
});
```

The blog listing page (`/blog`) and post pages (`/blog/:slug`) fetch from the database at request time and support static generation via `generateStaticParams`.

---

## Getting Started

1. Visit [launcher.devflare.de](https://launcher.devflare.de)
2. Copy the install script and run it in your terminal
3. Launch Vesper and start playing

---

## System Requirements

| Requirement  | Details                               |
| ------------ | ------------------------------------- |
| **Java**     | Version 17 or 21 (latest recommended) |
| **OS**       | Windows 10/11 (64-bit)                |
| **Optional** | Discord for RPC features              |

---

## FAQ

**Is Vesper open source?**  
Yes! The launcher source is available at [ArexLabs/vesper-client](https://github.com/ArexLabs/vesper-client).

**What platforms are supported?**  
Windows 10/11 (64-bit) at launch. Linux support is planned for the public beta & MacOS support will come at some point in the future after release.

**Can I migrate from other launchers?**  
Import tools are planned. Until then, you can manually import your instances.

**Is my data safe?**  
Yes. Vesper uses Microsoft OAuth2 and never tracks or sends unnecessary data.

---

## Contributing

Contributions are welcome! Please read our [contribution guidelines](CONTRIBUTING.md) before submitting PRs.

- Open issues at [GitHub](https://github.com/ArexLabs/vesper-website)
- Join our [Discord](https://dc.devflare.de) for discussions

---

## Support

- **Discord** — [Join our community](https://dc.devflare.de)
- **Issues** — [Report bugs or request features](https://github.com/ArexLabs/vesper-website/issues)

---

## Legal

Vesper is not affiliated with Mojang or Microsoft.

- [Privacy Policy](https://launcher.devflare.de/privacy)
- [Terms of Service](https://launcher.devflare.de/tos)

---

<div align="center">

[**launcher.devflare.de**](https://launcher.devflare.de)

</div>
