import * as React from 'react';
import { Link } from 'react-router-dom';

import classes from '../Errors.module.scss';

/**
 * Functional component that returns unauthorized page.
 *
 * @returns {JSX.Element} Unautorized page.
 */
const Unauthorized = (): JSX.Element => {

	return (
		<section className={classes.body}>
			<section className={classes.message}>
				{/* Header */}
				<strong className={classes.title}>
					<p>OOPS!</p>
					<p>You are not authorized to visit this page!</p>
				</strong>
				{/* Link */}
				<Link
					to={'/'}
					className={classes.link}
				>
					Please click here to sign up.
				</Link>
			</section>
		</section>
	);
};

export default Unauthorized;