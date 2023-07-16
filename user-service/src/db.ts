import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
 
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "user_service",
  password: "password",
  database: "userdb",
});
 
export const db = drizzle(pool)

export async function initialize() {
    return await migrate(db, { migrationsFolder: './migrations'})
}
