// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow dark:bg-white-800">
            <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        {/* navigate to home page when the HealthByte is clicked */}
                        <Link href="/" className="text-xl font-bold text-yellow-600 dark:text-yellow md:text-2xl">HealthByte</Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="items-center md:flex">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link href="/" className="my-1 text-sm font-medium text-gray-900 dark:text-black-800 hover:text-purple-700 dark:hover:text-black-200 md:mx-4 md:my-0">Home</Link>
                        <Link href="/api-access" className="my-1 text-sm font-medium text-gray-900 dark:text-black-800 hover:text-purple-700 dark:hover:text-black-200 md:mx-4 md:my-0">API</Link>
                        <Link href="/test" className="my-1 text-sm font-medium text-gray-900 dark:text-black-800 hover:text-purple-700 dark:hover:text-black-200 md:mx-4 md:my-0">Test</Link>
                         <Link href="/contribute" className="my-1 text-sm font-medium text-gray-900 dark:text-black-800 hover:text-purple-700 dark:hover:text-black-200 md:mx-4 md:my-0">Contribute</Link> 
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
