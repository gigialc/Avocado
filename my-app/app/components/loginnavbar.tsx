import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // corrected the import for using next/router
import { UserCircleIcon } from '@heroicons/react/20/solid'; // Ensure this import path is correct

const LoginNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-transparent">
            <div className="container px-6 py-3 mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-yellow-600 dark:text-yellow md:text-3xl">avocado</Link>
                <div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:focus:text-gray-800" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4 a1 1 0 110-2z"></path>
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="hidden md:flex items-center">
                        <div className="relative">
                        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                            <UserCircleIcon className="h-8 w-8 text-gray-800 dark:text-gray-800" />
                        </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    <Link href="/api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Configuration</Link>
                                    <Link href="/marketplace" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Marketplace</Link>
                                    <Link href="/content-hub" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Generate Content</Link>
                                    <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="flex flex-col items-center w-full">
                        <Link href="/" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/api" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>AI Configuration</Link>
                        <Link href="/marketplace" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Marketplace</Link>
                        <Link href="/content-hub" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Generate Content</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LoginNavbar;

