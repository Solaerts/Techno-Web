import { type ReactNode } from "react";

type SenderProps = {
    Name: string;
    Email: string;
    Phone: string;
    Subject: string;
    Message: string;
    children: ReactNode;
}

export default function Sender(props: SenderProps){
    return(
        <div className="p-4 border-slate-200 mb-4 bg-slate-100 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-bold">Sender Information</h3>
            <div className="pl-4 border-l-4 border-slate-400">
                <p><strong>Name:</strong> {props.Name}</p>
                <p><strong>Email:</strong> {props.Email}</p>
                <p><strong>Phone:</strong> {props.Phone}</p>
                <p><strong>Subject:</strong> {props.Subject}</p>
                <p><strong>Message:</strong> {props.Message}</p>
                {props.children}
            </div>
        </div>
    )
}