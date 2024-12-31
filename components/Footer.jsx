import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full xs:h-[10%] text-center border-t pt-4 bg-primary text-white">
      <div className="flex flex-row justify-center items-center mt-0 mb-4">
        <p className="text-gray-500 mr-4">
          &copy; Sadman Alvee 2024
        </p>
        <Link href="/news" className="text-accent hover:underline mx-2">
          News
        </Link>
        <Link href="/blogs" className="text-accent hover:underline mx-2">
          Blogs
        </Link>
        <Link href="/cv" className="text-accent hover:underline mx-2">
          Resume
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
