import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import Logo from '@/components/UI/Logo/Logo';
import Background from '#/images/Background.jpg';
import classes from './Login.module.scss';
import Input from '@/components/UI/Input/Input';
import Button from '@/components/UI/Button/Button';
import { fetchLogin } from '@/store/action/authActions';
import { RootState } from '@/store';
import Spinner from '@/components/UI/Spinner/Spinner';
import Snackbar from '@/components/UI/Snackbar/Snackbar';
import { ValidationCheck } from '$/declaration';

/**
 * Functional component that returns login page.
 *
 * @returns {JSX.Element} Login page.
 */
const Login = (): JSX.Element => {
	// Component state
	const [username, setUsername] = React.useState<string>('');
	const [usernameError, setUsernameError] = React.useState<ValidationCheck>({
		error: false,
		errorText: '',
	});
	const [password, setPassword] = React.useState<string>('');
	const [passwordError, setPasswordError] = React.useState<ValidationCheck>({
		error: false,
		errorText: '',
	});
	const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);

	// Ref
	const usernameRef = React.useRef<HTMLInputElement>(null);

	// Component hook
	React.useEffect(() => {
		if (usernameRef.current) {
			usernameRef.current.focus();
		}
	}, []);

	// Redux state
	const promiseLoading: 'idle' | 'pending' | 'succeeded' | 'failed' = useSelector((state: RootState) => state.auth.loading);
	const promiseError: string | null = useSelector((state: RootState) => state.auth.error);

	// Error message
	const errorMessage = promiseError === null ? 'Something went wrong!' : promiseError;

	// ThunkDispatch hook
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

	// Router-dom hook
	const navigate = useNavigate();

	// Input validation to check if button should be disabled or not.
	const buttonDisabler = !usernameError.error &&
		username.trim().length > 0 &&
		!passwordError.error &&
		password.length > 0 ?
		false :
		true;

	// Handlers
	function handleChangeUsername (e: React.ChangeEvent<HTMLInputElement>): void {
		setUsername(e.target.value);

		let validation = { error: false, errorText: '' };

		if (e.target.value.length < 4) {
			validation = {
				error: true,
				errorText: 'User Name must have at least 4 characters!'
			};
		}
		setUsernameError(validation);
	}

	function handleChangePassword (e: React.ChangeEvent<HTMLInputElement>): void {
		setPassword(e.target.value);

		let validation = { error: false, errorText: '' };

		if (e.target.value.length < 8) {
			validation = {
				error: true,
				errorText: 'Password must have at least 8 characters!'
			};
		}
		setPasswordError(validation);
	}

	function handleLoginClick (): void {
		if (!buttonDisabler) {
			dispatch(fetchLogin({ username, password }))
				.then((res) => {
					if (res.type === 'auth/login/fulfilled') {
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
				<section className={classes.body}>
					{/* Header */}
					<section>
						<strong className={classes.title}>Login</strong>
						<section className={classes.line}></section>
					</section>
					{/* Form */}
					<form className={classes.form}>
						{/* Inputs */}
						<Input
							name={'username'}
							value={username}
							label={'User Name *'}
							error={usernameError.error}
							errorText={usernameError.errorText}
							maxLength={50}
							ref={usernameRef}
							required={true}
							type={'text'}
							onChange={(e): void => handleChangeUsername(e)}
						/>
						<section className={classes.password}>
							<Input
								name={'password'}
								value={password}
								label={'Password *'}
								error={passwordError.error}
								errorText={passwordError.errorText}
								maxLength={255}
								required={true}
								type={'password'}
								onChange={(e): void => handleChangePassword(e)}
							/>
						</section>
						<strong className={classes.required}>* Required</strong>
					</form>
					{/* Login button */}
					{
						buttonDisabler ?
							<Button
								variant={'contained-long-disabled'}
								text={'Login'}
							/> :
							<Button
								variant={'contained-long'}
								text={'Login'}
								onClick={handleLoginClick}
							/>

					}
					{/* Link to sign up page */}
					<section className={classes.link}>
						<Link to={'/'} className={classes.a}>
							You don&apos;t have an account?
						</Link>
					</section>
				</section>
			</main>
		</>
	);
};

export default Login;