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
      <main className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
        <Navbar />
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text text-yellow-600">avocado AI</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:text-3xl text-gray-600 md:mt-5 md:max-w-3xl">
                Ensuring accuracy and guideline compliance in health writing.
              </p>
              <div className="mt-10 sm:mt-12">
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                A better way to ensure health content accuracy
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                avocado ai provides cutting-edge tools to keep your health content up-to-date and accurate.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                {[
                  { icon: Clipboard, title: "Guideline Tracking", description: "AI-powered system that continuously monitors and updates to the latest health guidelines and recommendations." },
                  { icon: Book, title: "Content Analysis", description: "Rapidly scans and analyzes health articles for outdated or inconsistent information." },
                  { icon: Zap, title: "Smart Recommendations", description: "Suggests evidence-based updates to health content, complete with references for medical review." },
                  { icon: Activity, title: "Automated Updating", description: "Once approved, automatically updates multiple articles across the web to ensure consistent, accurate health information." },
                ].map((feature, index) => (
                  <div key={index} className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium text-gray-900">{feature.title}</p>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">The Challenge</h2>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Navigating the complexities of health content
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  { icon: Clipboard, title: "Rapidly Evolving Guidelines", description: "Medical recommendations change frequently, making it challenging for content creators to stay current. For example, advice on breast self-examinations has changed significantly in recent years." },
                  { icon: Book, title: "Inconsistent Online Information", description: "With vast amounts of health content online, ensuring all information is up-to-date and consistent across platforms is increasingly difficult." },
                ].map((problem, index) => (
                  <div key={index} className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div className="text-center">
                      <problem.icon className="mx-auto h-12 w-12 text-purple-600" />
                      <h3 className="mt-4 text-xl font-semibold text-gray-900">{problem.title}</h3>
                      <p className="mt-4 text-base text-gray-500">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trends Section
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Emerging Trends</h2>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                The evolving landscape of health information
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {[
                  { icon: Smartphone, title: "Evidence-Based Health Content", description: "Growing emphasis on providing health information that aligns with the latest scientific evidence and guidelines." },
                  { icon: Scale, title: "AI in Healthcare", description: "Increasing use of artificial intelligence to process and analyze large volumes of medical information and guidelines." },
                  { icon: User, title: "Personalized Health Information", description: "Growing trend towards tailored health content necessitates tools to verify accuracy across diverse topics and update recommendations based on individual risk factors." },
                ].map((trend, index) => (
                  <div key={index} className="relative bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div className="text-center">
                      <trend.icon className="mx-auto h-12 w-12 text-green-600" />
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">{trend.title}</h3>
                      <p className="mt-4 text-base text-gray-500">
                        {trend.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-gray-200">
          <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">Ready to ensure your health content stays current and accurate?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-black">
              Join the revolution in health content writing and analysis.
            </p>
            <a
              href="https://calendly.com/galcarazb/30min"
              className="mt-10 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
            >
              Book a demo
            </a>
          </div>
        </section>
        
      </main>

      <br />
      <br />
      
      <Footer />
      <Analytics />
    </>
  );
}