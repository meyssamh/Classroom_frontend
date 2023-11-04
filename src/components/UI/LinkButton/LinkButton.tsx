import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { LinkButtonProps } from '$/declaration';
import classes from './LinkButton.module.scss';

/**
 * Functional component of a button with link navigation functionality.
 * This component has four variants:
 * 
 * 1. contained
 * 2. contained-slim
 * 3. text
 * 4. text-disabled (default)
 *
 * Note: The text-disabled varinat is the default variant!
 * 
 * @param {string} text Text to show in the button.
 * @param {string} link The link we want to navigate to. Optional!
 * @param {string} variant Variant of the LinkButton.
 * 
 * @returns {JSX.Element} A button with link navigation ability.
 */
const LinkButton = ({ text, link, variant }: LinkButtonProps): JSX.Element => {

	// If link is undefined, replaces it with empty string to prevent error
	const to = link === undefined ? '' : link;

	let element;

	switch (variant) {
		case 'contained':
			element = (
				<Link className={classes.link} to={to}>
					<button className={classes.button}>
						{text}
					</button>
				</Link>
			);
			break;
		case 'contained-slim':
			element = (
				<Link className={classes.link} to={to}>
					<button className={classNames(classes.button, classes.slim)}>
						{text}
					</button>
				</Link>
			);
			break;
		case 'text':
			element = (
				<Link className={classes.link} to={to}>
					<button className={classes.text}>
						{text}
					</button>
				</Link>
			);
			break;
		default:
			element = (
				<button
					className={classNames(classes.link, classes.text, classes.disabled)}
					disabled={true}
				>
					{text}
				</button>
			);
	}

	return element;
};

export default LinkButton;