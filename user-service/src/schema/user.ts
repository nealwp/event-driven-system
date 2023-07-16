import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { db } from '../db'; 
import { InferModel, eq } from "drizzle-orm";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('full_name').notNull(),
  lastName: text('last_name').notNull(),
  addressLine1: text('address_line_1'),
  addressLine2: text('address_line_2'),
  city: text('city'),
  state: text('state'),
  zipCode: text('zip_code'),
  email: text('email').unique().notNull(),
  phone: varchar('phone', { length: 256 }),
});

export type User = InferModel<typeof users>
export type NewUser = InferModel<typeof users, 'insert'>

export async function findUserByUsername(username: string) {
    return await db.select().from(users).where(eq(users.email, username));
} 

export async function createUser(newUser: NewUser) {
    const { firstName, lastName, email } = newUser
    return db.insert(users).values({firstName, lastName, email}).returning()
}
