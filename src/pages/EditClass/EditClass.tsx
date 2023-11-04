import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { Classes } from '$/redux';
import { RootState } from '@/store';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import Tag from '@/components/UI/Tag/Tag';
import classes from '../Pages.module.scss';
import Main from '^/Main/Main';
import Input from '@/components/UI/Input/Input';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { fetchEditClass } from '@/store/action/homeActions';

/**
 * Functional component that returns edit class page.
 *
 * @returns {JSX.Element} Edit class page.
 */
const EditClass = (): JSX.Element => {
	// Component state
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [classId, setClassId] = React.useState<number>(0);
	const [classname, setClassname] = React.useState<string>('');
	const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);

	// Ref
	const classnameRef = React.useRef<HTMLInputElement>(null);

	// Component hook
	React.useEffect(() => {
		if (classnameRef.current) {
			classnameRef.current.focus();
		}
	}, [modalOpen]);

	// Redux state
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.home.loading);
	const userClasses: Classes[] = useSelector((state: RootState) => state.home.data.classes);
	const promiseError: string | null = useSelector((state: RootState) => state.home.error);

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// Handlers
	function handleEditClassname (id: number): void {
		const selectedClass = userClasses.filter(course => {
			if (course.id === id) {
				return course;
			} else {
				return null;
			}
		});
		setClassId(id);
		setClassname(selectedClass[0].classname);
		setModalOpen(true);
	}

	function handleChangeInput (e: React.ChangeEvent<HTMLInputElement>): void {
		setClassname(e.target.value);
	}

	function handleCancelClick (): void {
		setModalOpen(false);
		setClassname('');
		setClassId(0);
	}

	function handleProceedClick (): void {
		if (classname.trim().length > 0) {
			const toBeEditedClass = { id: classId, classname };
			setModalOpen(false);
			dispatch(fetchEditClass(toBeEditedClass));
			setClassname('');
			setClassId(0);
		} else {
			setClassname('');
			setClassId(0);
			setModalOpen(false);
			setOpenSnackbar(true);
		}
	}

	// Button in header of body, to return to home page.
	const homeButton = <LinkButton variant={'contained'} text={'Go to Home'} link={'/home'} />;

	// Elements of modal
	const modalChildren = (
		<Input
			label={'Class Name *'}
			maxLength={255}
			name={'classname'}
			error={classname.trim().length > 0}
			errorText={'Class Name is required!'}
			value={classname}
			required={true}
			type={'text'}
			ref={classnameRef}
			onChange={(e): void => handleChangeInput(e)}
		/>
	);

	// Modal with different types for different situations.
	const modal = classname.trim().length > 0 ?
		<Modal
			label={'Edit Class'}
			type={'edit'}
			onCancelClick={handleCancelClick}
			onProceedClick={handleProceedClick}
		>
			{modalChildren}
		</Modal> :
		<Modal
			label={'Edit Class'}
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
					variant={'edit'}
					text={course.classname}
					buttonText={'Edit Class'}
					key={course.id}
					onClick={handleEditClassname.bind(this, id)}
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
									text={'Class edited successfully!'}
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
			<Main title={'Edit Class'} buttons={homeButton}>
				{bodyContent}
			</Main>
		</>
	);
};

export default EditClass;