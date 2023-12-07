import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../../services/auth';
import { ClipLoader } from 'react-spinners';

const Login = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [errorMsg, setErrorMsg] = useState('');
	const [loginError, setLoginError] = useState(false);

	const [loading, setLoading] = useState(false);

	const login = async () => {
		setLoading(true);
		setLoginError(false);
		setErrorMsg('');

		await UserLogin({ username: username, password: password }).then((res) => {
			if (res.data && res.data.hasOwnProperty('token')) {
				localStorage.setItem('user_id', res.data.id);
				localStorage.setItem('token', res.data.token);

				navigate('/');
			} else {
				setLoginError(true);
				setErrorMsg(res.response.data.message);
			}
			setLoading(false);
		});
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
				<div className="bg-white rounded-md py-12 px-4 lg:px-10 mx-1 w-[350px] lg:min-w-[450px]">
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
							<p className="font-bold text-sm">Username</p>
							<input
								onChange={(e) => setUsername(e.target.value)}
								className="rounded border-slate-300"
								type="text"
								name="username"
							/>
						</div>
						<div className="flex flex-col py-2">
							<p className="font-bold text-sm">Password</p>
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="rounded border-slate-300"
								type="password"
								name="password"
							/>
						</div>
						<div className="flex flex-col py-2">
							<p className="text-xs text-red-600 text-center">
								{loginError ? errorMsg : null}
							</p>
						</div>
					</form>

					<button
						onClick={() => login()}
						className="hover:bg-red-700 bg-primary shadow-md w-full text-white py-2 rounded-md my-4"
					>
						{loading ? (
							<span>
								<ClipLoader size={18} color="#FFFFFF" />{' '}
							</span>
						) : (
							'Login'
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
