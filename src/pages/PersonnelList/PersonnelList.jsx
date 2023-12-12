import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdSearch } from 'react-icons/io';
import Button from '../../components/Button';
import { useState } from 'react';
import {
	CreatePersonnel,
	DeletePersonnelById,
	GetPersonnel,
	UpdatePersonnelById,
} from '../../services/personnel';
import { useEffect } from 'react';

const PersonnelList = () => {
	const [showModal, setShowModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);

	const [loading, setLoading] = useState(false);
	const [idToEdit, setIdToEdit] = useState(null);
	const [idToDelete, setIdToDelete] = useState(null);
	const [updates, setUpdates] = useState({});

	const [personnel, setPersonnel] = useState([]);
	const [personnelDetails, setPersonnelDetails] = useState({});
	const [newPersonnel, setNewPersonnel] = useState({});
	const [filteredPersonnel, setFilteredPersonnel] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const saveUpdate = async () => {
		setLoading(true);

		const res = await UpdatePersonnelById(idToEdit, updates);

		if (res.status === 200) {
			getPersonnel();

			setIdToEdit(null);

			toggleModal();
		}

		setUpdates({});
		setLoading(false);
	};

	const deletePersonnel = async () => {
		setLoading(true);

		const res = await DeletePersonnelById(idToDelete);

		if (res.status === 200) {
			getPersonnel();
			toggleDeleteModal();
		}

		setLoading(false);
	};

	const addPersonnel = async () => {
		setLoading(true);

		const res = await CreatePersonnel(newPersonnel);

		if (res.status === 201) {
			getPersonnel();
			toggleAddModal();
		}

		setLoading(false);
	};

	const getPersonnel = async () => {
		const res = await GetPersonnel();
		setPersonnel(res.data);
		setFilteredPersonnel(res.data);
	};

	const searchPersonnel = () => {
		const filtered = personnel.filter(
			(p) =>
				p.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
				p.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
				p.qr_code.toLowerCase().includes(searchValue.toLowerCase())
		);

		setFilteredPersonnel(filtered);
	};

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const toggleDeleteModal = () => {
		setShowDeleteModal(!showDeleteModal);
	};

	const toggleAddModal = () => {
		setShowAddModal(!showAddModal);
	};

	useEffect(() => {
		getPersonnel();
	}, []);

	useEffect(() => {
		setFilteredPersonnel([]);
		searchPersonnel();
	}, [searchValue]);

	return (
		<div>
			<div className="flex justify-between items-center">
				{showModal && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
						<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
							<span
								onClick={toggleModal}
								className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
							>
								&times;
							</span>
							<h2 className="text-center text-lg font-bold mb-4">
								Update Personnel Information
							</h2>

							<div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										QR Code
									</label>
									<input
										type="text"
										id="position"
										name="position"
										value={`${personnelDetails?.qr_code}`}
										disabled
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										Position
									</label>
									<input
										type="text"
										id="position"
										name="position"
										placeholder={personnelDetails?.position}
										onChange={(e) =>
											setUpdates({
												...updates,
												position: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										First Name
									</label>
									<input
										type="text"
										id="first_name"
										name="first_name"
										placeholder={personnelDetails?.first_name}
										onChange={(e) =>
											setUpdates({
												...updates,
												first_name: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										Last Name
									</label>
									<input
										type="text"
										id="last_name"
										name="last_name"
										placeholder={personnelDetails?.last_name}
										onChange={(e) =>
											setUpdates({
												...updates,
												last_name: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>

								<button
									onClick={() => saveUpdate()}
									type="submit"
									className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									{loading ? 'Saving...' : 'Save Changes'}
								</button>
							</div>
						</div>
					</div>
				)}
				{showAddModal && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
						<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
							<span
								onClick={toggleAddModal}
								className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
							>
								&times;
							</span>
							<h2 className="text-lg font-bold mb-4 text-center">
								Add Personnel
							</h2>
							<div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										Position
									</label>
									<input
										type="text"
										id="position"
										name="position"
										placeholder={personnelDetails?.position}
										onChange={(e) =>
											setNewPersonnel({
												...newPersonnel,
												position: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										First Name
									</label>
									<input
										type="text"
										id="first_name"
										name="first_name"
										placeholder={personnelDetails?.first_name}
										onChange={(e) =>
											setNewPersonnel({
												...newPersonnel,
												first_name: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 font-bold mb-2"
									>
										Last Name
									</label>
									<input
										type="text"
										id="last_name"
										name="last_name"
										placeholder={personnelDetails?.last_name}
										onChange={(e) =>
											setNewPersonnel({
												...newPersonnel,
												last_name: e.target.value,
											})
										}
										className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
									/>
								</div>

								<button
									onClick={() => addPersonnel()}
									type="submit"
									className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									{loading ? 'Adding Personnel...' : 'Add Personnel'}
								</button>
							</div>
						</div>
					</div>
				)}

				{showDeleteModal && (
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
						<div className="absolute bg-white w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
							<span
								onClick={toggleDeleteModal}
								className="cursor-pointer text-2xl absolute top-0 right-0 p-4"
							>
								&times;
							</span>
							<h2 className="text-lg font-bold mb-4">Delete Personnel</h2>

							<div className="pb-4">
								<p>Are you sure you want to delete this personnel?</p>
							</div>
							<div className="flex justify-end">
								<button
									onClick={() => deletePersonnel()}
									type="submit"
									className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
								>
									{loading ? 'Deleting...' : 'Delete'}
								</button>
							</div>
						</div>
					</div>
				)}
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
				<div>
					<Button onClick={() => toggleAddModal()}>Add Personnel</Button>
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
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{searchValue === ''
						? personnel?.map((p) => (
								<tr key={p._id} className="bg-white border-b">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										{p.qr_code}
									</th>
									<td className="px-6 py-4">{p.position}</td>
									<td className="px-6 py-4">{p.last_name}</td>
									<td className="px-6 py-4">{p.first_name}</td>
									<td className="px-6 py-4">
										<div className="flex gap-x-2">
											<button
												onClick={() => {
													setIdToEdit(`${p._id}`);
													setPersonnelDetails(p);
													toggleModal();
												}}
											>
												<FiEdit size={20} color="#048a0d" />
											</button>
											<button
												onClick={() => {
													setIdToDelete(p._id);
													toggleDeleteModal();
												}}
											>
												<RiDeleteBin6Line size={20} color="#ab0725" />
											</button>
										</div>
									</td>
								</tr>
						  ))
						: filteredPersonnel?.map((p) => (
								<tr key={p._id} className="bg-white border-b">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										{p.qr_code}
									</th>
									<td className="px-6 py-4">{p.position}</td>
									<td className="px-6 py-4">{p.last_name}</td>
									<td className="px-6 py-4">{p.first_name}</td>
									<td className="px-6 py-4">
										<div className="flex gap-x-2">
											<button
												onClick={() => {
													setIdToEdit(`${p._id}`);
													setPersonnelDetails(p);
													toggleModal();
												}}
											>
												<FiEdit size={20} color="#048a0d" />
											</button>
											<button
												onClick={() => {
													setIdToDelete(p._id);
													toggleDeleteModal();
												}}
											>
												<RiDeleteBin6Line size={20} color="#ab0725" />
											</button>
										</div>
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

export default PersonnelList;
