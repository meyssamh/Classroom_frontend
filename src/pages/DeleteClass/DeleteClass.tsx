import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes } from '$/redux';
import { RootState } from '@/store';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import Tag from '@/components/UI/Tag/Tag';
import classes from '../Pages.module.scss';
import Main from '^/Main/Main';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import Modal from '@/components/Modal/Modal';
import { fetchDeleteClass } from '@/store/action/homeActions';

/**
 * Functional component that returns delete class page.
 *
 * @returns {JSX.Element} Delete class page.
 */
const DeleteClass = (): JSX.Element => {
	// Component state
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [classId, setClassId] = React.useState<number>(0);

	// Redux state
	const userClasses: Classes[] = useSelector((state: RootState) => state.home.data.classes);
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.home.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.home.error);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// Handlers
	function handleDeleteClass (id: number): void {
		setClassId(id);
		setModalOpen(true);
	}

	function handleCancelClick (): void {
		setClassId(0);
		setModalOpen(false);
	}

	function handleProceedClick (): void {
		dispatch(fetchDeleteClass(classId));
		setClassId(0);
		setModalOpen(false);
	}

	// Button in header of body, to return to home page.
	const homeButton = <LinkButton variant={'contained'} text={'Go to Home'} link={'/home'} />;

	// Delete modal
	const modal = (
		<Modal
			label={'Delete Class'}
			type={'delete'}
			question={'Are you sure you want to delete this class?'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		/>
	);

	// Valid classes made by user
	let validUserClasses: JSX.Element[];

	if (userClasses.length !== 0) {
		validUserClasses = userClasses.map((course: Classes) => {
			const id = course.id;
			return (
				<Tag
					variant={'delete'}
					text={course.classname}
					buttonText='Delete Class'
					key={course.id}
					onClick={handleDeleteClass.bind(this, id)}
				/>
			);
		});
	} else {
		validUserClasses = [];
	}

	// TODO: else should have throw error or show error page!
	// Complete body element
	const bodyContent = validUserClasses.length > 0 ?
		<section className={classes.body}>
			{validUserClasses}
		</section> :
		<strong className={classes.hint}>Please add a class!</strong>;

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
									text={'Class deleted successfully!'}
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
			<Main title={'Delete Class'} buttons={homeButton}>
				{bodyContent}
			</Main>
		</>
	);
};

export default DeleteClass;