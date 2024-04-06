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
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white-100 dark:bg-black-800">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
            {/* Text column */}
            <div className="flex flex-col items-center md:items-start space-y-8">
              <h2 className="text-4xl font-bold text-purple-700 dark:text-yellow-500">
                High quality health content at scale
              </h2>
              <p className="text-base text-gray-900 dark:text-white-800">
                HealthByte is an AI platform to help healthcare companies create credible, written content at scale. The API-based platform summarizes information related to health from credible sources like PubMed in easy-to-read bites, providing personalized health content at scale.
              </p>
              <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline " onClick={handleDemoClick}>
              Book a Demo
            </button>
            </div>
            
            {/* Image column */}
            <div className="flex justify-center md:justify-end md:max-w-xl">
              <Image
                src="/fertility1.png" // Adjust the path to your image
                alt="Descriptive Alt Text"
                width={1000} // Adjust the size as needed
                height={500}
                objectFit="cover"
              />
            </div>
          </div>
           {/* Service Information Boxes */}
           {/* add space at the top */}
           <br />
            <br />
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
        <h2 className="text-4xl font-bold text-purple-700 dark:text-yellow-500 text-center mt-20 pb-10">
          Dynamic Health Content
        </h2>
      {/* Additional Images before Footer */}
      <div className="flex flex-col items-center w-full px-24 py-2">
        <div className="flex flex-row justify-between items-center w-full max-w-6xl">
          <div className="flex flex-col items-center">
            <Image
              src="/fertility3.png" // Specify the first image path here
              alt="First Image Description"
              width={500}
              height={300}
              objectFit="cover"
            />
            <p className="text-center text-sm text-gray-800 mt-2">
              Engage your users with quick quizzes to test their knowledge. Collect user knowledge and feedback to improve your content.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/fetility2.png" // Specify the second image path here
              alt="Second Image Description"
              width={500}
              height={300}
              objectFit="cover"
            />
            <p className="text-center text-sm text-gray-800 mt-2">
              Use our API to generate personalized health content for your users. Provide them with the latest information on health topics.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
