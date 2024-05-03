'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa6';
import { useState } from 'react';

export default function LoginPage() {
	const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('')


	const [user, setUser] = React.useState({
		email: '',
		password: '',
	});

	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	const [loading, setLoading] = React.useState(false);

	const onLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post('auth_backend/login', user);
			console.log('Login successful', response.data);
			router.push('/api');
		} catch (error: any) {
			const message = error.response?.data?.message || 'Email or password incorrect, please try again.';
			setErrorMessage(message); // Set the error message state
			console.log('Login failed', message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	console.log(user);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="py-10 mb-10 text-5xl text-black">
				{loading ? "We're logging you in..." : 'Account Login'}
			</h1>

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

				{errorMessage && (
					<div className="text-red-500 text-sm mt-2 mb-2">
						{errorMessage}
					</div>
				)}

			<button
				onClick={onLogin}
				className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold text-black">
				Login
			</button>
		

			<Link href="/sign-up">
				<p className="mt-10 text-black">
					Do not have an account yet?
					<span className="font-bold text-green-600 ml-2 cursor-pointer underline text-black">
						Register your free account now
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
