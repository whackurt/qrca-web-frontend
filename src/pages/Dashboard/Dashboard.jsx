import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dashboard = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	return (
		<div className="relative overflow-x-auto h-screen">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<h1 className="font-bold text-2xl text-slate-600 uppercase">
						Attendance
					</h1>
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
				<h1 className="font-bold text-2xl text-slate-600 uppercase">
					Dec. 07, 2023
				</h1>
			</div>
			<table className="w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
				<thead className="text-xs text-white uppercase bg-primary">
					<tr>
						<th scope="col" className="px-6 py-3">
							Time
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
						<th scope="col" className="px-6 py-3">
							Remarks
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-white border-b">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							08:59 AM
						</th>
						<td className="px-6 py-4">PQCAQCUAUK</td>
						<td className="px-6 py-4">P/SSgt.</td>
						<td className="px-6 py-4">Bagtac</td>
						<td className="px-6 py-4">Jovy</td>
						<td className="px-6 py-4">
							<p className={`text-red-600 font-semibold`}>Late</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
