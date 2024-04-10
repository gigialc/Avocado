// src/components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the state from true to false or false to true
    };

    return (
        <nav className="bg-white shadow dark:bg-white">
            <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-xl font-bold text-yellow-600 dark:text-yellow md:text-2xl"> HealthByte </Link>
                    </div>
                    <div className="flex justify-end w-full">

                    {/* Desktop menu */}
                    
                     <div className="hidden md:flex">
                        {/* <Link href="/" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 md:mx-4 md:my-0">Home</Link> */}
                        <Link href="https://healthbyte.mintlify.app/api-reference/introduction" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 md:mx-4 md:my-0">API Docs</Link>
                        <Link href="/content-hub" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 md:mx-4 md:my-0">Try</Link>
                        {/* <Link href="/contribute" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 md:mx-4 md:my-0">Contribute</Link> */}
                    </div>
                  

                        {/* Mobile menu button */}  
                 <div className="flex md:hidden">
                        
                        <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:focus:text-gray-800" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"></path>
                                )}
                            </svg>
                        </button> 
                    </div> 
                </div>

                 {isOpen && (
                    <div className="flex flex-col items-center md:flex-row md:mx-6">
                        <Link href="/" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 md:mx-4 md:my-0" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="https://healthbyte.mintlify.app/api-reference/introduction" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 md:mx-4 md:my-0" onClick={() => setIsOpen(false)}>API Docs</Link>
                        <Link href="/content-hub" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 md:mx-4 md:my-0" onClick={() => setIsOpen(false)}>Content Hub</Link>
                        {/* <Link href="/contribute" className="my-1 text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 md:mx-4 md:my-0" onClick={() => setIsOpen(false)}>Contribute</Link> */}
                    </div>
                
                )} 
            </div>
            </div>
        </nav>
    );
};

export default Navbar;