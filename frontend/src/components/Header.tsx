import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-transparent px-8 py-4 shadow-lg w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          {/* Link back to home or top of the page */}
          <Link
            href="/"
            className="hover:text-gray-700 transition duration-300 ease-in-out"
          >
            CodeWeave
          </Link>
        </div>

        {/* Centered nav links */}
        <nav className="flex-grow">
          <ul className="flex justify-center items-center space-x-4 font-medium">
            {/* Anchor link to pricing section */}
            <li>
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              >
                Pricing
              </Link>
            </li>
            {/* Anchor link to FAQ section */}
            <li>
              <Link
                href="#faq"
                className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login button */}
        <div>
          <Link
            href="#login" // You might want this to be a real link or a method that opens a login modal
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
