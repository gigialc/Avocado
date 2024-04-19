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
                avocado health
                <p className="text-black text-gray-700 text-xl"> 
              
              </p>
              </h1>
             
              <p className="text-2xl font-bold text-center text-gray-800 mb-6">
                ai copilot for accurate health content generation
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
          <div className="bg-white shadow-xl rounded-lg p-4 w-full sm:w-64 flex flex-col justify-between ">
              <h3 className="text-lg font-bold text-purple-700 text-center">Accuracy</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow text-center">
                Model output is based on well-established medical research and data.
              </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-4 w-full sm:w-64 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-purple-700 text-center">Transparency</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow text-center">
                  Every output provides citations and references to the original data sources.
              </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-4 w-full sm:w-64 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-purple-700 text-center">Scalability</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow text-center">
                  Power any health app with our API accross multiple platforms.
              </p>
          </div>
      </div>
      <div className="w-full max-w-5xl mt-52 pb-32">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-20">avocado health 3x user engagement and saves 100k/year in content writing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="py-5 px-4">
              <p className="text-5xl font-bold text-purple-700 py-3">60%↑</p>
              <p className="text-xl text-gray-600">User retantion</p>
            </div>
            <div className="py-5 px-4">
              <p className="text-5xl font-bold text-purple-700 py-3">$100K↓</p>
              <p className="text-xl text-gray-600">Cost of content writters</p>
            </div>
            <div className="py-5 px-4">
              <p className="text-5xl font-bold text-purple-700 py-3">100%</p>
              <p className="text-xl text-gray-600">Hallucination Free</p>
            </div>
          </div>
        </div>
      </div>

       {/* New Section inspired by the uploaded image */}
       <div className="w-full max-w-5xl mx-auto my-5 p-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get Set Up In No Time</h2>
          <p className="text-xl text-gray-700 mb-8">Get your unique API and start using  it in your health application.</p>
          
          {/* Optional: Add an image or a video here to visually represent the process */}
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Quick Setup</h3>
              <p className="text-gray-600">With our step-by-step guide, you will be up and running in less than 30 minutes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">2 week trial</h3>
              <p className="text-gray-600">If you do not like our API after your 2 week trial we guarantee a full refund.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Our team is here to help anytime, with live chat and extensive resources.</p>
            </div>
          </div>
          
          <button className="mt-10 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-lg" onClick={handleDemoClick}>
            Book a Demo
          </button>
        </div>

      </main>
      <Footer />
    </>
  );
}
