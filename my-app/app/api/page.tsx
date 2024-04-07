'use client'
import React from 'react';  // Assuming you're using React 17+ and need the import for JSX
import Link from 'next/link';
import Navbar from '../components/navbar';

// use client
export default function APIPage() {
  const [topic, setTopic] = React.useState<string>('');
  const [source, setSource] = React.useState<string>('');
  const [apiUrl, setApiUrl] = React.useState<string>('');
  const [outputFormat, setOutputFormat] = React.useState('bullet_points');
  const [output, setOutput] = React.useState('Output will be displayed here.');
  const [question, setQuestion] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const displayOutput = `Topic: ${topic}, Source: ${source}, API URL: ${apiUrl}, Output Format: ${outputFormat}`;
    setOutput(displayOutput);
    console.log({
      topic,
      source,
      apiUrl,
      outputFormat,
    });
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-4 ">
        <h1 className="text-xl font-bold text-yellow-500 text-center">API Information</h1>
        <p className="text-center mb-4 text-gray-900">Details about our API and how to use it.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">
              Choose a topic:
            </label>
            <select
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a Topic</option>
              <option value="fertility">Fertility</option>
              <option value="menopause">Menopause</option>
              <option value="menstruation">Menstruation</option>
              <option value="mental_health">Mental Health</option>
            </select>
          </div>

          <div>
            <label htmlFor="source" className="block text-gray-700 text-sm font-bold mb-2">
              Choose a data source:
            </label>
            <select
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a Source</option>
              <option value="pubmed">PubMed</option>
              <option value="cdc">CDC</option>
            </select>
          </div>

          <div>
            <label htmlFor="apiUrl" className="block text-gray-700 text-sm font-bold mb-2">
              Your API URL:
            </label>
            <input
              type="text"
              id="apiUrl"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="https://example.com/api"
            />
          </div>

          <fieldset className="text-center">
            <legend className="text-gray-700 text-sm font-bold mb-2">
              Choose an output format:
            </legend>
            <div className="flex justify-center">
              <label className="block text-gray-700 mr-4">
                <input
                  type="radio"
                  name="outputFormat"
                  value="bullet_points"
                  checked={outputFormat === 'bullet_points'}
                  onChange={() => setOutputFormat('bullet_points')}
                  className="mr-2 leading-tight"
                />
                Bullet Points
              </label>
              <label className="block text-gray-700">
                <input
                  type="radio"
                  name="outputFormat"
                  value="short_paragraph"
                  checked={outputFormat === 'short_paragraph'}
                  onChange={() => setOutputFormat('short_paragraph')}
                  className="mr-2 leading-tight"
                />
                Short Paragraph
              </label>
            </div>
          </fieldset>

          <button type="submit" className=" bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
            Submit API Settings
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
