import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineScan } from 'react-icons/ai';
import QRCode from 'react-qr-code';

const ScanQRCode = () => {
	const [qrcode, setQrcode] = useState('');
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

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
						placeholder="Enter personnel name"
					/>
					<button className="absolute px-2 bg-secondary hover:bg-primary py-2 rounded-lg">
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
					<tr className="bg-white border-b">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-blue-900 whitespace-nowrap"
						>
							PQCAWALYTC
						</th>
						<td className="px-6 py-4">P/SSgt.</td>
						<td className="px-6 py-4">P/Bagtac.</td>
						<td className="px-6 py-4">Jovy</td>
						<td className="px-6 py-4">
							<button
								onClick={() => {
									setQrcode('PQCAWALYTC');
									toggleModal();
								}}
							>
								<AiOutlineScan size={25} color="#eb696a" />
							</button>
						</td>
					</tr>
					<tr className="bg-white border-b">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-blue-900 whitespace-nowrap"
						>
							PQCAMYQC9E
						</th>
						<td className="px-6 py-4">P/SSgt.</td>
						<td className="px-6 py-4">P/Bagtac.</td>
						<td className="px-6 py-4">Jovy</td>
						<td className="px-6 py-4">
							<button
								onClick={() => {
									setQrcode('PQCAMYQC9E');
									toggleModal();
								}}
							>
								<AiOutlineScan size={25} color="#eb696a" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ScanQRCode;
