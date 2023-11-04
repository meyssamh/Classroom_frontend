import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes, Students } from '$/redux';
import { RootState } from '@/store';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import Tag from '@/components/UI/Tag/Tag';
import Main from '^/Main/Main';
import classes from '../Pages.module.scss';
import Input from '@/components/UI/Input/Input';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { fetchEditStudent } from '@/store/action/classActions';

/**
 * Functional component that returns edit student page.
 *
 * @returns {JSX.Element} Edit student page.
 */
const EditStudent = (): JSX.Element => {
	// Component state
	const [studentId, setStudentId] = React.useState<number>(0);
	const [firstname, setFirstname] = React.useState<string>('');
	const [lastname, setLastname] = React.useState<string>('');
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);

	// Ref
	const firstnameRef = React.useRef<HTMLInputElement>(null);

	// Component hook
	React.useEffect(() => {
		if (firstnameRef.current) {
			firstnameRef.current.focus();
		}
	}, [modalOpen]);

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
	function handleFirstnameChangeInput (e: React.ChangeEvent<HTMLInputElement>): void {
		setFirstname(e.target.value);
	}

	function handleLastnameChangeInput (e: React.ChangeEvent<HTMLInputElement>): void {
		setLastname(e.target.value);
	}

	function handleCancelClick (): void {
		setModalOpen(false);
		setFirstname('');
		setLastname('');
		setStudentId(0);
	}

	function handleProceedClick (): void {
		if (firstname.trim().length > 0 && lastname.trim().length > 0) {
			const student = { id: studentId, firstname, lastname };
			dispatch(fetchEditStudent(student));
			setModalOpen(false);
		} else {
			setFirstname('');
			setLastname('');
			setStudentId(0);
			setModalOpen(false);
			setOpenSnackbar(true);
		}
	}
	function handleEditStudent (data: Students): void {
		const { id, firstname, lastname } = data;
		setStudentId(id);
		setFirstname(firstname);
		setLastname(lastname);
		setModalOpen(true);
	}

	// Title of body's header
	const title = `${selectedClass.classname}: Edit Student`;

	// Button in header of body, to return to class page.
	const classButton = <LinkButton link={'/class'} text={'Go to Class'} variant={'contained'} />;

	// Elements of modal
	const modalChildren = (
		<>
			<Input
				label={'First Name *'}
				maxLength={255}
				name={'firstname'}
				error={firstname.trim().length > 0}
				errorText={'First Name is required!'}
				value={firstname}
				required={true}
				type={'text'}
				ref={firstnameRef}
				onChange={(e): void => handleFirstnameChangeInput(e)}
			/>
			<Input
				label={'Last Name *'}
				maxLength={255}
				name={'lastname'}
				error={lastname.trim().length > 0}
				errorText={'Last Name is required!'}
				value={lastname}
				required={true}
				type={'text'}
				onChange={(e): void => handleLastnameChangeInput(e)}
			/>
		</>
	);

	// Modal with different types for different situations.
	const modal = firstname.trim().length > 0 && lastname.trim().length > 0 ?
		<Modal
			label={'Edit Student'}
			type={'edit'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		>
			{modalChildren}
		</Modal> :
		<Modal
			label={'Edit Student'}
			type={'edit-disabled'}
			onCancelClick={handleCancelClick}
		>
			{modalChildren}
		</Modal>;

	// Complete body element
	const bodyContent = students.map(student => {
		const fullname = student.firstname + ' ' + student.lastname;
		const id = student.id;
		const data: Students = { id, firstname: student.firstname, lastname: student.lastname };

		return (
			<Tag
				variant={'edit'}
				text={fullname}
				buttonText={'Edit Student'}
				key={id}
				onClick={handleEditStudent.bind(this, data)}
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
									text={'Student edited successfully!'}
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
			{
				openSnackbar ?
					<section className={classes.message}>
						<Snackbar
							text={'Invalid input!'}
							severity={'error'}
						/>
					</section> :
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

export default EditStudent;