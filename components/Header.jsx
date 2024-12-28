import Link from "next/link";
import { Button } from "./ui/button"

// components
import Nav from "./Nav"

const Header = () => {
  return (
  <header className="py-6 xl:py-12 text-white">
    <div className="container mx-auto">

        {/*logo/ Name/ Home */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">Sadman 
        <span className="text-accent ml-2">ALVEE</span>
        </h1>
        </Link>

        {/*Desktop Nav*/}
        <div className="hidden xl:flex ">
            <Nav />
        </div>
     

    </div>
  </header>
  );
};

export default Header