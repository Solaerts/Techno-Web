import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const contactTable = pgTable('Contact', {
  id: uuid().defaultRandom().primaryKey(),
  Name: text("Name").notNull(),
  Email: text("Email").notNull(),
  Phone: text("Phone").notNull(),
  Subject: text("Subject").notNull(),
  Message: text("Message").notNull(),
})