import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
            <div className="max-w-screen-xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            avocado
                        </Link>
                    </div>
                     <div className="space-x-4 flex">
                        {/* <Link href="https://healthbyte.mintlify.app/api-reference/introduction" className="hover:underline">
                            API Docs
                        </Link> */}
                        {/* <Link href="/contribute" className="hover:underline">
                            Contribute
                        </Link> */}
                        <Link href="/api" className="hover:underline">
                            AI Config
                        </Link>

                         <Link href="/marketplace" className="hover:underline">
                         Marketplace 
                         </Link>   
                         <Link href="/content-hub" className="hover:underline">
                         Generate Content
                         </Link>   
                    </div> 
                    <div>
                        <a href="mailto:jricramc@mit.edu, galcaraz@bu.edu" className="hover:underline">
                            Contact Us       
                        </a>
                    </div>
                </div>
                <div className="text-center pt-4">
                    © {new Date().getFullYear()} avocado, All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
