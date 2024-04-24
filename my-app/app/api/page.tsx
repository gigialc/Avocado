'use client'  // Assuming you're using React 17+ and need the import for JSX
import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// use client
    export default function APIPage() {
      const [topic, setTopic] = useState('');
      const [inputText, setInputText] = useState('');
      const [file, setFile] = useState<File | null>(null);
      const [links, setLinks] = useState<string[]>([]); // Array of strings for URLs
      const [newLink, setNewLink] = useState(''); // Temporary state for the input field for new URLs
      const [activeTab, setActiveTab] = useState('text');
      const [title, setTitle] = useState('');
      const [apiUrl, setApiUrl] = useState('');
      const [apiCode, setApiCode] = useState('');
      const [apiResponse, setApiResponse] = useState('');
    
      const healthTopics = [
        'Menopause', 'Menstruation', 'Mental Health', 
        'Cardiovascular Health', 'Fertility', 'Pediatrics', 'Geriatrics', 'Nutrition'
      ];

      const checkApiCode = () => {
        if (apiCode === 'fertilitae001') {
          setApiUrl('https://whispering-beyond-93204-750417d33585.herokuapp.com/add_fertilitae');
        }
      };
    
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          setFile(event.target.files[0]);
        }
      };
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Topic: ${topic}, Text: ${inputText}, File: ${file?.name}, Links: ${links}`);
        checkApiCode();
        // Add your logic for API key generation or other actions here
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({text: inputText, title: title})
        };

        try {
          console.log('api', apiUrl)
          const response = await fetch(apiUrl, options);
          const data = await response.json();
          console.log('dataa:', data);
          if (data === true) {
            setApiResponse('https://whispering-beyond-93204-750417d33585.herokuapp.com/fertilitae');
          }
        } catch (err) {
          console.error(err);
        }


      };
    
      const handleAddLink = () => {
        if (newLink && !links.includes(newLink)) {
          setLinks([...links, newLink]);
          setNewLink('');
        }
      };
    
      const handleRemoveLink = (index: number) => {
        setLinks(links.filter((_, i) => i !== index));
      };
    
      return (
        <>
        <div className=" bg-radial-gradient from-center to-edges sm:p-5 p-4 ">
          <Navbar/>
          <div className="flex flex-col items-center min-h-screen pt-20 "> 
            <div className="w-full max-w-4xl rounded-lg">
              <h1 className="text-xl font-bold text-yellow-600 text-left">API Configuration</h1>
              <p className="text-left mb-4 pb-2 text-gray-900">Configure your API. Add the articles and health information that you want your AI to generate information from.</p>
              {/* add a field for entering your existing api endpoint */}
              <div className="flex items-center space-x-4 mb-4">
                <input
                  type="text"
                  id="apiCode"
                  value={apiCode}
                  onChange={(e) => setApiCode(e.target.value)}
                  className="shadow border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="unique-code"
                />
                <button
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                  Activate
                </button>
              </div>
              
              {/* <div className="mb-4">
                <button onClick={() => setActiveTab('text')} className={`px-4 py-2 ${activeTab === 'text' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-tl-lg`}>Text Input</button>
                <button onClick={() => setActiveTab('file')} className={`px-4 py-2 ${activeTab === 'file' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'}`}>File Upload</button>
                <button onClick={() => setActiveTab('link')} className={`px-4 py-2 ${activeTab === 'link' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-tr-lg`}>URLs</button>
              </div> */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* <div>
                  <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">Choose a health topic:</label>
                  <select
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a Topic</option>
                    {healthTopics.map((topic, index) => (
                      <option key={index} value={topic.toLowerCase().replace(/\s+/g, '_')}>{topic}</option>
                    ))}
                  </select>
                </div> */}

                <div>
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Enter title:</label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your title here"
                />
              </div>

                {activeTab === 'text' && (
                  <div>
                    <label htmlFor="inputText" className="block text-gray-700 text-sm font-bold mb-2">Enter text:</label>
                    <textarea
                      id="inputText"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Paste your text here"
                    />
                  </div>
                )}
                {activeTab === 'file' && (
                  <div>
                    <label htmlFor="fileInput" className="block text-gray-700 text-sm font-bold mb-2">Upload file:</label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                    />
                  </div>
                )}
                {activeTab === 'link' && (
                  <div>
                    <label htmlFor="newLink" className="block text-gray-700 text-sm font-bold mb-2">Add link:</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="newLink"
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="https://example.com"
                      />
                      <button type="button" onClick={handleAddLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                    </div>
                    {links.map((link, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-400 rounded mt-2">
                        <span>{link}</span>
                        <button onClick={() => handleRemoveLink(index)} className="text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    ))}
                  </div>
                )}
                <button type="submit" className="bg-yellow-600 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Add to API
                </button>
              </form>
              {apiResponse && (
                <div className="text-center mt-4">
                  <p className="text-blue-500">It has been added! - API URL:</p>
                  <a href={apiResponse} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{apiResponse}</a>
                </div>
              )}

            </div>
          </div>
        
        </div>
        <Footer/>
          {/* <Link href="/api-marketplace" className="text-blue-500 hover:underline block text-center my-4">Go to API Marketplace</Link> */}
        </>
      );
    }
  