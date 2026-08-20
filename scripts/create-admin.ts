import postgres from "postgres";

const email = process.argv[2];
const password = process.argv[3];
const name = process.argv[4] || email?.split("@")[0];

if (!email || !password) {
  console.error("Usage: bun scripts/create-admin.ts <email> <password> [name]");
  process.exit(1);
}

const { randomUUID } = await import("node:crypto");

const sql = postgres(process.env.DATABASE_URL!);

async function main() {
  const existing = await sql`SELECT id FROM "user" WHERE email = ${email}`;
  if (existing.length > 0) {
    console.error(`User ${email} already exists. Update their role instead.`);
    await sql`UPDATE "user" SET role = 'admin' WHERE email = ${email}`;
    console.log(`Updated ${email} to admin role.`);
    await sql.end();
    process.exit(0);
  }

  const id = randomUUID();
  const hashed = await Bun.password.hash(password, { algorithm: "bcrypt" });

  await sql`
    INSERT INTO "user" (id, name, email, email_verified, role, created_at, updated_at)
    VALUES (${id}, ${name}, ${email}, true, 'admin', NOW(), NOW())
  `;

  await sql`
    INSERT INTO "account" (id, user_id, account_id, provider_id, password, created_at, updated_at)
    VALUES (${randomUUID()}, ${id}, ${id}, 'credential', ${hashed}, NOW(), NOW())
  `;

  console.log(`Admin user created: ${email}`);
  await sql.end();
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
