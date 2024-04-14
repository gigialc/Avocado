import React from 'react';

interface API {
  name: string;
  description: string;
 creator: string;
  price: string;
}

export default function APICard({ api }: {api: API}) {
  return (
    <div className="border rounded shadow-lg p-4 bg-white">
    <h2 className="font-bold text-lg text-black mb-2">{api.name}</h2>
    <p className="text-black mb-2">{api.description}</p>
    <p className="text-sm font-bold text-black mb-2">By @{api.creator}</p>
    <p className="text-sm font-bold text-black mb-3">{api.price}</p>
    <button className="mt-4 bg-purple-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Use API
    </button>
    </div>
  );
}


