// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-100 text-center">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} CodeWeave. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
