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

  return (
      <>
        <Navbar />
        <main className="flex flex-col min-h-screen justify-between items-center p-24 bg-black-800 dark:bg-black-800">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl text-center">
              {/* Text column */}
              <div className="flex flex-col items-center md:items-center space-y-8">
                <h2 className="text-4xl font-bold text-yellow-500">
                  High quality health content at scale
                </h2>
                <p className="text-base text-gray-800">
                  HealthByte is an AI platform to help healthcare companies create credible, written content at scale. The API-based platform summarizes information related to health from credible sources like PubMed in easy-to-read bites, providing personalized health content at scale.
                </p>
                <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline " onClick={handleDemoClick}>
                Book a Demo
              </button>
              </div>
            </div>
            {/* Additional descriptive sections can go here */}
          <div className="flex flex-wrap justify-center items-center mt-12 gap-8">

            <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center flex flex-col">
              <h3 className="text-lg font-bold text-purple-700">Content Personalization</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                Customize health content to meet individual user needs, enhancing engagement and retention.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center flex flex-col">
              <h3 className="text-lg font-bold text-purple-700">Accuracy</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                We use AI to ensure that the health content is accurate and up-to-date by providing citations and references to the original source.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center flex flex-col">
              <h3 className="text-lg font-bold text-purple-700">Scalable Delivery</h3>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                Ensure the scalability of your health content delivery across multiple platforms.
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
      <br />
      <Footer />
    </>
  );
}