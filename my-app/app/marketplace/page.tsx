"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import APICard from '../components/apicard'; 
import Footer from '../components/footer';
import LoginNavbar from '../components/loginnavbar';

const apiData = [
    { 
      id: 1, 
      name: "Cardiovascular Health", 
      description: "This API offers real-time cardiovascular health monitoring and analysis, trained on extensive datasets including ECG readings, blood pressure values, and patient histories from global research institutions.", 
      creator: "HealthByte Labs",
      price: "Free" 
    },
    { 
      id: 2, 
      name: "Reproductive Health", 
      description: "Focused on fertility and reproductive health analytics, this API utilizes data from clinical studies on hormone levels, treatment outcomes, and lifestyle factors to provide insights for healthcare providers.", 
      creator: "HealthByte Labs",
      price: "$100/month" 
    },
    { 
      id: 3, 
      name: "Mental Health Tracking", 
      description: "Leveraging natural language processing and sentiment analysis, this API tracks mental health by analyzing patient journals and therapy session transcripts to offer predictive insights into mood disorders and treatment effectiveness.", 
      creator: "HealthByte Labs",
      price: "$100/month" 
    },
    { 
      id: 4, 
      name: "Diabetes Management", 
      description: "This API supports diabetes management through continuous glucose monitoring data analysis, providing personalized recommendations for insulin dosage and lifestyle adjustments based on machine learning models.", 
      creator: "HealthByte Labs",
      price: "$100/month" 
    },
    { 
      id: 5, 
      name: "Oncology Informatics", 
      description: "Using data from genomic sequencing and clinical trials, this API provides oncology informatics for targeted cancer therapies and prognostics, helping oncologists devise personalized treatment plans.", 
      creator: "HealthByte Labs",
      price: "$100/month" 
    }
  ];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAPIs, setFilteredAPIs] = useState(apiData);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = apiData.filter(api => api.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredAPIs(filtered);
  };

  return (
    <>
     <div className="flex flex-col min-h-screen bg-radial-gradient from-center to-edges sm:p-5 p-4">
      <LoginNavbar />
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold text-center my-6 text-gray-700">API Marketplace</h1>
        <p className="text-center text-gray-600 mb-8">Coming soon: A marketplace for APIs to support your healthcare applications. Check back for updates!</p>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search APIs..."
            value={searchTerm}
            onChange={handleSearchChange}
            className=" p-2 border rounded text-gray-800"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
          {filteredAPIs.map(api => (
            <APICard key={api.id} api={api} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
