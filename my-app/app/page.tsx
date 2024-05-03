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
               A safety layer for generating AI health content
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 justify-center items-center">
                <button 
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:shadow-outline w-full sm:w-auto transition duration-300 ease-in-out"
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
              <span className="ml-4 text-gray-700 font-bold">Compliance</span>
            </div>

            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Accuracy</span>
            </div>

            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Medical References</span>
            </div>

            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="ml-4 text-gray-700 font-bold">Personalization</span>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center w-full my-10 mt-40">
          <h2 className="text-4xl font-bold mb-8 text-black text-center">
            GPT-4 vs. Avocado
          </h2>
          <p className="text-base mb-8 text-black text-center px-4">
            GPT-4 is a powerful AI language model, but it is not designed for healthcare. Avocado Health is a customizable AI chatbot that is specifically trained for medical conversations.
          </p>
          <div className="grid grid-cols-2 gap-4 px-6 w-full">
            <div className="bg-white p-6 m-4 shadow-lg flex flex-col justify-between">
              <div className="bg-gray-200 p-4 bg-yellow-500">
                <h1 className="font-bold text-black text-center text-2xl">GPT-4</h1>
              </div>
              <div className="mt-4 text-black">
              <ul className="">
                <li className='font-bold mb-5'>Can I use my ABRILADA pen straight from the refrigerator?
                </li>
                 <li>
                 Yes, you can use your ABRILADA pen straight from the refrigerator, but it is generally recommended to allow the pen to warm to room temperature before injection. This can make the injection process more comfortable and reduce discomfort at the injection site.
               </li>
              </ul>
            </div>
            </div>
            <div className="bg-white p-6 m-4 shadow-lg flex flex-col justify-between">
              <div className="bg-gray-200 p-4 bg-yellow-500">
                <h1 className="font-bold text-black text-center text-2xl">Avocado 🥑</h1>
              </div>
              <div className="mt-4 text-black">
              <ul className="">
                <li className='font-bold mb-5'>Can I use my ABRILADA pen straight from the refrigerator?
                </li>
                 <li className='mb-4'>
                 Yes, however you may find that using the prefilled syringe at room temperature reduces stinging or discomfort. If you allow your prefilled syringe to reach room temperature before use, you must keep it away from direct sunlight as this can damage your medicine.
                 </li>
                 <li>Click
                  <a href="https://www.pfizermedicalinformation.com/patient/abrilada" className="text-blue-500 hover:text-blue-700" target="_blank"> here</a> to find the full guide.
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>


          <div className="w-full max-w-5xl mt-40 pb-32">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-20">
              Revolutionizing patient education with AI 🥑
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
          <h2 className="text-4xl font-bold mb-8 text-black">Effortless Setup in Minutes</h2>
          <p className="text-xl mb-8 text-black">Activate your API quickly and start enhancing your health apps today.</p>
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
