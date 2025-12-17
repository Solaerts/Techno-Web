'use server';

import { db } from '@/db';
import { messages } from '@/db/schema';
import { revalidatePath } from 'next/cache';

export async function submitContactMessage(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validation simple
  if (!name || !email || !message) {
    return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' };
  }

  try {
    // Insertion dans la DB
    await db.insert(messages).values({
      name,
      email,
      subject,
      message,
    });

    // Rafraîchir la page ou rediriger si nécessaire
    revalidatePath('/Contact');
    return { success: true, message: 'Merci ! Votre message a bien été envoyé.' };
    
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    return { success: false, message: "Une erreur s'est produite. Veuillez réessayer." };
  }
}