import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { db } from '../db'; 
import { eq } from "drizzle-orm";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('full_name'),
  lastName: text('last_name'),
  addressLine1: text('address_line_1'),
  addressLine2: text('address_line_2'),
  city: text('city'),
  state: text('state'),
  zipCode: text('zip_code'),
  email: text('email'),
  phone: varchar('phone', { length: 256 }),
});

export async function findUserByUsername(username: string) {
    return await db.select().from(users).where(eq(users.email, username));
} 
