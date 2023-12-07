import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineScan } from 'react-icons/ai';
import QRCode from 'react-qr-code';
import { GetPersonnel } from '../../services/personnel';

const ScanQRCode = () => {
	const [qrcode, setQrcode] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [personnel, setPersonnel] = useState([]);
	const [filteredPersonnel, setFilteredPersonnel] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const getPersonnel = async () => {
		const res = await GetPersonnel();
		setPersonnel(res.data);
		setFilteredPersonnel(res.data);
	};

	useEffect(() => {
		getPersonnel();
	}, []);

	const searchPersonnel = () => {
		setFilteredPersonnel(
			personnel.filter(
				(p) => p.last_name.toLowerCase() === searchValue.toLowerCase()
			)
		);
	};

	useEffect(() => {
		setFilteredPersonnel([]);
		searchPersonnel();
	}, [searchValue]);

	return (
		<div className="relative overflow-x-auto">
			{showModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="absolute bg-white w-64 p-6 rounded shadow-lg">
						<span
							onClick={toggleModal}
							className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
						>
							&times;
						</span>
						<h2 className="font-bold text-center">Scan QR Code</h2>
						<div>
							<div className="flex justify-center py-4">
								<QRCode
									size={200}
									// style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
									value={qrcode}
									viewBox={`0 0 256 256`}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="flex items-center justify-between">
				<div className="flex pt-4 justify-end gap-x-2 items-center">
					<p>Search</p>

					<input
						className="relative h-8 rounded-lg w-64"
						type="text"
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder="Search by last name"
					/>
					<button
						onClick={() => searchPersonnel()}
						className="absolute px-2 bg-secondary hover:bg-primary py-2 rounded-lg"
					>
						<IoMdSearch color="#FFFFFF" />
					</button>
				</div>
			</div>

			<table className="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
				<thead className="text-xs text-white uppercase bg-primary">
					<tr>
						<th scope="col" className="px-6 py-3">
							QR Code
						</th>
						<th scope="col" className="px-6 py-3">
							Position
						</th>
						<th scope="col" className="px-6 py-3">
							Last Name
						</th>
						<th scope="col" className="px-6 py-3">
							First Name
						</th>
						<th scope="col" className="px-6 py-3">
							View
						</th>
					</tr>
				</thead>
				<tbody>
					{searchValue === ''
						? personnel?.map((p) => (
								<tr className="bg-white border-b">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-blue-900 whitespace-nowrap"
									>
										{p.qr_code}
									</th>
									<td className="px-6 py-4">{p.position}</td>
									<td className="px-6 py-4">{p.last_name}</td>
									<td className="px-6 py-4">{p.first_name}</td>
									<td className="px-6 py-4">
										<button
											onClick={() => {
												setQrcode(`${p.qr_code}`);
												toggleModal();
											}}
										>
											<AiOutlineScan size={25} color="#eb696a" />
										</button>
									</td>
								</tr>
						  ))
						: filteredPersonnel?.map((p) => (
								<tr className="bg-white border-b">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-blue-900 whitespace-nowrap"
									>
										{p.qr_code}
									</th>
									<td className="px-6 py-4">{p.position}</td>
									<td className="px-6 py-4">{p.last_name}</td>
									<td className="px-6 py-4">{p.first_name}</td>
									<td className="px-6 py-4">
										<button
											onClick={() => {
												setQrcode(`${p.qr_code}`);
												toggleModal();
											}}
										>
											<AiOutlineScan size={25} color="#eb696a" />
										</button>
									</td>
								</tr>
						  ))}
				</tbody>
			</table>
			{personnel.length === 0 ? (
				<div className="flex justify-center py-4 pl-2">
					No personnel data available
				</div>
			) : null}
		</div>
	);
};

export default ScanQRCode;
