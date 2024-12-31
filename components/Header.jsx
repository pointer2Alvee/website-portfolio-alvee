import Link from "next/link";
import { Button } from "./ui/button"

// components
import Nav from "./Nav"

const Header = () => {
  return (
  <header className="px-7 py-3 xl:py-7 text-white">
    <div className="mx-auto flex justify-between items-center">

        {/*logo/ Name/ Home */}
        <div className="flex-shrink-0">
            <Link href="/">
                <h1 className="text-4xl font-semibold">Sadman
                    <span className="text-accent ml-2">ALVEE</span>
                </h1>
            </Link>
        </div>
        

        {/*Desktop Nav & hire me button*/}
        <div className="hidden xl:flex items-center ml-auto gap-8">
            <Nav />
            {/*<Link href ="/contact"> 
                <Button> Hire Me</Button>
            </Link> 
            */}
            
            
        </div>


        {/*Mobile Nav*/}
        <div className="xl:hidden ml-auto">mobile nav</div>

    </div>
  </header>
  );
};

export default Header