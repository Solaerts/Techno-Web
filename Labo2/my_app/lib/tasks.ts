'use server'

import { db } from '@/db'
import { tasksTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

let tasks: { Name: string; Email: string; Phone: string; Subject: string; Message: string}[] = []

export async function getContact() {
    return tasks
}

export async function addContact(form: FormData) {
    tasks.push({
        Name: String(form.get('fullname')),
        Email: String(form.get('email')),
        Phone: String(form.get('phone')),
        Subject: String(form.get('subject')),
        Message: String(form.get('message')),
    })
    //recharger la page
    redirect((await headers()).get('referer') ?? '/')
}

export async function getTasks() {
  return await db.select().from(tasksTable)
}

export async function addTask(form: FormData) {
  await db.insert(tasksTable).values({
    title: String(form.get('title')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editTask(form: FormData) {
  await db
    .update(tasksTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(tasksTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeTask(id: string) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}