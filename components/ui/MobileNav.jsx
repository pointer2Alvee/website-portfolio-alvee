"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
import { inertia } from 'framer-motion';


const links = [
    {
        name: 'Experiences',
        path: '/experiences'
    },
    {
        name: 'Ventures',
        path: '/ventures'
    },
    {
        name: 'Education',
        path: '/education'
    },
    /*{
        name: 'Publications',
        path: '/publications'
    }*/,
    {
        name: 'Awards',
        path: '/awards_activities'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'CV',
        path: '/cv'
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className= "flex justify-corner items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/*logo */}
            <div className="mt-32 mb-25 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Sadman
                        <span className="text-accent ml-2">Alvee</span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return <Link 
                    href={link.path} 
                    key={index}
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent" } 
                    text-xl capitalize hover:text-accent transitional-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
}

export default MobileNav