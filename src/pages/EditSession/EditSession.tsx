import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes, Sessions, Students } from '$/redux';
import IconButton from '@/components/UI/IconButton/IconButton';
import StudentTag from '@/components/UI/StudentTag/StudentTag';
import { RootState } from '@/store';
import Main from '^/Main/Main';
import classes from '../Pages.module.scss';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { Situation } from '$/declaration';
import { fetchEditSession } from '@/store/action/classActions';

/**
 * Functional component that returns edit session page.
 *
 * @returns {JSX.Element} Edit session page.
 */
const EditSession = (): JSX.Element => {
	// Component state
	const [situation, setSituation] = React.useState<Situation>({});
	const [sessionDate, setSessionDate] = React.useState<Date>();

	// LocalStorage
	const sessionId = localStorage.getItem('selectedSession');

	// Redux state
	const selectedClass: Classes = useSelector((state: RootState) => state.class.data.class);
	const students: Students[] = useSelector((state: RootState) => state.class.data.students);
	const sessions: Sessions[] = useSelector((state: RootState) => state.class.data.sessions);
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.home.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.home.error);

	let selectedSession: Sessions | undefined = sessions.filter(session => session.id === Number(sessionId)).pop();

	// Component hook
	React.useEffect(() => {
		if (sessions) {
			const mySelectedSession = sessions.filter(session => session.id === Number(sessionId)).pop();
			const selectedSituation: Situation = mySelectedSession!.situation as Situation;
			const selectedDate = mySelectedSession!.date;

			setSituation(selectedSituation);
			setSessionDate(selectedDate);
		}
	}, []);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Router-dom hook
	const navigate = useNavigate();

	// Handlers
	function handleCancleClick (): void {
		navigate('/select-edit-session');
	}

	function handleSubmitClick (): void {
		let updatedSession = { ...selectedSession! };

		updatedSession!.situation = { ...situation };

		dispatch(fetchEditSession(updatedSession));
		navigate('/select-edit-session');
	}

	function handleSituationClick (id: number): void {
		const updatedSituation = { ...situation };
		updatedSituation[id] = undefined;
		setSituation(updatedSituation);
	}

	function handleAbsentClick (id: number): void {
		setSituation({ ...situation, [id]: false });
	}

	function handlePresentClick (id: number): void {
		setSituation({ ...situation, [id]: true });
	}

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	const selectedSessionDate = new Date(sessionDate!);
	const date = selectedSessionDate.getDate();
	const month = selectedSessionDate.getMonth() + 1;

	// Title of body's header
	const title = `${selectedClass.classname}: Session ${date}/${month}`;

	// Buttons of body's header
	const actionButtons = (
		<>
			<IconButton
				variant={'outlined'}
				icon={'cancel'}
				text={'Cancel'}
				onClick={handleCancleClick}
			/>
			{
				students.length === Object.keys(situation).length ?
					<IconButton
						variant={'contained'}
						icon={'submit'}
						text={'Submit'}
						onClick={handleSubmitClick}
					/> :
					<IconButton
						variant={'contained-disabled'}
						icon={'submit'}
						text={'Submit'}
					/>
			}
		</>
	);

	// Complete body element
	const bodyContent: JSX.Element[] = [];

	students.map(student => {
		const fullname = student.firstname + ' ' + student.lastname;

		Object.entries(situation).map(element => {

			if (student.id === parseInt(element[0])) {
				if (element[1] === true) {
					bodyContent.push(
						<StudentTag
							text={fullname}
							variant={'present'}
							key={student.id + fullname + element[1]}
							onClick={handleSituationClick.bind(this, Number(element[0]))}
						/>
					);
				} else if (element[1] === false) {
					bodyContent.push(
						<StudentTag
							text={fullname}
							variant={'absent'}
							key={student.id + fullname + element[1]}
							onClick={handleSituationClick.bind(this, Number(element[0]))}
						/>
					);
				} else {
					bodyContent.push(
						<StudentTag
							text={fullname}
							variant={'unresolved'}
							key={student.id + fullname + element[1]}
							onAbsentClick={handleAbsentClick.bind(this, Number(element[0]))}
							onPresentClick={handlePresentClick.bind(this, Number(element[0]))}
						/>
					);
				}
			} else {
				null;
			}
		});
	});

	return (
		<>
			{
				promiseLoading === 'pending' ?
					<Spinner /> :
					promiseLoading === 'failed' ?
						<section className={classes.message}>
							<Snackbar
								text={errorMessage}
								severity={'error'}
							/>
						</section> :
						promiseLoading === 'succeeded' ?
							<section className={classes.message}>
								<Snackbar
									text={'Session edited successfully!'}
									severity={'success'}
								/>
							</section> :
							null
			}
			<Main title={title} buttons={actionButtons}>
				<section className={classes.body}>
					{bodyContent}
				</section>
			</Main>
		</>
	);
};

export default EditSession;