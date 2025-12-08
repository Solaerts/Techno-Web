'use server'

import { db } from '@/db'
import { contactTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

let tasks: {Name: string; Email: string; Phone: string; Subject: string; Message: string}[] = []

export async function getContact() {
    return tasks
}

export async function addContact(form: FormData) {
    await db.insert(contactTable).values({
        Name: String(form.get('Name')),
        Email: String(form.get('Email')),
        Phone: String(form.get('Phone')),
        Subject: String(form.get('Subject')),
        Message: String(form.get('Message')),
    })
    //recharger la page
    redirect((await headers()).get('referer') ?? '/')
}

export async function getTasks() {
  return await db.select().from(contactTable)
}

export async function editTask(form: FormData) {
  await db
    .update(contactTable)
    .set({
      Name: String(form.get('Name')),
      Email: String(form.get('Email')),
      Phone: String(form.get('Phone')),
      Subject: String(form.get('Subject')),
      Message: String(form.get('Message')),
    })
    .where(eq(contactTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeTask(id: string) {
  await db.delete(contactTable).where(eq(contactTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}