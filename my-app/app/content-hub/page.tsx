'use client'
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Contribute = () => {
  const [topic, setTopic] = React.useState<string>('');
  const [source, setSource] = React.useState<string>('');
  const [apiUrl, setApiUrl] = React.useState<string>('');
  const [outputFormat, setOutputFormat] = React.useState('bullet_points');
  const [output, setOutput] = React.useState('Output will be displayed here.');
  const [question, setQuestion] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Query: question})
    };
  
    fetch('https://whispering-beyond-93204-750417d33585.herokuapp.com/', options)
      .then(response => response.json())
      .then(response => {
        console.log('response', response)
        setOutput(response); // assuming the response is a string
      })
      .catch(err => {
        console.error(err);
        setOutput('An error occurred while fetching data from the API');
      });
  };

  const handleBack = () => {
    // navigate to the API Access page
    window.location.href = '/api-access';
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full">
      <div className="flex justify-end w-full p-4">
        <button onClick={handleBack} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          API
        </button>
      </div>
      <div className="w-full max-w-4xl p-4 flex flex-col bg-white">
        <div className="flex justify-end space-x-2 mb-2">
          <button className=" text-white font-bold p-2 rounded-full focus:outline-none focus:shadow-outline">
            👍
          </button>
          <button className=" text-white font-bold p-2 rounded-full focus:outline-none focus:shadow-outline">
            👎
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4 border rounded bg-gray-50">
        <textarea className="w-full h-full bg-transparent text-black" readOnly value={output}></textarea>
        </div>
        <div className="mt-4 flex text-gray-600">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-grow p-2 border rounded-l focus:outline-none focus:shadow-outline"
            placeholder="Ask HealthByte..."
          />
          <button onClick={handleSubmit} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contribute;