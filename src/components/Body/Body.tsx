import * as React from 'react';

import { BodyProps } from '$/declaration';
import classes from './Body.module.scss';

/**
 * Functional component for body of dashboard.
 *
 * @param {string} title Title of the page.
 * @param {ReactNode} buttons Button/s at the top of body.
 * @param {ReactNode} children Content of the body.
 * 
 * @returns {JSX.Element} Body of the dashboard.
 */
const Body = ({ title, buttons, children }: BodyProps): JSX.Element => {
	
	return (
		<>
			{/* Header */}
			<section className={classes.header}>
				{/* Title */}
				<strong role={'title'} className={classes.title} title={title}>{title}</strong>
				{/* Buttons */}
				<section className={classes.button}>
					{buttons}
				</section>
			</section>
			{/* Body */}
			<section className={classes.children} role={'children'}>
				{children}
			</section>
		</>
	);
};

export default Body;