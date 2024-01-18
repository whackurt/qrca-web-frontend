import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
// 	page: { backgroundColor: 'white' },
// 	section: { color: 'black', textAlign: 'center', margin: 30 },
// });
const large = 11;
const xlarge = 12;
const medium = 8;

const styles = StyleSheet.create({
	page: { backgroundColor: '#FFFFFF', padding: 20 },

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

	section: { color: 'black', textAlign: 'center', margin: 10 },

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

	certificationWrapper: {
		textAlign: 'left',
		paddingHorizontal: 110,
		// margin: 6,
		marginTop: 10,
	},

	certificationText: {
		fontFamily: 'Helvetica',
		fontSize: 10,
	},

	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 115,
		marginBottom: 15,
		marginTop: 10,
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

				<View style={styles.section}>
					<Text style={styles.headerBold}>RECAPITULATION</Text>
					<Text style={styles.headerRegular}>CERTIFICATION</Text>
				</View>

				<View style={styles.certificationWrapper}>
					<Text style={styles.certificationText}>
						THIS IS TO CERTIFY that the entries and signatures as appearing in
						this DPPAR are true and authentic based on my personal knowledge. As
						such, I hereby bind myself criminally and administratively liable in
						case of falsehood and/or forgery.
					</Text>
				</View>

				<View style={styles.rowContainer}>
					<Text style={styles.certificationText}>Prepared by:</Text>
					<Text style={styles.certificationText}>Certified Correct by:</Text>
					<Text style={styles.certificationText}>Noted by:</Text>
				</View>

				<View style={styles.rowContainer}>
					<Text style={styles.certificationText}>RPHAS Action PNCO</Text>
					<Text style={styles.certificationText}>C. RPHAS</Text>
					<Text style={styles.certificationText}>C. RPRMD</Text>
				</View>
			</Page>
		</Document>
	);
};

export default AttendanceReportDoc;
// ReactPDF.render(<AttendanceReportDoc />);
