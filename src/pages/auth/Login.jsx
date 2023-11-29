import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const login = () => {
		navigate('/');
	};

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-police bg-cover bg-opacity-25">
			<div className="text-center py-4">
				<p className="text-xl text-white">Welcome to</p>
				<h1 className="text-xl lg:text-2xl font-bold text-white">
					PNP QR Code Attendance System
				</h1>
			</div>
			<div className="flex flex-col items-center">
				<div className="bg-white rounded-md py-12 px-4 lg:px-10 mx-1 w-[350px] lg:min-w-[600px]">
					<div className="flex justify-center">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Philippine_National_Police_seal.svg/1466px-Philippine_National_Police_seal.svg.png"
							width={90}
						/>
					</div>

					<p className="text-center text-2xl my-4 font-bold">Log In</p>
					<hr className="my-4" />
					<form action="">
						<div className="flex flex-col py-2">
							<p className="font-bold">Username</p>
							<input className="rounded border-slate-300" type="text" />
						</div>
						<div className="flex flex-col py-2">
							<p className="font-bold">Password</p>
							<input className="rounded border-slate-300" type="text" />
						</div>
						<div className="flex flex-col py-2">
							<p className="text-xs text-red-600 text-center">
								Invalid Credentials.
							</p>
						</div>
					</form>

					<button
						onClick={login}
						className="hover:bg-red-700 bg-primary shadow-md w-full text-white py-2 rounded-md my-4"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
