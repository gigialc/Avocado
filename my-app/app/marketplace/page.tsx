"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import APICard from '../components/apicard'; 
import Footer from '../components/footer';

const apiData = [
  { id: 1, name: "API One", description: "This is API One description.", price: "Free" },
  { id: 2, name: "API Two", description: "This is API Two description.", price: "$10" },
  // Add more APIs as needed
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAPIs, setFilteredAPIs] = useState(apiData);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = apiData.filter(api => api.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredAPIs(filtered);
  };

  return (
    <>
     <div className="flex flex-col min-h-screen bg-radial-gradient from-center to-edges sm:p-5 p-4">
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold text-center my-6 text-gray-700">API Marketplace</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search APIs..."
            value={searchTerm}
            onChange={handleSearchChange}
            className=" p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
