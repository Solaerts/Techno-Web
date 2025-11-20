'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

let tasks: { Name: string; Email: string; Phone: string; Subject: string; Message: string}[] = [

]

export async function getContact() {
    return tasks
}

export async function addContact(form: FormData) {
    tasks.push({
        Name: String(form.get('Name')),
        Email: String(form.get('Email')),
        Phone: String(form.get('Phone')),
        Subject: String(form.get('Subject')),
        Message: String(form.get('Message')),
    })
    //recharger la page
    redirect((await headers()).get('referer') ?? '/')
}