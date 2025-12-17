import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col"> 
      <main className="grow container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact</h1>
          <p className="mt-2 text-lg text-gray-600">N'hésitez pas à me laisser un message pour toute opportunité.</p>
    </div>
        
        <ContactForm />
      </main>
    </div>
  );
}