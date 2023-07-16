import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/schema/*",
  out: "./migrations",
  driver: 'pg',
  dbCredentials: {
    user: "user_service",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "userdb"
  }
} satisfies Config;
