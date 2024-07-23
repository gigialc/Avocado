
"use client"
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Analytics } from "@vercel/analytics/react";
import { Clipboard, Book, Zap, Activity, Smartphone, Scale, User } from 'lucide-react';

export default function Home() {
  const handleDemoClick = () => {
    window.location.href = "/sign-up";
  };

  return (
    <>
      <main className="flex flex-col min-h-screen bg-avo">
        <Navbar />
        
          {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 mt-16 sm:mt-20">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('avocado.png')",
              // filter: "brightness(0.7)"  // Darken the image slightly
            }}
          ></div>
          
          
          {/* <div className="absolute inset-0 bg-black opacity-50 z-10"></div> */}
          
          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-white">
                <span className="block text-primary">avocado ai</span>
              </h1>
              <p className="mt-3 font-bold max-w-md mx-auto text-black text-lg sm:text-xl md:text-2xl md:mt-5 md:max-w-3xl">
                Ensuring accuracy and guideline compliance in health writing.
              </p>
              <div className="mt-8 sm:mt-10 flex justify-center">
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800 font-bold transition duration-150 ease-in-out"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="py-16 mb-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-green-700 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to ensure health content accuracy
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                avocado ai provides cutting-edge tools to keep your health content up-to-date and accurate.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  { icon: Clipboard, title: "Latest Guidelines", description: "Stay updated with the most recent medical guidelines and best practices." },
                  { icon: Book, title: "Accuracy Check", description: "AI-powered verification ensures your content aligns with current medical knowledge." },
                  { icon: Zap, title: "Rapid Analysis", description: "Quick and efficient content analysis to save you time and resources." },
                  { icon: Activity, title: "Continuous Monitoring", description: "Ongoing checks to ensure your content remains accurate over time." },
                ].map((feature, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-green-700 font-semibold tracking-wide uppercase">The Challenge</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Navigating the complexities of health content
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  { icon: Clipboard, title: "Rapidly Evolving Guidelines", description: "Medical guidelines are constantly updated, making it challenging for content creators to stay current." },
                  { icon: Book, title: "Information Overload", description: "With vast amounts of health content online, ensuring accuracy across all platforms is increasingly difficult." },
                ].map((problem, index) => (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <problem.icon className="mx-auto h-12 w-12 text-purple-600" />
                      <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{problem.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trends Section */}
        <section className="py-16 mt-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-green-700 font-semibold tracking-wide uppercase">Emerging Trends</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The evolving landscape of health information
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {[
                  { icon: Smartphone, title: "Rise of Digital Health", description: "Increasing adoption of telemedicine and health apps drives demand for accurate digital health content." },
                  { icon: Scale, title: "Changing Regulations", description: (
                    <>
                      Regulatory bodies are adapting to the digital health era. 
                      <a href="#" className="text-green-600 hover:text-green-700 ml-1">
                        FDA is looking into monitoring digital health apps more closely
                      </a>.
                    </>
                  )},
                  { icon: User, title: "Personalized Health Information", description: "Growing trend towards tailored health content necessitates tools to verify accuracy across diverse topics." },
                ].map((trend, index) => (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <trend.icon className="mx-auto h-12 w-12 text-purple-700" />
                      <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{trend.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {trend.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-400">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to ensure your health content accuracy?</span>
              <span className="block">Start using avocado ai today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-green-100">
              Join the revolution in health content writing and analysis.
            </p>
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
            >
              Sign up for free
            </a>
          </div>
        </section>
        
      </main>
      <Footer />
      <Analytics />
    </>
  );
}