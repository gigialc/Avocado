'use client'
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Analytics } from "@vercel/analytics/react"
import { useAuth } from '../authContext';


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
              </h1>
              <p className="text-2xl font-bold text-center text-gray-800 mb-6">
              AI copilot for compliant health ads
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 justify-center items-center">
              <button 
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 sm:px-4 rounded-lg shadow-lg focus:outline-none focus:shadow-outline w-full sm:w-auto transition duration-300 ease-in-out"
              onClick={handleDemoClick}>
              Book a Demo
            </button>
              </div>
            </div>
          </div>
          <br />

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 pt-10">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Compliant</span>
            </div>

            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Accurate</span>
            </div>

            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Up to Date</span>
            </div>

            {/* <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Personalization</span>
            </div> */}
          </div>

       
          {/* <div className="flex flex-col items-center justify-center w-full my-10 mt-40">
          <h2 className="text-4xl font-bold mb-8 text-black text-center">
            Quickstart with Avocado
          </h2>
          <p className="text-base mb-8 text-black text-center px-4">
            Follow these steps to get started with Avocado Health AI in minutes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 w-full">
            <div className="bg-white p-6 m-4 shadow-lg flex flex-col justify-between">
              <div className="bg-gray-200 p-4 bg-yellow-500">
                <h1 className="font-bold text-black text-center text-2xl">Step 1</h1>
              </div>
              <div className="mt-4 text-black">
                <p className='font-bold mb-5'>Sign up for Avocado Health</p>
                <p>Create an account on Avocado Health. If you forget your password, please contact us.


                </p>
              </div>
            </div>
            <div className="bg-white p-6 m-4 shadow-lg flex flex-col justify-between">
              <div className="bg-gray-200 p-4 bg-yellow-500">
                <h1 className="font-bold text-black text-center text-2xl">Step 2</h1>
              </div>
              <div className="mt-4 text-black">
                <p className='font-bold mb-5'>Customize your AI</p>
                <p>Access the dashboard to configure your preferences, key topics and sources.</p>
              </div>
            </div>
            <div className="bg-white p-6 m-4 shadow-lg flex flex-col justify-between">
              <div className="bg-gray-200 p-4 bg-yellow-500">
                <h1 className="font-bold text-black text-center text-2xl">Step 3</h1>
              </div>
              <div className="mt-4 text-black">
                <p className='font-bold mb-5'>Generate content</p>
                <p>Go to the generate content tab and ask questions, set output format and target user.</p>
              </div>
            </div> 
          </div>
        </div>*/}


          <div className="w-full max-w-5xl mt-40 pb-32">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-20">
              Revolutionizing health marketing with AI 🥑
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="py-5 px-4">
                <p className="text-5xl font-bold text-purple-700 py-3">70%↑</p>
                <p className="text-xl text-gray-600">Delivery speed</p>
              </div>
              <div className="py-5 px-4">
                <p className="text-5xl font-bold text-purple-700 py-3">50%↑</p>
                <p className="text-xl text-gray-600">Engagement</p>
              </div>
              <div className="py-5 px-4">
                <p className="text-5xl font-bold text-purple-700 py-3">100%</p>
                <p className="text-xl text-gray-600">Science-backed</p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center w-full mx-auto text-center pb-40">
          <h2 className="text-4xl font-bold mb-8 text-black">Avocado Health for Enterprise</h2>
          <p className="text-xl mb-8 text-black">Book a demo to see how Avocado Health can help you create medically accurate ads.</p>
          <button 
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline w-full md:w-auto transition duration-300 ease-in-out"
            onClick={handleDemoClick}>
            Book a Demo
          </button>
        </div>

      </main>
      <Footer />
      <Analytics />
    </>
  );
};
