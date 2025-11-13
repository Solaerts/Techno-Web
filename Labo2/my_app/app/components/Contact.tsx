import { type ReactNode } from "react";

type ContactProps = {
    Name: string;
    Email: string;
    Phone: string;
    children: ReactNode;
}

export default function Contact(props: ContactProps) {
    return(
        <div className="p-4 border-slate-200 mb-4 bg-slate-100 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="pl-4 border-l-4 border-slate-400">
                <p><strong>Name:</strong> {props.Name}</p>
                <p><strong>Email:</strong> {props.Email}</p>
                <p><strong>Phone:</strong> {props.Phone}</p>
                {props.children}
            </div>
        </div>
    )
}