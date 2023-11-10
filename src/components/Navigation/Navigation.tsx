import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import classes from './Navigation.module.scss';
import Logo from '../UI/Logo/Logo';
import NavigationButton from '../UI/NavigationButton/NavigationButton';
import { logout } from '@/store/slice/authSlice';

/**
 * Functional component for sidebar of dashboard.
 *
 * @returns {JSX.Element} Navigation or Sidebar of dashboard.
 */
const Navigation = (): JSX.Element => {
	// Router-dom hook
	const navigate = useNavigate();
	
	const dispatch = useDispatch();

	function handleHomeClick (): void {
		navigate('/home');
	}

	function handleLogoutClick (): void {
		Cookies.remove('access_token');
		localStorage.clear();

		dispatch(logout());

		navigate('/');
	}

	return (
		<nav className={classes.sidebar}>
			{/* Logo */}
			<div className={classes.logo}>
				<Logo />
			</div>
			{/* Body */}
			<div className={classes.navigation}>
				<NavigationButton
					variant={'icon-text'}
					text={'Home'}
					icon={'home'}
					onClick={handleHomeClick}
				/>
			</div>
			<div className={classes.logout}>
				<NavigationButton
					variant={'icon-text'}
					text={'Logout'}
					icon={'logout'}
					onClick={handleLogoutClick}
				/>
			</div>
		</nav>
	);
};

export default Navigation;