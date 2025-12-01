import { Sen } from "next/font/google";
import Contact from "../../components/Contact";
import Sender from "../../components/Sender";

import {addContact}from "../../lib/tasks";
import {getContact} from "../../lib/tasks";

export default async function ContactPage() {
    const tasks = await getContact();
    return(
        <>
        <h1 className = 'text-center text-3xl my-8'> Contact Page</h1>
        <Contact Name="Nicolas Willaerts" Email="willaertsnicolas@gmail.com" Phone="+32 496 77 20 12">
            <p className="mt-2">Feel free to reach out to me via email or phone for any inquiries or collaborations!</p>
        </Contact>
        
        <h1 className = "text-center text-3xl my-8"> New Contact</h1>
        <div className="p-4 border-slate-200 mb-4 bg-slate-100 rounded-lg shadow-md mx-4">
        <form action = {addContact} className="pl-4 border-l-4 border-slate-400 flex flex-col gap-4">
            <label> Your name: <input name="Name" className="border m1-m2"/> </label>
            <label> Your email: <input name ="Email" className="border m1-m2"/> </label>
            <label> Your phone number: <input name ="Phone" className="border m1-m2"/> </label>
            <label> Subject : <input name ="Subject" className="border m1-m2"/> </label>
            <label> Message : <input name ="Message" className="border"/> </label>
            <button className="ml-2 border bg-slate-200 px-2"> Submit </button>
        </form>
        </div>
        <ul>
            {tasks.map(contact => <Sender key="contact" Name={contact.Name} Email={contact.Email} Phone={contact.Phone} Subject={contact.Subject} Message={contact.Message}>
            </Sender>)}
        </ul>

        </>
    )
}