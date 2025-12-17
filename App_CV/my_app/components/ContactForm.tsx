'use client';

import { useActionState } from 'react';
import { submitContactMessage } from '@/lib/action';

const initialState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactMessage, initialState);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Me Contacter</h2>
      
      <form action={formAction} className="space-y-4">
        
        {/* Champ Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="votre@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Champ Sujet */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Objet de votre message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Votre message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Bouton d'envoi avec état de chargement */}
        <button
          type="submit"
          disabled={isPending}
          className={`w-full font-bold py-3 px-4 rounded-md transition duration-300 ${
            isPending 
              ? 'bg-gray-400 cursor-not-allowed text-gray-100' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isPending ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {/* Message de retour */}
        {state?.message && (
          <p className={`mt-4 text-center text-sm font-medium ${state.success ? 'text-green-600' : 'text-red-600'}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}