import Link from 'next/link';
import {type ReactNode} from 'react';

type NavLinkProps= {
    href: string;
    children: ReactNode;
}

function NavLink(props: NavLinkProps){
    return(
        <li className='hover:bg-slate-600 py-2 px-2'>
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function NavBar(){
    return (
        <el-dropdown class='inline-block'>
            <button>
                <nav className='bg-slate-800 text-slate-50 shadow-xl p-4'>
                    <ul className='container mx-auto flex gap-4'>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/pageCV">CV</NavLink>
                        <NavLink href="/Contact">Contact</NavLink>
                    </ul>
                </nav>
            </button>
        </el-dropdown>
        
    )
}