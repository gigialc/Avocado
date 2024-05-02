import React, { useState } from 'react';
import Link from 'next/link';
import navigate from 'next/router';
import { UserCircleIcon } from '@heroicons/react/20/solid';

const LoginNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state to manage login status

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate.push('/');
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
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"></path>
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
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    {/* <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link> */}
                                    <Link href="/api" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 mx-4">API Configuration</Link>
                                    <Link href="/marketplace" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 mx-4">Marketplace</Link>
                                    <Link href="/content-hub" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 mx-4">Test API</Link> 
                                    <Link href="/" className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="flex flex-col items-center w-full">
                        <Link href="/" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/api" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>API Configuration</Link>
                        <Link href="/marketplace" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Marketplace</Link>
                        <Link href="/content-hub" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Try</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LoginNavbar;
