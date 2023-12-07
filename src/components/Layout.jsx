import React from 'react';
import Control from '../assets/control.png';
import { MdOutlineDashboard, MdOutlinePets } from 'react-icons/md';
import { BsQrCodeScan, BsFileSpreadsheet, BsPeople } from 'react-icons/bs';
import Button from '../components/Button';
import Logo from '../assets/attendance-icon-design-free-vector.jpg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children, location }) => {
	const [open, setOpen] = useState(true);
	const navigate = useNavigate();

	const Menus = [
		{
			title: 'Dashboard',
			icon: <MdOutlineDashboard size={25} color="#585959" />,
			route: '/',
		},
		{
			title: 'Scan QR Code',
			icon: <BsQrCodeScan size={25} color="#585959" />,
			route: '/scan-qr-code',
		},
		{
			title: 'Personnel List',
			icon: <BsPeople size={25} color="#585959" />,
			route: '/personnel-list',
		},
	];

	return (
		<div className="flex w-full overflow-x-auto">
			<div
				className={` ${
					open ? 'w-72' : 'w-20 '
				} bg-white h-screen p-5 shadow-md pt-8 fixed top-0 left duration-300 `}
			>
				<img
					src={Control}
					className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
					onClick={() => setOpen(!open)}
				/>

				<div className="flex gap-x-4 items-center">
					<img
						width={50}
						src={Logo}
						className={`cursor-pointer duration-500 ${
							open && 'rotate-[360deg]'
						}`}
					/>
					<h1
						className={`text-primary origin-left font-medium text-xl duration-200 ${
							!open && 'scale-0'
						}`}
					>
						PNP QR Code Attendance System
					</h1>
				</div>
				<ul className="pt-6">
					{Menus.map((Menu, index) => (
						<Link to={Menu.route} key={index}>
							<li
								key={index}
								className={`flex ${
									location === Menu.title ? 'text-primary' : 'text-slate-700'
								} rounded-md p-2 cursor-pointer hover:bg-slate-100 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
									index === 0 && 'bg-light-white'
								} `}
							>
								{Menu.icon}
								<span
									className={`${
										!open && 'hidden'
									} origin-left duration-200  font-medium`}
								>
									{Menu.title}
								</span>
							</li>
						</Link>
					))}
				</ul>
			</div>

			<div
				className={`h-screen w-full overflow-y-auto p-4 bg-gray-100 ${
					open ? 'ml-72' : 'ml-20'
				} duration-300 `}
			>
				<div className="flex justify-between items-center w-full px-4 rounded-md bg-white h-12">
					<p className="font-medium">
						Admin {'>'} {location}
					</p>
					<Button
						onClick={() => {
							localStorage.clear();
							navigate('/login');
						}}
						className="bg-primary hover:bg-secondary text-white px-2 py-1 rounded text-sm font-medium"
					>
						Log out
					</Button>
				</div>
				<div className="bg-white my-4 rounded-md p-4 text-gray-700">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
