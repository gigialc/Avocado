'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {

  const handleDemoClick = () => {
    window.location.href = 'https://calendly.com/galcarazb/30min'; // Specify the URL
  };

  const handleOpenClick = () => {
    window.location.href = "https://healthbyte.mintlify.app/quickstart"
  };

  return (
    <>
       <Navbar />
      <main className="flex flex-col min-h-screen justify-center items-center p-24 bg-radial-gradient from-center to-edges">
         <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl text-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-7xl font-bold text-yellow-500">
            avocado
          </h1>
          {/* <h3 className="text-2xl text-gray-700 font-bold">
            High quality health content at scale
          </h3> */}
          <p className="text-gray-700 text-2xl">
          avocado is an AI-driven platform that enables healthcare companies to generate credible, written content at scale and personalized to each user.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline" onClick={handleDemoClick}>
              Book a Demo
            </button>
            <button className="bg-gray-900 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg flex items-center focus:outline-none focus:shadow-outline" onClick={handleOpenClick}>
              API Docs <svg className="ml-2 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <br></br>
      
          {/* Additional descriptive sections can go here */}
          <div className="flex flex-wrap justify-center items-start mt-12 gap-10">
            <div className="bg-gray-100 shadow-2xl rounded-lg p-6 w-64 h-auto flex flex-col justify-between border border-purple-700">
                <h3 className="text-lg font-bold text-purple-700">Content Personalization</h3>
                <p className="text-sm text-gray-700 mt-2 flex-grow">
                    Customize health content to meet individual user needs, enhancing engagement and retention.
                </p>
            </div>

            <div className="bg-gray-100 shadow-2xl rounded-lg p-6 w-64 h-auto flex flex-col justify-between border border-purple-700">
                <h3 className="text-lg font-bold text-purple-700">Accuracy</h3>
                <p className="text-sm text-gray-700 mt-2 flex-grow">
                    We use AI to ensure that the health content is accurate and up-to-date by providing citations and references to the original source.
                </p>
            </div>

            <div className="bg-gray-100 shadow-2xl rounded-lg p-6 w-64 h-auto flex flex-col justify-between border border-purple-700">
                <h3 className="text-lg font-bold text-purple-700">Scalable Delivery</h3>
                <p className="text-sm text-gray-700 mt-2 flex-grow">
                    Ensure the scalability of your health content delivery across multiple platforms and user profiles. 
                </p>
            </div>
        </div>


        </main>
        {/* <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-500 text-center mt-20 pb-10">
          Dynamic Health Content
        </h2> */}
      {/* Image at the bottom before Footer */}
      {/* <div className="flex flex-col items-center w-full px-24 py-2">
        <Image
          src="/fertility1.png" // Adjust the path to your image
          alt="Descriptive Alt Text"
          width={1000} // Adjust the size as needed
          height={500}
          objectFit="cover"
        />
      </div> */}
      <Footer />
    </>
  );
}