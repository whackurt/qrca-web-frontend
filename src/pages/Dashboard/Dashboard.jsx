import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GetAttendance } from '../../services/attendance';
import moment from 'moment-timezone';
import { format } from 'date-fns';
import Button from '../../components/Button';
import { GetStatus } from '../../services/status';
import { PDFDownloadLink } from '@react-pdf/renderer';
import AttendanceReportDoc from '../../components/AttendanceReportDoc';
import { GetPersonnel } from '../../services/personnel';

const Dashboard = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [attendance, setAttendance] = useState([]);
	const [filteredAttendance, setFilteredAttendance] = useState([]);
	const [status, setStatus] = useState([]);

	const [personnels, setPersonnels] = useState([]);

	const [regular, setRegular] = useState([]);
	const [dto, setDto] = useState([]);
	const [onSch, setOnSch] = useState([]);
	const [newGradBisoc, setNewGradBisoc] = useState([]);
	const [appRet, setAppRet] = useState([]);
	const [rtu, setRtu] = useState([]);
	const [underSusp, setUnderSusp] = useState([]);
	const [awol, setAwol] = useState([]);

	const formattedSelectedDate = `${selectedDate.getFullYear()}-${
		selectedDate.getMonth() + 1 < 10
			? '0' + (selectedDate.getMonth() + 1)
			: selectedDate.getMonth() + 1
	}-${selectedDate.getDate()}`;

	const getAttendance = async () => {
		const res = await GetAttendance();

		const attends = res.data;

		setAttendance(attends);

		const filtered = res.data?.filter(
			(attendance) =>
				attendance.dateTime.substring(0, 10) === formattedSelectedDate
		);

		setFilteredAttendance(filtered);

		filterAttendance();
	};

	const formatDate = (dateTime) => {
		const dt = new Date(dateTime);
		dt.setHours(dt.getHours());

		return format(dt, 'MMMM d, yyyy');
	};

	const getStatus = async () => {
		const res = await GetStatus();

		if (res.status === 200) {
			const statuses = res.data;
			setStatus(statuses);
		}
	};

	const getPersonnels = async () => {
		const res = await GetPersonnel();

		const personnelList = res.data;

		setPersonnels(personnelList);
	};

	useEffect(() => {
		getPersonnels();
	}, []);

	const filterAttendance = () => {
		//regular personnels
		const onStation = status.filter((st) => st.status === 'On Station');

		const regularAtt = filteredAttendance.filter(
			(att) => att.personnel?.personnelStatus === onStation[0]._id
		);

		setRegular(regularAtt);

		//Deployed to other offices
		const dtooStatus = status.filter(
			(st) => st.status === 'Detailed to Other Offices'
		);

		const detailed = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === dtooStatus[0]._id
		);

		setDto(detailed);

		//Newly graduated BISOC
		const newGradStatus = status.filter(
			(st) => st.status === 'Newly Graduated BISOC'
		);

		const newGrad = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === newGradStatus[0]._id
		);

		setNewGradBisoc(newGrad);

		//onGoing Schooling
		const onSchStatus = status.filter(
			(st) => st.status === 'Ongoing Schooling'
		);

		const onSch = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === onSchStatus[0]._id
		);

		setOnSch(onSch);

		//appllied for retirement
		const retStatus = status.filter(
			(st) => st.status === 'Applied for Optional Retirement'
		);

		const ret = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === retStatus[0]._id
		);

		setAppRet(ret);

		// returned to unit
		const retToUnit = status.filter(
			(st) => st.status === 'Returned-to-Unit (RTU)'
		);

		const _rtu = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === retToUnit[0]._id
		);

		setRtu(_rtu);

		// under Suspension
		const usStatus = status.filter((st) => st.status === 'Under Suspension');

		const underSuspension = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === usStatus[0]._id
		);

		setUnderSusp(underSuspension);

		// AWOL
		const awolStatus = status.filter((st) => st.status === 'On AWOL');

		const awolAttendance = personnels?.filter(
			(personnel) => personnel.personnelStatus?._id === awolStatus[0]._id
		);

		setAwol(awolAttendance);
	};

	useEffect(() => {
		filterAttendance();
	}, [filteredAttendance]);

	useEffect(() => {
		getAttendance();
		getStatus();
	}, []);

	useEffect(() => {
		const filtered = attendance.filter(
			(at) => at.dateTime.substring(0, 10) === formattedSelectedDate
		);

		setFilteredAttendance(filtered);

		filterAttendance();
	}, [selectedDate]);

	return (
		<div className="relative overflow-x-auto h-screen">
			<div className="w-full flex justify-end my-4">
				<PDFDownloadLink
					document={
						<AttendanceReportDoc
							status={status}
							attendances={filteredAttendance}
							date={formatDate(selectedDate)}
							regular={regular}
							dto={dto}
							newGradBisoc={newGradBisoc}
							onSch={onSch}
							appRet={appRet}
							rtu={rtu}
							underSusp={underSusp}
							awol={awol}
						/>
					}
				>
					<Button onClick={() => {}} bgColor={'bg-green-500'}>
						Generate Report
					</Button>
				</PDFDownloadLink>
			</div>

			<div className="flex justify-between">
				<div className="flex ">
					<h1 className=" text-2xl text-slate-600 uppercase">Attendance | </h1>
					<h1 className="ml-1 font-bold text-2xl text-secondary ">
						{formatDate(selectedDate)}
					</h1>{' '}
				</div>
				<div>
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
			</div>
			<div className="overflow-x">
				<table className="table-auto overflow-scroll w-full my-4 text-sm border  rounded-md text-left rtl:text-right text-gray-600">
					<thead className="text-xs text-white uppercase bg-primary">
						<tr>
							<th scope="col" className="px-6 py-3">
								Time
							</th>
							{/* <th scope="col" className="px-6 py-3">
								Date
							</th> */}
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
								{/* <td className="px-6 py-4">{formatDate(at.dateTime)}</td> */}
								<td className="px-6 py-4">{at.qr_code}</td>
								<td className="px-6 py-4">{at.personnel?.position}</td>
								<td className="px-6 py-4">{at.personnel?.last_name}</td>
								<td className="px-6 py-4">{at.personnel?.first_name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{filteredAttendance.length === 0 ? (
				<div className="flex justify-center py-4 pl-2">
					No attendance data available
				</div>
			) : null}
		</div>
	);
};

export default Dashboard;
