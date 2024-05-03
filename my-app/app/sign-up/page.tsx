'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa6';

export default function SignUpPage() {
	// redirect to login page
	const [successMessage, setSuccessMessage] = React.useState('');
	const router = useRouter();

	const [user, setUser] = React.useState({
		username: '',
		email: '',
		password: '',
	});

	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	const [loading, setLoading] = React.useState(false);

	const onSignUp = async () => {
		try {
			setLoading(true);
	
			const response = await axios.post('/auth_backend/signup', user);
			console.log('Signup successful', response.data);
			setSuccessMessage('Account created successfully! Please log in.');
			setTimeout(() => {
				router.push('/login');
			}, 3000); // Redirect after 3 seconds to give user time to read the message
		} catch (error: any) {
			console.log('Failed to sign up the user', error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (
			user.username.length > 0 &&
			user.email.length > 0 &&
			user.password.length > 0
		) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	console.log(user);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="py-10 mb-10 text-5xl text-black">
				{loading ? 'Processing...' : 'Free Sign Up'}
				<span className="italic text-sm absolute top-50 ml-4 text-green-600">
				
				</span>
			</h1>
			{successMessage && (
			<div className="mb-4 text-green-600 font-bold">
				{successMessage}
			</div>
		)}

			<input
				className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="username"
				type="text"
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
				placeholder="Your Username..."
			/>

			<input
				className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="email"
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				placeholder="Your Email..."
			/>

			<input
				className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="password"
				type="password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				placeholder="Your Password..."
			/>

			<button
				onClick={onSignUp}
				className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold text-black">
				{buttonDisabled ? 'Sign Up' : 'Register My Account Now'}
			</button>

			<Link href="/login">
				<p className="mt-10 text-black">
					Do you have a free account already?{' '}
					<span className="font-bold text-green-600 ml-2 cursor-pointer underline text-black">
						Login to your account
					</span>
				</p>
			</Link>

			<Link href="/">
				<p className="mt-8 opacity-50 text-black">
					<FaAngleLeft className="inline mr-1 text-black" /> Back to the Homepage
				</p>
			</Link>
		</div>
	);
}