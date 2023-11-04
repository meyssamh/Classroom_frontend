import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import Logo from '@/components/UI/Logo/Logo';
import Background from '#/images/Background.jpg';
import classes from './Signup.module.scss';
import Input from '@/components/UI/Input/Input';
import Button from '@/components/UI/Button/Button';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { RootState } from '@/store';
import { fetchSignup } from '@/store/action/authActions';
import { ValidationCheck } from '$/declaration';

/**
 * Functional component that returns sign up page.
 *
 * @returns {JSX.Element} Sign up page
 */
const Signup = (): JSX.Element => {
	// Component state
	const [firstname, setFirstname] = React.useState<string>('');
	const [lastname, setLastname] = React.useState<string>('');
	const [username, setUsername] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [confirmPassword, setConfirmPassword] = React.useState<string>('');
	const [validFirstname, setValidFirstname] = React.useState<boolean>(false);
	const [validLastname, setValidLastname] = React.useState<boolean>(false);
	const [validUsername, setValidUsername] = React.useState<boolean>(false);
	const [validEmail, setValidEmail] = React.useState<boolean>(false);
	const [validPassword, setValidPassword] = React.useState<boolean>(false);
	const [validConfirmPassword, setValidConfirmPassword] = React.useState<ValidationCheck>({
		error: false,
		errorText: '',
	});
	const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);

	// Ref
	const firstnameRef = React.useRef<HTMLInputElement>(null);

	// Component hook
	React.useEffect(() => {
		if (firstnameRef.current) {
			firstnameRef.current.focus();
		}
	}, []);

	// Redux state
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.auth.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.auth.error);

	// Regex for validation
	const nameRegex = /^[a-zA-Z]+$/;
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Router-dom hook
	const navigate = useNavigate();

	// Input validation to check if button should be disabled or not.
	const buttonDisabler = !validFirstname &&
		!validLastname &&
		!validUsername &&
		username.trim().length > 0 &&
		!validEmail &&
		email.length > 0 &&
		!validPassword &&
		password.length > 0 &&
		!validConfirmPassword.error &&
		confirmPassword.length > 0 ?
		false :
		true;

	// Handlers
	function handleChangeFirstname (e: React.ChangeEvent<HTMLInputElement>): void {
		setFirstname(e.target.value);

		if (e.target.value.trim().length === 0) {
			setValidFirstname(false);
		} else {
			if (e.target.value.match(nameRegex)) {
				setValidFirstname(false);
			} else {
				setValidFirstname(true);
			}
		}
	}

	function handleChangeLastname (e: React.ChangeEvent<HTMLInputElement>): void {
		setLastname(e.target.value);

		if (e.target.value.trim().length === 0) {
			setValidLastname(false);
		} else {
			if (e.target.value.match(nameRegex)) {
				setValidLastname(false);
			} else {
				setValidLastname(true);
			}
		}
	}

	function handleChangeUsername (e: React.ChangeEvent<HTMLInputElement>): void {
		setUsername(e.target.value);

		if (e.target.value.trim().length < 4) {
			setValidUsername(true);
		} else {
			setValidUsername(false);
		}
	}

	function handleChangeEmail (e: React.ChangeEvent<HTMLInputElement>): void {
		setEmail(e.target.value);

		if (e.target.value.match(emailRegex) && e.target.value.length > 0) {
			setValidEmail(false);
		} else {
			setValidEmail(true);
		}
	}

	function handleChangePassword (e: React.ChangeEvent<HTMLInputElement>): void {
		setPassword(e.target.value);

		if (e.target.value.length < 8) {
			setValidPassword(true);
		} else {
			setValidPassword(false);
		}
	}

	function handleChangeConfirmPassword (e: React.ChangeEvent<HTMLInputElement>): void {
		setConfirmPassword(e.target.value);

		let validation = { error: false, errorText: '' };

		if (e.target.value === password && e.target.value.length === password.length) {
			if (e.target.value.length < 8) {
				validation = {
					error: true,
					errorText: 'Password must have at least 8 characters!'
				};
			} else {
				validation = {
					error: false,
					errorText: ''
				};
			}
		} else {
			validation = {
				error: true,
				errorText: 'Password and Confirm Password are not the same!'
			};
		}

		setValidConfirmPassword(validation);
	}

	function handleSignupClick (): void {
		if (!buttonDisabler) {
			dispatch(fetchSignup({ firstname, lastname, username, email, password, confirmPassword }))
				.then((res) => {
					if (res.type === 'auth/submit/fulfilled') {
						navigate('/home');
					}
				});
		} else {
			setOpenSnackbar(true);
		}
	}

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
			{/* Background image */}
			<img src={Background} className={classes.image} alt={'Background'} />
			{/* Logo */}
			<section className={classes.logo}>
				<Logo />
			</section>
			{/* Body */}
			<main className={classes.main}>
				{/* Hint texts section */}
				<section className={classes.note}>
					<strong className={classes.welcome}>Welcome to Classroom!</strong>
					<p className={classes.text}>
						This desktop platform provides you with the convenience of monitoring and managing your course attendees with ease.
					</p>
					<p className={classes.text}>
						Attention: Our platform, including its mobile version, is currently under development. For further information, please contact seyedmeyssam.hosseinifard(at)gmail.com!
					</p>
				</section>
				{/* Main section */}
				<section className={classes.body}>
					{/* Header */}
					<section>
						<strong className={classes.title}>Sign up</strong>
						<section className={classes.line}></section>
					</section>
					{/* Form */}
					<form className={classes.form}>
						{/* Inputs */}
						<section>
							<Input
								label={'First Name'}
								maxLength={50}
								type={'text'}
								error={validFirstname}
								errorText={'First Name must have only letters!'}
								name={'firstname'}
								value={firstname}
								ref={firstnameRef}
								required={false}
								onChange={(e): void => handleChangeFirstname(e)}
							/>
						</section>
						<section className={classes.input}>
							<Input
								label={'Last Name'}
								maxLength={50}
								type={'text'}
								error={validLastname}
								errorText={'Last Name must have only letters!'}
								name={'lastname'}
								value={lastname}
								required={false}
								onChange={(e): void => handleChangeLastname(e)}
							/>
						</section>
						<section className={classes.input}>
							<Input
								label={'User Name *'}
								maxLength={50}
								type={'text'}
								error={validUsername}
								errorText={'User Name must have at least 4 characters!'}
								name={'username'}
								value={username}
								required={true}
								onChange={(e): void => handleChangeUsername(e)}
							/>
						</section>
						<section className={classes.input}>
							<Input
								label={'E-Mail *'}
								maxLength={255}
								type={'email'}
								error={validEmail}
								errorText={'E-Mail address is not valid!'}
								name={'email'}
								value={email}
								required={true}
								onChange={(e): void => handleChangeEmail(e)}
							/>
						</section>
						<section className={classes.input}>
							<Input
								label={'Password *'}
								maxLength={255}
								type={'password'}
								error={validPassword}
								errorText={'Password must have at least 8 characters!'}
								name={'password'}
								value={password}
								required={true}
								onChange={(e): void => handleChangePassword(e)}
							/>
						</section>
						<section className={classes.input}>
							<Input
								label={'Confirm Password *'}
								maxLength={255}
								type={'password'}
								error={validConfirmPassword.error}
								errorText={validConfirmPassword.errorText}
								name={'conformpassword'}
								value={confirmPassword}
								required={true}
								onChange={(e): void => handleChangeConfirmPassword(e)}
							/>
						</section>
						<strong className={classes.required}>* Required</strong>
					</form>
					{/* Sign up button */}
					{
						buttonDisabler ?
							<Button
								variant={'contained-long-disabled'}
								text={'Sign up'}
							/> :
							<Button
								variant={'contained-long'}
								text={'Sign up'}
								onClick={handleSignupClick}
							/>
					}
					{/* Link to login page */}
					<section className={classes.link}>
						<Link to={'login'} className={classes.a}>
							You have already an account?
						</Link>
					</section>
				</section>
			</main >
		</>
	);
};

export default Signup;