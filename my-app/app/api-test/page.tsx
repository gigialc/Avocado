'use client'
import React, { useState } from 'react';

const TestPage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/get_response', {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
      })
      .then(response => response.json())
      .then(data => setResponse(data.response))
      .catch(error => console.error('Error:', error)); 
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a query"
      />
      <button type="submit">Submit</button>
      <p>Response: {response}</p>
    </form>
  );
};

export default TestPage;