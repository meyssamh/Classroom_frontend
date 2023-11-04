import * as React from 'react';

import classes from './Overlay.module.scss';

/**
 * Functional component of overlay.
 *
 * @param {JSX.Element} children Element or elements we want to use on top of overlay.
 * 
 * @returns {JSX.Element} An overlay to prevent incorrect user input.
 */
const Overlay = ({ children }: { children: JSX.Element }): JSX.Element => {
	
	return (
		<section role={'overlay'} className={classes.overlay}>
			{/* Child element */}
			<section className={classes.child}>
				{children}
			</section>
		</section>
	);
};

export default Overlay;