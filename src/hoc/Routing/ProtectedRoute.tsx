import * as React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '@/store';
import Unauthorized from '@/pages/Unauthorized/Unauthorized';

/**
 * Higher order component that do not let unauthorized users visit the page.
 *
 * @returns {JSX.Element} Either unauthorized page or the page users wants to see.
 */
const ProtectedRoute = (): JSX.Element => {
	// Redux state
	const username: string = useSelector((state: RootState) => state.auth.data.user.username);

	// Show unauthorized screen if no user is found in redux store
	if (username.trim().length === 0) {
		return (
			<Unauthorized />
		);
	}

	// Returns child route elements
	return <Outlet />;
};

export default ProtectedRoute;