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
      <main className="flex flex-col min-h-screen bg-radial-gradient from-center to-edges sm:p-5 p-4">
      <Navbar /> {/* Navbar placed right at the top inside main */}
      <div className="flex flex-col justify-center items-center w-full sm:p-20 pt-12">
         <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-5xl text-center space-y-8 sm:space-y-0 sm:space-x-10">
            <div className="w-full">
            <h1 className="text-5xl sm:text-7xl font-bold text-yellow-500 px-4 sm:px-10 py-2 sm:py-8">
                avocado
                <p className="text-black text-gray-700 text-xl"> 
              
              </p>
              </h1>
             
              <p className="text-gray-700 text-lg sm:text-2xl pb-4 sm:pb-10">
              avocado health is platform that enables healthcare companies to create personalized AI APIs and generate credible, written content at a scale.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 justify-center items-center ">
                <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline w-full sm:w-auto" onClick={handleDemoClick}>
                  Book a Demo
                </button>
                <button className="bg-yellow-100 hover:bg-yellow-100 text-black font-bold py-2 px-6 rounded-lg shadow-lg flex items-center justify-center w-full sm:w-auto focus:outline-none focus:shadow-outline" onClick={handleOpenClick}>
                  API Docs <svg className="ml-2 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

            </div>
        </div>
        <br></br>
      
        <div className="flex flex-wrap justify-center items-stretch mt-12 gap-4">
          <div className="bg-gray-100 shadow-2xl rounded-lg p-4 w-full sm:w-64 flex flex-col justify-between border border-purple-700">
              <h3 className="text-lg font-bold text-purple-700">Content Personalization</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                  Customize health content to meet individual user needs, enhancing engagement and retention.
              </p>
          </div>

          <div className="bg-gray-100 shadow-2xl rounded-lg p-4 w-full sm:w-64 flex flex-col justify-between border border-purple-700">
              <h3 className="text-lg font-bold text-purple-700">Accuracy</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                  We use AI to ensure that the health content is accurate and up-to-date by providing citations and references to the original source.
              </p>
          </div>

          <div className="bg-gray-100 shadow-2xl rounded-lg p-4 w-full sm:w-64 flex flex-col justify-between border border-purple-700">
              <h3 className="text-lg font-bold text-purple-700">Scalable Delivery</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                  Ensure the scalability of your health content delivery across multiple platforms and user profiles.
              </p>
          </div>
      </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
