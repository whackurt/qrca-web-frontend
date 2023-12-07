import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GetAttendance } from '../../services/attendance';
import moment from 'moment-timezone';
import { format } from 'date-fns';

const Dashboard = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [attendance, setAttendance] = useState([]);
	const [filteredAttendance, setFilteredAttendance] = useState([]);
	const [filterDate, setFilterDate] = useState('');

	const getAttendance = async () => {
		const res = await GetAttendance();
		setAttendance(res.data);
		setFilteredAttendance(
			res.data.filter(
				(attendance) =>
					attendance.dateTime.substring(0, 10) ===
					selectedDate.toISOString().substring(0, 10)
			)
		);
		console.log(res.data);
	};

	const currentDate = new Date();
	const monthsOfYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const formatDate = (dateTime) => {
		const dt = new Date(dateTime);
		return format(dt, 'MMMM d, yyyy');
	};

	useEffect(() => {
		getAttendance();
	}, []);

	useEffect(() => {
		const filtered = attendance.filter(
			(at) =>
				at.dateTime.substring(0, 10) ===
				selectedDate.toISOString().substring(0, 10)
		);
		setFilteredAttendance(filtered);
		console.log(selectedDate.toISOString().substring(0, 10));
	}, [selectedDate]);

	return (
		<div className="relative overflow-x-auto h-screen">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<h1 className="font-bold text-2xl text-slate-600 uppercase">
						Attendance
					</h1>
					{filterDate}
					<div className="flex gap-x-2 mt-2 items-center pl-2 rounded-lg bg-primary text-white">
						<p className="text-xs">Filter by date</p>
						<DatePicker
							className="rounded-lg h-8 text-primary w-28"
							showIcon={false}
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							icon="fa fa-calendar"
							maxDate={new Date()}
						/>
					</div>
				</div>
				<h1 className="font-bold text-2xl text-slate-600 ">
					{`${
						monthsOfYear[currentDate.getMonth()]
					} ${currentDate.getDate()}, ${currentDate.getFullYear()} `}
				</h1>
			</div>
			<table className="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
				<thead className="text-xs text-white uppercase bg-primary">
					<tr>
						<th scope="col" className="px-6 py-3">
							Time
						</th>
						<th scope="col" className="px-6 py-3">
							Date
						</th>
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
					</tr>
				</thead>
				<tbody>
					{filteredAttendance.map((at) => (
						<tr key={at._id} className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								{moment.utc(at.dateTime).format('hh:mm A')}
							</th>
							<td className="px-6 py-4">{formatDate(at.dateTime)}</td>
							<td className="px-6 py-4">{at.qr_code}</td>
							<td className="px-6 py-4">{at.personnel?.position}</td>
							<td className="px-6 py-4">{at.personnel?.last_name}</td>
							<td className="px-6 py-4">{at.personnel?.first_name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
