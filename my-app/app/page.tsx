'use client'
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Analytics } from "@vercel/analytics/react"


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
                Low-hallucination customizable medical chatbots
              </p>
              <p className="text-2xl font-bold text-center text-gray-800 mb-6">   
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 justify-center items-center ">
                <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline w-full sm:w-auto" onClick={handleDemoClick}>
                  Book a Demo
                </button>
                {/* <button className="bg-yellow-100 hover:bg-yellow-100 text-black font-bold py-2 px-6 rounded-lg shadow-lg flex items-center justify-center w-full sm:w-auto focus:outline-none focus:shadow-outline" onClick={handleOpenClick}>
                  API Docs <svg className="ml-2 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </button> */}
              </div>
            </div>
        </div>
        <br></br>
      
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 pt-10">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="ml-4 text-gray-700 font-bold">Compliance</span>
          </div>

          <div className="flex items-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="ml-4 text-gray-700 font-bold">Accuracy</span>
          </div>

          <div className="flex items-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="ml-4 text-gray-700 font-bold">Medical References</span>
          </div>

          <div className="flex items-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="ml-4 text-gray-700 font-bold">Personalization</span>
          </div>
        </div>
        
      
      <div className="w-full max-w-5xl mt-52 pb-32">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-20">Revolutionizing health content writing with AI, boosting efficiency by up to 50% and speeding delivery by 20%.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="py-5 px-4">
              <p className="text-5xl font-bold text-purple-700 py-3">20%↑</p>
              <p className="text-xl text-gray-600">Pipeline velocity</p>
            </div>
            <div className="py-5 px-4">
              <p className="text-5xl font-bold text-purple-700 py-3">50%↓</p>
              <p className="text-xl text-gray-600">Content creation costs</p>
            </div>
            <div className="py-5 px-4">
              <p className="text-5xl font-bold text-purple-700 py-3">100%</p>
              <p className="text-xl text-gray-600">Science-backed</p>
            </div>
          </div>
        </div>
      </div>

       {/* New Section inspired by the uploaded image */}
       <div className="flex flex-col justify-center items-center w-full mx-auto text-center pb-40">
        {/* Content here will be fully centered, including on wider screens */}
        <h2 className="text-4xl font-bold mb-8 text-black">Effortless Setup in Minutes</h2>
        <p className="text-xl mb-8 text-black">Activate your API quickly and start enhancing your health apps today.</p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline w-full sm:w-auto" onClick={handleDemoClick}>
          Book a Demo
        </button>
      </div>

      </main>
      <Footer />
    <Analytics />   
  </>
  );
}
