import { type ReactNode } from "react";

type CvEntryProps = {
    title: string;
    employer: string;
    children: ReactNode;
};

export default function CvEntry(props: CvEntryProps) {
    return (
        <div className="p-4 border-slate-200 mb-4 bg-slate-100 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <h4 className="text-lg italic mb-2">{props.employer}</h4>
            <div className="pl-4 border-l-4 border-slate-400">
                {props.children}
            </div>
        </div>
    );
}