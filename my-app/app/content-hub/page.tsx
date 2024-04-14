'use client'
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Contribute = () => {
  const [output, setOutput] = React.useState('Output will be displayed here.');
  const [question, setQuestion] = React.useState('');
  const [apiUrl, setApiUrl] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Example POST method implementation:
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Query: question})
    };
  
    fetch('https://your-api-url.com/', options)
      .then(response => response.json())
      .then(data => {
        setOutput(data.answer); // assuming the response has an 'answer' key
      })
      .catch(err => {
        console.error('An error occurred:', err);
        setOutput('An error occurred while fetching data from the API');
      });
    setQuestion(''); // Clear input after sending
  };

  return (
    <>
        <div className="flex flex-col min-h-screen bg-radial-gradient from-center to-edges sm:p-5 p-4">
      <Navbar />
      <div className="max-w-4xl rounded-lg pb-10 pt-7">
        <p className="text-gray-900">Enter API Endpoint</p>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            id="apiUrl"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            className="shadow border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://example.com/api"
          />
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Activate
          </button>
        </div>
      </div>

        <div className="flex flex-col items-center justify-center flex-grow bg-white w-full">
          <textarea 
            className="w-full flex-1 bg-transparent text-black resize-none"
            readOnly
            value={output}
            style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}
          ></textarea>
          </div>
          <div className="w-full px-4 py-2 border-t sticky bottom-0">

            <div className="flex justify-between items-center border-gray ">
              <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-grow p-2 border rounded-l text-gray-900 focus:outline-none resize-vertical min-h-[50px] max-h-[150px]"
                placeholder="Ask avocado health..."
              ></textarea>
              <button 
                onClick={handleSubmit} 
                className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contribute;