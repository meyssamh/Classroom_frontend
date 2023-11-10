import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { Classes, Students, Sessions } from '$/redux';
import { RootState } from '@/store';
import Main from '^/Main/Main';
import Button from '@/components/UI/Button/Button';
import Table from '@/components/Table/Table';
import classes from '../Pages.module.scss';
import Dropdown from '@/components/UI/Dropdown/Dropdown';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import Input from '@/components/UI/Input/Input';
import Modal from '@/components/Modal/Modal';
import { fetchNewStudent } from '@/store/action/classActions';

/**
 * Functional component that returns class page.
 *
 * @returns {JSX.Element} Class page.
 */
const Class = (): JSX.Element => {
	// Component state
	const [studentDropdownCounter, setStudentDropdownCounter] = React.useState<number>(0);
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
	const sessions: Sessions[] = useSelector((state: RootState) => state.class.data.sessions);
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.class.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.class.error);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Router-dom hook
	const navigate = useNavigate();

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// Handlers
	function handleNewStudent (): void {
		setStudentDropdownCounter(studentDropdownCounter + 1);
		setModalOpen(true);
	}

	function handleEditStudent (): void {
		navigate('/edit-student');
	}

	function handleDeleteStudent (): void {
		navigate('/delete-student');
	}

	function handleNewSession (): void {
		navigate('/new-session');
	}

	function handleEditSession (): void {
		navigate('/select-edit-session');
	}

	function handleDeleteSession (): void {
		navigate('/delete-session');
	}

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
	}

	function handleProceedClick (): void {
		if (firstname.trim().length > 0 && lastname.trim().length > 0) {
			const student = { firstname, lastname };
			dispatch(fetchNewStudent(student));
			setFirstname('');
			setLastname('');
			setModalOpen(false);
		} else {
			setFirstname('');
			setLastname('');
			setModalOpen(false);
			setOpenSnackbar(true);
		}
	}

	// Elements of student dropdown
	const studentDropdown = (
		sessions.length > 3 ?
			<Dropdown
				variant={'contained-disabled'}
				label={'Student'}
				menu={null}
			/> :
			students.length === 0 ?
				<Dropdown
					variant={'contained'}
					counter={studentDropdownCounter}
					label={'Student'}
					menu={
						[
							<Button
								variant={'text'}
								text={'New Student'}
								onClick={handleNewStudent}
								key={'new-student'}
							/>,
							<Button
								variant={'text-disabled'}
								text={'Edit Student'}
								key={'edit-student'}
							/>,
							<Button
								variant={'text-disabled'}
								text={'Delete Student'}
								key={'delete-student'}
							/>,
						]
					}
				/> :
				<Dropdown
					variant={'contained'}
					counter={studentDropdownCounter}
					label={'Student'}
					menu={
						[
							<Button
								variant={'text'}
								text={'New Student'}
								onClick={handleNewStudent}
								key={'new-student'}
							/>,
							<Button
								variant={'text'}
								text={'Edit Student'}
								onClick={handleEditStudent}
								key={'edit-student'}
							/>,
							<Button
								variant={'text'}
								text={'Delete Student'}
								onClick={handleDeleteStudent}
								key={'delete-student'}
							/>,
						]
					}
				/>
	);

	// Elements of session dropdown
	const sessionDropdown = (
		students.length === 0 ?
			<Dropdown
				variant={'contained-disabled'}
				label={'Session'}
				menu={null}
			/> :
			sessions.length === 0 ?
				<Dropdown
					variant={'contained'}
					label={'Session'}
					menu={
						[
							<Button
								variant={'text'}
								text={'New Session'}
								onClick={handleNewSession}
								key={'new-session'}
							/>,
							<Button
								variant={'text-disabled'}
								text={'Edit Session'}
								key={'edit-session'}
							/>,
							<Button
								variant={'text-disabled'}
								text={'Delete Session'}
								key={'delete-session'}
							/>,
						]
					}
				/> :
				<Dropdown
					variant={'contained'}
					label={'Session'}
					menu={
						[
							<Button
								variant={'text'}
								text={'New Session'}
								onClick={handleNewSession}
								key={'new-session'}
							/>,
							<Button
								variant={'text'}
								text={'Edit Session'}
								onClick={handleEditSession}
								key={'edit-session'}
							/>,
							<Button
								variant={'text'}
								text={'Delete Session'}
								onClick={handleDeleteSession}
								key={'delete-session'}
							/>,
						]
					}
				/>
	);

	// Dropdowns
	const dropdowns = (
		<>
			{studentDropdown}
			{sessionDropdown}
		</>
	);

	// Elements of modal
	const modalChildren = (
		<>
			<Input
				label={'First Name *'}
				maxLength={255}
				name={'firstname'}
				error={firstname.length > 0}
				errorText={'First Name is required!'}
				value={firstname}
				type={'text'}
				required={true}
				ref={firstnameRef}
				onChange={(e): void => handleFirstnameChangeInput(e)}
			/>
			<Input
				label={'Last Name *'}
				maxLength={255}
				name={'lastname'}
				error={lastname.length > 0}
				errorText={'Last Name is required!'}
				value={lastname}
				type={'text'}
				required={true}
				onChange={(e): void => handleLastnameChangeInput(e)}
			/>
		</>
	);

	// Modal with different types for different situations.
	const modal = firstname.trim().length > 0 && lastname.trim().length > 0 ?
		<Modal
			label={'New Student'}
			type={'edit'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		>
			{modalChildren}
		</Modal> :
		<Modal
			label={'New Student'}
			type={'edit-disabled'}
			onCancelClick={handleCancelClick}
		>
			{modalChildren}
		</Modal>;

	// Complete body element
	const bodyContent = students.length > 0 ?
		<section className={classes.body}>
			<Table />
		</section> :
		sessions.length === 0 ?
			<strong className={classes.hint}>Please add a student to this class!</strong> :
			<strong className={classes.hint}>Something went wrong! Please inform the creator.</strong>;

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
									text={'New student added successfully!'}
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
			<Main title={selectedClass.classname} buttons={dropdowns}>
				{bodyContent}
			</Main>
		</>
	);
};

export default Class;