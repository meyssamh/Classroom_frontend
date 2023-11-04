import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { Sessions, Students } from '$/redux';
import classes from './Row.module.scss';

/**
 * Functional component that makes rows for table's body.
 *
 * @returns {JSX.Element} Rows for table's body.
 */
const Row = (): JSX.Element => {

	// Redux state
	const students: Students[] = useSelector((state: RootState) => state.class.data.students);
	const sessions: Sessions[] = useSelector((state: RootState) => state.class.data.sessions);

	// Situation of student
	const situations: object[] = sessions.map(session => {
		return session.situation;
	});

	// Table's row with student's name and situation
	const studentRow = students.map(student => {
		return (
			<tr key={student.id}>
				{/* Student's name */}
				<td className={classes.name}>
					{student.firstname} {student.lastname}
				</td>
				{/* Student's situation */}
				{
					situations.map(situation => {
						let studentSituation: JSX.Element[] = [];

						Object.entries(situation).map((element, index) => {

							if (student.id === parseInt(element[0])) {
								if (element[1] === true) {
									// Tick for present
									studentSituation.push(
										<td
											className={classes.icon}
											key={student.id + student.firstname + student.lastname + index}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="30"
												height="30"
												viewBox="0 0 30 30"
												fill="none"
											>
												<path
													d="M7.1875 16.0831L10.4249 20.5172C11.4396 21.907 13.5224 21.88 14.5008 20.4644L22.8125 8.4375"
													stroke="#2e3452"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</td>
									);
								} else if (element[1] === false) {
									studentSituation.push(
										// X for absent
										<td
											className={classes.icon}
											key={student.id + student.firstname + student.lastname + index}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="30"
												height="30"
												viewBox="0 0 30 30"
												fill="none"
											>
												<path
													d="M21.5625 8.4375L8.4375 21.5625"
													stroke="#fe767f"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M8.4375 8.4375L21.5625 21.5625"
													stroke="#fe767f"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</td>
									);
								} else {
									studentSituation.push(
										// - for unknown
										<td
											className={classes.icon}
											key={student.id + student.firstname + student.lastname + index}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="20"
												viewBox="0 96 960 960"
												width="20"
												fill="#2e3452"
											>
												<path d="M200 606v-60h560v60H200Z" />
											</svg>
										</td>
									);
								}
							} else {
								null;
							}
						});
						return studentSituation;
					})
				}
			</tr>
		);
	});

	return (
		<>
			{studentRow}
		</>
	);
};

export default Row;