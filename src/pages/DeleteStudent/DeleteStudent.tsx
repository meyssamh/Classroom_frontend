import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes, Students } from '$/redux';
import { RootState } from '@/store';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import Tag from '@/components/UI/Tag/Tag';
import Main from '^/Main/Main';
import classes from '../Pages.module.scss';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { fetchDeleteStudent } from '@/store/action/classActions';

/**
 * Functional component that returns delete student page.
 *
 * @returns {JSX.Element} Delete student page.
 */
const DeleteStudent = (): JSX.Element => {
	// Component state
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [studentId, setStudentId] = React.useState<number>(0);

	// Redux state
	const selectedClass: Classes = useSelector((state: RootState) => state.class.data.class);
	const students: Students[] = useSelector((state: RootState) => state.class.data.students);
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.class.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.class.error);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// Handlers
	function handleCancelClick (): void {
		setModalOpen(false);
		setStudentId(0);
	}

	function handleProceedClick (): void {
		const id = studentId;
		dispatch(fetchDeleteStudent(id));
		setModalOpen(false);
		setStudentId(0);
	}

	function handleDeleteStudent (id: number): void {
		setStudentId(id);
		setModalOpen(true);
	}

	// Title of dashboard's body
	const title = `${selectedClass.classname}: Delete Student`;

	// Button in header of body, to return to class page.
	const classButton = <LinkButton link={'/class'} text={'Go to Class'} variant={'contained'} />;

	// Delete modal
	const modal = (
		<Modal
			label={'Delete Student'}
			type={'delete'}
			question={'Are you sure you want to delete this student?'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		/>
	);

	// Complete body element
	const bodyContent = students.map(student => {
		const fullname = student.firstname + ' ' + student.lastname;
		const id = student.id;

		return (
			<Tag
				variant={'delete'}
				text={fullname}
				buttonText={'Delete Student'}
				key={id}
				onClick={handleDeleteStudent.bind(this, id)}
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
									text={'Student deleted successfully!'}
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

export default DeleteStudent;