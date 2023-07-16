import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/schema/*",
  out: "./migrations",
  driver: 'pg',
  dbCredentials: {
    user: "user_service",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "userdb"
  }
} satisfies Config;
