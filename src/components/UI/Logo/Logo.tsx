import * as React from 'react';

import Icon from '#/icons/blackboard.png';
import classes from './Logo.module.scss';

/**
 * Functional component of the logo and name of the website.
 *
 * @returns {JSX.Element} Logo and name of the website.
 */
const Logo = (): JSX.Element => {
	
	return (
		<div className={classes.logo} role={'logo'}>
			{/* Logo icon */}
			<img className={classes.icon} src={Icon} alt={'icon'} />
			{/* Logo name */}
			<strong className={classes.iconText} role={'text'}>Classroom</strong>
		</div>
	);
};

export default Logo;