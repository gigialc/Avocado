import React, { useState } from 'react';
import Link from 'next/link';
import navigate from 'next/router';

const LoginNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state to manage login status

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        // Example function to simulate login
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Example function to simulate logout
        setIsLoggedIn(false);
        //link to home page
        navigate.push('/');
    };

    return (
        <nav className="bg-transparent">
            <div className="container px-6 py-3 mx-auto flex justify-between items-center">
                <Link href="/profile" className="text-xl font-bold text-yellow-600 dark:text-yellow md:text-3xl">avocado</Link>
                <div>
                    {/* Mobile Menu Button, aligned right */}
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

                    {/* Desktop Links and Buttons, aligned to the right */}
                    <div className="hidden md:flex items-center">
                        <Link href="/api" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 mx-4">API Configuration</Link>
                        <Link href="/marketplace" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 mx-4">Marketplace</Link>
                        <Link href="/content-hub" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-purple-800 mx-4">Test API</Link> 
                            
                        <button onClick={handleLogout} className=" text-black font-bold py-2 px-4 rounded my-2">Logout</button>
                    
                    </div>
                </div>
                {/* Mobile Menu that appears when isOpen is true */}
                {isOpen && (
                    <div className="flex flex-col items-center w-full">
                        <Link href="/" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/api" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>API Configuration</Link>
                        <Link href="/marketplace" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Marketplace</Link>
                        <Link href="/content-hub" className="text-sm font-medium text-gray-900 dark:text-gray-800 hover:text-purple-700 dark:hover:text-gray-200 my-2" onClick={() => setIsOpen(false)}>Try</Link>
                            
                        <Link href="/" className=" text-black font-bold py-2 px-4 rounded my-2">Logout</Link>
                        
                        
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LoginNavbar;
