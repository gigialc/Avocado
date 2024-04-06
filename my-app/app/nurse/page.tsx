import React from 'react';
import Link from 'next/link';

const Nurse = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center mb-6">Nurse Assistance Portal</h1>
            <p className="text-lg text-center mb-4">Connecting you with professional care.</p>

            <div className="flex justify-center">
                <div className="max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-2">How can we help you today?</h2>
                    <p>If you have any questions or need assistance, please fill out the form below, and a nurse will get back to you shortly.</p>
                    
                    <form className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="patientName" name="patientName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John Doe" required />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="question" className="block text-sm font-medium text-gray-700">Your Question or Concern</label>
                            <textarea id="question" name="question" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Please enter your question or concern here..." required></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Nurse;
