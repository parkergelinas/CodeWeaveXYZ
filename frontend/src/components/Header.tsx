import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } px-8 py-4 shadow-lg z-10 transition duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <span className="hover:text-gray-700 cursor-pointer">
              CodeWeave
            </span>
          </Link>
        </div>

        <nav className="flex-grow">
          <ul className="flex justify-center items-center space-x-4 font-medium">
            <li>
              <Link href="/#pricing">
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#faq">
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  FAQ
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          {!session ? (
            <button
              onClick={() => signIn()}
              className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
