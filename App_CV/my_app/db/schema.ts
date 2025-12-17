import { boolean, pgTable, text, serial, timestamp, uuid } from 'drizzle-orm/pg-core'

export const contactTable = pgTable('Contact', {
  id: uuid().defaultRandom().primaryKey(),
  Name: text("Name").notNull(),
  Email: text("Email").notNull(),
  Phone: text("Phone").notNull(),
  Subject: text("Subject").notNull(),
  Message: text("Message").notNull(),
})

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  subject: text('subject'), // Optionnel
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})