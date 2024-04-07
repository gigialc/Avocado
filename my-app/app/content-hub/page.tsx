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
    console.log('ques', question)
    event.preventDefault();
    // const displayOutput = `Topic: ${topic}, Source: ${source}, API URL: ${apiUrl}, Output Format: ${outputFormat}`;
    if (question === 'Can PCOS cause infertility') {
      console.log('ere')
      const displayOutput = `
    PCOS (Polycystic Ovary Syndrome) is a condition known to potentially cause infertility.

    - The condition is characterized by hormonal imbalances that can affect ovulation and menstrual cycles.
  - Role of Angiotensin-Converting Enzymes (ACEs):

    - ACEs are implicated in various bodily functions, including blood pressure regulation and fluid balance.
    
    - Research suggests ACEs also play a significant role in fertility, particularly in females with PCOS.

  Use of ACE Inhibitors (ACEIs):
    - ACEIs, drugs that inhibit the activity of angiotensin-converting enzymes, are used to manage insulin resistance.
    - For females with PCOS-related insulin resistance, ACEIs have become first-line treatments to improve fertility outcomes.
  Reference Papers:
    - "Angiotensin-Converting Enzymes Play a Dominant Role in Fertility" – discusses the use of ACEIs in managing PCOS-related insulin resistance in infertile females.
  `;
    setTimeout(() => {
      setOutput(displayOutput);
    }, 5000);
    } else if (question === 'Question 2') {
      const displayOutput = 'Output for Question 2';
      setOutput(displayOutput);

    } else if (question === 'Tailor the response for a 45 year old woman with limited healthcare knowledge') {
      const displayOutput = `
  - PCOS and Fertility: Polycystic Ovary Syndrome (PCOS) is a health condition that can interfere with a woman’s ability to have children due to hormonal imbalances affecting ovulation and menstrual cycles.
  - Role of ACEs: Angiotensin-Converting Enzymes (ACEs) help regulate blood pressure and fluid levels in the body. They are also important for fertility, especially in women with PCOS.
  - Treatment with ACE Inhibitors:** ACE inhibitors are medications used to manage insulin resistance, a common issue in women with PCOS. These drugs are now the preferred treatment to help improve fertility in these women.
  
  Reference Papers:
    - "Angiotensin-Converting Enzymes Play a Dominant Role in Fertility" 
  
  `
  
  ;
  setTimeout(() => {
    setOutput(displayOutput);
  }, 5000);

    } else {
      const displayOutput = `The provided question cannot be answered with our current context, we recommend you reach out to your medical provider`;
      setOutput(displayOutput);

    }
    // setOutput(displayOutput);
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