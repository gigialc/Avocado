import React from 'react';

export default function APICard({ api }) {
  return (
    <div className="border rounded shadow-lg p-4 bg-white">
      <h2 className="font-bold text-lg text-black ">{api.name}</h2>
      <p  className=" text-black">{api.description}</p>
      <p className="text-sm font-bold  text-black">{api.price}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
}

