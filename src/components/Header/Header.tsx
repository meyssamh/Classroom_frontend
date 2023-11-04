import * as React from 'react';

import classes from './Header.module.scss';
import User from '../UI/User/User';
import DateInfo from '../UI/DateInfo/DateInfo';

/**
 * Functional component for header of dashboard.
 *
 * @returns {JSX.Element} Header of the dashboard.
 */
const Header = (): JSX.Element => {
	
	return (
		<div className={classes.header} role={'header'}>
			{/* User information */}
			<User />
			{/* Current date */}
			<DateInfo />
		</div>
	);
};

export default Header;