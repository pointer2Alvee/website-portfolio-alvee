import Link from "next/link";
import { Button } from "./ui/button"

// components
import Nav from "./Nav"
import MobileNav from "./ui/MobileNav";

const Header = () => {
  return (
  <header className="px-9 py-3 xl:py-5 text-white">
    <div className="container mx-auto flex justify-between items-center">

        {/*logo/ Name/ Home */}
        <div className="flex-shrink-0">
            <Link href="/">
                <h1 className="text-2xl font-semibold">Sadman
                    <span className="text-accent ml-2">Alvee</span>
                </h1>
            </Link>
        </div>
        

        {/*Desktop Nav & hire me button*/}
        <div className="hidden xl:flex items-center ml-auto gap-7">
            <Nav />
            {/*<Link href ="/contact"> 
                <Button> Hire Me</Button>
            </Link> 
            */}
            
            
        </div>


        {/*Mobile Nav*/}
        <div className="xl:hidden ml-auto">
            <MobileNav />
        </div>

    </div>
  </header>
  );
};

export default Header