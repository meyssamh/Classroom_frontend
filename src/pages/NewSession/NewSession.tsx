import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes, Students } from '$/redux';
import { RootState } from '@/store';
import IconButton from '@/components/UI/IconButton/IconButton';
import StudentTag from '@/components/UI/StudentTag/StudentTag';
import Main from '^/Main/Main';
import classes from '../Pages.module.scss';
import { fetchNewSession } from '@/store/action/classActions';
import { Situation } from '$/declaration';

/**
 * Functional component that returns new session page.
 *
 * @returns {JSX.Element} New session page.
 */
const NewSession = (): JSX.Element => {
	// Component state
	const [situation, setSituation] = React.useState<Situation>({});

	// Redux state
	const selectedClass: Classes = useSelector((state: RootState) => state.class.data.class);
	const students: Students[] = useSelector((state: RootState) => state.class.data.students);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Router-dom hook
	const navigate = useNavigate();

	// Handlers
	function handleCancelClick (): void {
		setSituation({});
		navigate('/class');
	}

	function handleSubmitClick (): void {
		if (Object.keys(situation).length === Object.keys(students).length) {
			dispatch(fetchNewSession(situation));
			setSituation({});
			navigate('/class');
		}
	}

	function handleAbsentClick (id: number): void {
		setSituation({ ...situation, [id]: false });
	}

	function handlePresentClick (id: number): void {
		setSituation({ ...situation, [id]: true });
	}

	const date = new Date();

	// Title of body's header
	const title = `${selectedClass.classname}: Session ${date.getDate()}/${date.getMonth() + 1}`;

	// Button in header of body
	const actionButtons = (
		<>
			<IconButton
				variant={'outlined'}
				text={'Cancel'}
				icon={'cancel'}
				onClick={handleCancelClick}
			/>
			{
				Object.keys(situation).length === Object.keys(students).length ?
					<IconButton
						variant={'contained'}
						text={'Submit'}
						icon={'submit'}
						onClick={handleSubmitClick}
					/> :
					<IconButton
						variant={'contained-disabled'}
						text={'Submit'}
						icon={'submit'}
					/>
			}
		</>
	);

	// Complete body element
	const bodyContent: JSX.Element[] = students.map(student => {
		const fullname = student.firstname + ' ' + student.lastname;
		const id = student.id;

		if (Object.entries(situation).length === 0) {
			return (
				<StudentTag
					text={fullname}
					variant={'unresolved'}
					key={id}
					onAbsentClick={handleAbsentClick.bind(this, id)}
					onPresentClick={handlePresentClick.bind(this, id)}
				/>
			);
		} else {
			const studentSituation = Object.entries(situation).find(student => Number(student[0]) === id);

			if (studentSituation) {
				if (studentSituation[1] === true) {
					return (
						<StudentTag
							text={fullname}
							variant={'present'}
							key={id}
						/>
					);
				} else {
					return (
						<StudentTag
							text={fullname}
							variant={'absent'}
							key={id}
						/>
					);
				}
			} else {
				return (
					<StudentTag
						text={fullname}
						variant={'unresolved'}
						key={id}
						onAbsentClick={handleAbsentClick.bind(this, id)}
						onPresentClick={handlePresentClick.bind(this, id)}
					/>
				);
			}
		}
	});

	return (
		<Main title={title} buttons={actionButtons}>
			<section className={classes.body}>
				{bodyContent}
			</section>
		</Main>
	);
};

export default NewSession;