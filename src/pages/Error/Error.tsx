import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import classes from '../Errors.module.scss';

/**
 * Functional component that returns error page.
 *
 * @returns {JSX.Element} Error page.
 */
const Error = (): JSX.Element => {
	// Router-dom hook
	const navigate = useNavigate();

	// Handler
	function handleClick (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
		e.preventDefault();
		navigate(-1);
	}

	return (
		<section className={classes.body}>
			<section className={classes.message}>
				{/* Header */}
				<strong className={classes.title}>
					<p>OOPS!</p>
					<p>Something went wrong!</p>
				</strong>
				{/* Link */}
				<Link
					to={'..'}
					onClick={(e): void => handleClick(e)}
					className={classes.link}
				>
					Please click here and go back.
				</Link>
			</section>
		</section>
	);
};

export default Error;