"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


const links = [
    /*{
        name : "Home",
        path : "/",

    },*/
    {
        name : "Experiences",
        path : "/experiences",
        /* Services Under Here*/
    },
    {
        name : "Ventures",
        path : "/ventures",

    },
    {
        name : "Education",
        path : "/education",

    },
    {
        name : "Publications",
        path : "/publications",

    },
    {
        name : "Awards",
        path : "/awards_activities",

    },
    {
        name : "Projects",
        path : "/projects",

    },
    {
        name : "CV",
        path : "/cv",

    },
    /*{
        name : "Blogs",
        path : "/blogs",

    },*/

]

export const Nav = () => {
   const pathname = usePathname(); 
   console.log(pathname)
   return (
    <nav className="flex gap-5">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            );
        })}
        </nav>
    );
};

export default Nav