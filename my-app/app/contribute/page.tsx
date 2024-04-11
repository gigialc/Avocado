'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useEffect } from 'react';

const QuestionPage = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [responses, setResponses] = useState<string[]>([]);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const fetchQuestion = async () => {
            const { data } = await axios.get('http://api.yoursite.com/question');
            setQuestion(data.question);
        };
        fetchQuestion();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponse(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (response.trim() !== '') {
            axios.post('http://api.yoursite.com/answer', { response })
                .then(() => {
                    setResponses(prev => [...prev, response]);
                    setPoints(prev => prev + 1); // Each response earns the user one point
                    setResponse(''); // Clear the input field after submitting
                })
                .catch(error => console.error('Error posting the answer:', error));
        }
    };

    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-xl font-bold mb-4 text-gray-800">Question of the day</h1>
                <p className="mb-4 text-gray-800">{question}</p>
                <form onSubmit={handleSubmit} className="mb-10">
                    <input
                        type="text"
                        value={response}
                        onChange={handleInputChange}
                        placeholder="Type your response..."
                        className="border p-2 rounded w-96 mr-2 text-gray-700"  // using w-96 as an example of a specific width
                    />
                 <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray font-bold py-2 px-4 rounded">
                        Submit
                 </button>
                </form>
                <div>
                    <h2 className="text-lg font-bold text-gray-800">Your Responses</h2>
                    <ul>
                        {responses.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                    <h2 className="text-lg text-gray-800">Total Points: {points}</h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default QuestionPage;
