import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the state from true to false or false to true
    };

    return (
      <nav className=" mt-10">
        <div className="container px-6 py-3 mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" passHref>
            <span className="text-3xl font-bold text-yellow-600 dark:text-yellow md:text-3xl cursor-pointer">avocado</span>
          </Link>
          
          {/* Links and Buttons, always visible */}
          <div className="flex items-center">
            <Link href="/login" passHref>
              <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mx-2 cursor-pointer">Sign In</span>
            </Link>
            <Link href="/sign-up" passHref>
              <span className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mx-2 cursor-pointer">Sign Up</span>
            </Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;