import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes } from '$/redux';
import { RootState } from '@/store';
import Tag from '@/components/UI/Tag/Tag';
import classes from '../Pages.module.scss';
import Main from '^/Main/Main';
import { fetchNewClass, fetchClasses } from '@/store/action/homeActions';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import Dropdown from '@/components/UI/Dropdown/Dropdown';
import Button from '@/components/UI/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/UI/Input/Input';
import { fetchClass } from '@/store/action/classActions';

/**
 * Functional component that returns home page.
 *
 * @returns {JSX.Element} Home page.
 */
const Home = (): JSX.Element => {
	// Component state
	const [dropdownCounter, setDropdownCounter] = React.useState<number>(0);
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [newClassname, setNewClassname] = React.useState<string>('');
	const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);

	// Ref
	const classnameRef = React.useRef<HTMLInputElement>(null);

	// Redux state
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.home.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.home.error);
	const userClasses: Classes[] = useSelector((state: RootState) => state.home.data.classes);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Router-dom hook
	const navigate = useNavigate();

	// Component hooks
	React.useEffect(() => {
		dispatch(fetchClasses());
	}, []);

	React.useEffect(() => {
		if (classnameRef.current) {
			classnameRef.current.focus();
		}
	}, [modalOpen]);

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// Handlers
	function handleNewClass (): void {
		setDropdownCounter(dropdownCounter + 1);
		setModalOpen(true);
	}

	function handleEditClass (): void {
		navigate('/edit-class');
	}

	function handleDeleteClass (): void {
		navigate('/delete-class');
	}

	function handleChangeInput (e: React.ChangeEvent<HTMLInputElement>): void {
		setNewClassname(e.target.value);
	}

	function handleCancelClick (): void {
		setModalOpen(false);
		setNewClassname('');
	}

	function handleProceedClick (): void {
		if (newClassname.trim().length > 0) {
			setModalOpen(false);
			dispatch(fetchNewClass(newClassname));
			setNewClassname('');
		} else {
			setNewClassname('');
			setModalOpen(false);
			setOpenSnackbar(true);
		}
	}

	function handleClickOpenClass (id: number): void {
		dispatch(fetchClass(id));
		navigate('/class');
	}

	// Dropdown child elements
	const classDropdown = userClasses.length === 0 ?
		(
			<Dropdown
				variant={'contained'}
				counter={dropdownCounter}
				label={'Class'}
				menu={
					[
						<Button
							variant={'text'}
							text={'New Class'}
							onClick={handleNewClass}
							key={'new-class'}
						/>,
						<Button
							variant={'text-disabled'}
							text={'Edit Class'}
							key={'edit-class'}
						/>,
						<Button
							variant={'text-disabled'}
							text={'Delete Class'}
							key={'delete-class'}
						/>,
					]
				}
			/>
		) :
		(
			<Dropdown
				variant={'contained'}
				counter={dropdownCounter}
				label={'Class'}
				menu={
					[
						<Button
							variant={'text'}
							text={'New Class'}
							onClick={handleNewClass}
							key={'new-class'}
						/>,
						<Button
							variant={'text'}
							text={'Edit Class'}
							onClick={handleEditClass}
							key={'edit-class'}
						/>,
						<Button
							variant={'text'}
							text={'Delete Class'}
							onClick={handleDeleteClass}
							key={'delete-class'}
						/>,
					]
				}
			/>
		);

	// Elements of modal
	const modalChildren = (
		<Input
			label={'Class Name *'}
			maxLength={255}
			name={'classname'}
			error={newClassname.length > 0}
			errorText={'Class Name is required!'}
			value={newClassname}
			required={true}
			type={'text'}
			ref={classnameRef}
			onChange={(e): void => handleChangeInput(e)}
		/>
	);

	// Modal with different types for different situations.
	const modal = newClassname.trim().length > 0 ?
		<Modal
			label={'New Class'}
			type={'edit'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		>
			{modalChildren}
		</Modal> :
		<Modal
			label={'New Class'}
			type={'edit-disabled'}
			onCancelClick={handleCancelClick}
		>
			{modalChildren}
		</Modal>;

	let validUserClasses: JSX.Element[];

	if (userClasses.length !== 0) {
		validUserClasses = userClasses.map((course: Classes) => {
			const id = course.id;
			return (
				<Tag
					variant={'open'}
					text={course.classname}
					buttonText={'Open Class'}
					key={id}
					onClick={handleClickOpenClass.bind(this, id)}
				/>
			);
		});
	} else {
		validUserClasses = [];
	}

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
									text={'New class added successfully!'}
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
			<Main title={'Home'} buttons={classDropdown}>
				{bodyContent}
			</Main>
		</>
	);
};

export default Home;