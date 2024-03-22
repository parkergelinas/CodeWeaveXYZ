// components/Header.tsx

const Header = () => {
  return (
    <header className="bg-transparent py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text-xl font-bold text-gray-800">
          <a href="/" className="hover:text-gray-700">
            CodeWeave
          </a>
        </div>

        {/* Centered nav links */}
        <nav className="hidden md:flex flex-grow justify-center items-center">
          <ul className="flex space-x-4 font-medium">
            <li>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Login button */}
        <div>
          <a
            href="#login"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition duration-300 ease-in-out"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
