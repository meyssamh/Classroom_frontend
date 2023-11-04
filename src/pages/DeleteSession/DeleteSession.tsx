import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes, Sessions } from '$/redux';
import { RootState } from '@/store';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import Main from '^/Main/Main';
import classes from '../Pages.module.scss';
import Tag from '@/components/UI/Tag/Tag';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { fetchDeleteSession } from '@/store/action/classActions';

/**
 * Functional component that returns delete session page.
 *
 * @returns {JSX.Element} Delete session page.
 */
const DeleteSession = (): JSX.Element => {
	// Component state
	const [sessionId, setSessionId] = React.useState<number>(0);
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);

	// Redux state
	const selectedClass: Classes = useSelector((state: RootState) => state.class.data.class);
	const sessions: Sessions[] = useSelector((state: RootState) => state.class.data.sessions);
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.class.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.class.error);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// Handlers
	function handleCancelClick (): void {
		setModalOpen(false);
		setSessionId(0);
	}

	function handleProceedClick (): void {
		dispatch(fetchDeleteSession(sessionId));
		setModalOpen(false);
		setSessionId(0);
	}

	function handleDeleteSession (id: number): void {
		setSessionId(id);
		setModalOpen(true);
	}

	// Delete modal
	const modal = (
		<Modal
			label={'Delete Session'}
			type={'delete'}

			question={'Are you sure you want to delete this session?'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		/>
	);

	// Title of dashboard's body
	const title = `${selectedClass.classname}: Sessions`;

	// Button in header of body, to return to class page.
	const classButton = <LinkButton link={'/class'} text={'Go to Class'} variant={'contained'} />;

	// Complete body element
	const bodyContent = sessions.map(session => {
		const sessionDate = new Date(session.date);
		const date = sessionDate.getDate();
		const month = sessionDate.getMonth() + 1;
		const text = `Session ${date}/${month}`;

		const id = session.id;

		return (
			<Tag
				variant={'delete'}
				text={text}
				buttonText={'Delete Session'}
				key={id}
				onClick={handleDeleteSession.bind(this, id)}
			/>
		);
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
									text={'Session deleted successfully!'}
									severity={'success'}
								/>
							</section> :
							null
			}
			{
				modalOpen === true ?
					modal :
					null
			}
			<Main title={title} buttons={classButton}>
				<section className={classes.body}>
					{bodyContent}
				</section>
			</Main>
		</>
	);
};

export default DeleteSession;