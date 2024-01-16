import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
// 	page: { backgroundColor: 'white' },
// 	section: { color: 'black', textAlign: 'center', margin: 30 },
// });
const large = 10;
const xlarge = 12;
const medium = 8;

const styles = StyleSheet.create({
	page: { backgroundColor: '#FFFFFF' },
	textRegular: { fontFamily: 'Helvetica', fontSize: medium },

	headerRegular: { fontFamily: 'Helvetica', fontSize: large },
	headerBold: { fontFamily: 'Helvetica-Bold', fontSize: large },

	docTitleRed: {
		fontFamily: 'Helvetica-Bold',
		fontSize: xlarge,
		color: '#bf0215',
	},
	docTitleBlack: {
		fontFamily: 'Helvetica-Bold',
		fontSize: xlarge,
		color: '#1c1c1c',
	},

	section: { color: 'black', textAlign: 'center', margin: 8 },

	attendance: { color: 'black', textAlign: 'left', flexDirection: 'row' },
	attendanceContent: {
		fontFamily: 'Helvetica',
		fontSize: large,
		marginHorizontal: 8,
		marginVertical: 1,
	},

	statusSection: {
		backgroundColor: '#fcfc74',
		textAlign: 'center',
		paddingHorizontal: 15,
		paddingVertical: 2,
	},
	statusSectionWrapper: {
		textAlign: 'center',
		paddingHorizontal: 20,
		margin: 6,
	},

	status: {
		fontFamily: 'Helvetica-Bold',
		textAlign: 'left',
		fontSize: large,
		color: '#1c1c1c',
	},
});

const AttendanceReportDoc = ({
	date,
	regular,
	dto,
	newGradBisoc,
	onSch,
	appRet,
	rtu,
	underSusp,
	awol,
}) => {
	useEffect(() => {
		console.log(regular);
	}, []);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text style={styles.headerRegular}>Republic of the Philippines</Text>
					<Text style={styles.headerRegular}>NATIONAL POLICE COMMISSION</Text>
					<Text style={styles.headerBold}>
						PHILIPPINE NATIONAL POLICE, POLICE REGIONAL OFFICE 10
					</Text>
					<Text style={styles.headerBold}>
						REGIONAL PERSONNEL AND RECORDS MANAGEMENT DIVISION
					</Text>
					<Text style={styles.textRegular}>
						Camp 1Lt Vicente G Alagar, Cagayan de Oro City
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.docTitleRed}>RPHAS-RPRMD ATTENDANCE ON</Text>
					<Text style={styles.docTitleBlack}>
						DAILY PNP PERSONNEL ACCOUNTING REPORT
					</Text>
					<Text style={styles.docTitleRed}>(DPPAR)</Text>

					<Text style={styles.headerRegular}>{date}</Text>
				</View>

				<View style={styles.statusSectionWrapper}>
					{regular.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>DETAILED TO OTHER OFFICES</Text>
					</View>
					{dto.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>ONGOING SCHOOLING</Text>
					</View>
					{onSch.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>NEWLY GRADUATED BISOC</Text>
					</View>
					{newGradBisoc.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>APPLIED FOR RETIREMENT</Text>
					</View>
					{appRet.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>Returned-To-Unit (RTU)</Text>
					</View>
					{rtu.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>UNDER SUSPENSION</Text>
					</View>
					{underSusp.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>

				<View style={styles.statusSectionWrapper}>
					<View style={styles.statusSection}>
						<Text style={styles.status}>ON AWOL</Text>
					</View>
					{awol.map((attendance, i) => (
						<>
							<View style={styles.attendance}>
								<Text style={styles.attendanceContent}>{i + 1}</Text>
								<Text style={styles.attendanceContent}>
									{attendance.personnel?.last_name},{' '}
									{attendance.personnel?.first_name}
								</Text>
							</View>
						</>
					))}
				</View>
			</Page>
		</Document>
	);
};

export default AttendanceReportDoc;
// ReactPDF.render(<AttendanceReportDoc />);
