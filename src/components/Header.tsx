const Header = () => {
  return (
    <header className="bg-transparent py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text-xl font-bold text-gray-800">
          {/* Link back to home or top of the page */}
          <a
            href="/"
            className="hover:text-gray-700 transition duration-300 ease-in-out"
          >
            CodeWeave
          </a>
        </div>

        {/* Centered nav links */}
        <nav className="flex-grow">
          <ul className="flex justify-center items-center space-x-4 font-medium">
            {/* Anchor link to pricing section */}
            <li>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              >
                Pricing
              </a>
            </li>
            {/* Anchor link to FAQ section */}
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
            href="#login" // You might want this to be a real link or a method that opens a login modal
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
