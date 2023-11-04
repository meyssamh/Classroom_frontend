import * as React from 'react';
import classNames from 'classnames';

import { IconButtonProps } from '$/declaration';
import classes from './IconButton.module.scss';

/**
 * Functional component for buttons with icon. IconButton has four variants:
 * 
 * 1. outlined
 * 2. contained (default)
 * 3. contained-disabled
 * 4. contained-danger
 * 
 * Note: The default variant is the contained variant!
 * 
 * @param {string} icon Type of the icon we want to use in the button.
 * It contains three icons: submit, submit-danger and cancel.
 * @param {string} variant Variant of the IconButton.
 * @param {string} text Text to show in the button.
 * @param {MouseEventHandler} onClick Eventhandler for the button. Optional!
 * 
 * @returns {JSX.Element} A button with icon.
 */
const IconButton = ({ icon, variant, text, onClick }: IconButtonProps): JSX.Element => {

	let iconButton;

	// SVGs
	const cancel = (
		<svg
			role={'icon'}
			xmlns="http://www.w3.org/2000/svg"
			width="27"
			height="27"
			viewBox="0 0 27 27"
			fill="none"
		>
			<path
				role={'iconPath'}
				d="M19.4062 7.59375L7.59375 19.4062"
				stroke="#2e3452"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				role={'iconPath'}
				d="M7.59375 7.59375L19.4062 19.4062"
				stroke="#2e3452"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const submitDisabled = (
		<svg
			role={'icon'}
			xmlns="http://www.w3.org/2000/svg"
			width="27"
			height="27"
			viewBox="0 0 27 27"
			fill="none"
		>
			<path
				role={'iconPath'}
				d="M6.46875 14.4748L9.38244 18.4655C10.2957 19.7163 12.1701 19.692 13.0507 18.4179L20.5312 7.59375"
				stroke="#a8a8a8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const submit = (
		<svg
			role={'icon'}
			xmlns="http://www.w3.org/2000/svg"
			width="27"
			height="27"
			viewBox="0 0 27 27"
			fill="none"
		>
			<path
				role={'iconPath'}
				d="M6.46875 14.4748L9.38244 18.4655C10.2957 19.7163 12.1701 19.692 13.0507 18.4179L20.5312 7.59375"
				stroke="#2e3452"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const submitDanger = (
		<svg
			role={'icon'}
			xmlns="http://www.w3.org/2000/svg"
			width="27"
			height="27"
			viewBox="0 0 27 27"
			fill="none"
		>
			<path
				role={'iconPath'}
				d="M7.59375 8.71875L8.54004 19.6012C8.64115 20.7639 9.6145 21.6562 10.7816 21.6562H16.2184C17.3855 21.6562 18.3589 20.7639 18.4599 19.6012L19.4062 8.71875"
				stroke="#fcfcfc"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				role={'iconPath'}
				d="M10.9688 8.4375V7.59375C10.9688 6.35111 11.9761 5.34375 13.2188 5.34375H13.7812C15.0239 5.34375 16.0312 6.35111 16.0312 7.59375V8.4375"
				stroke="#fcfcfc"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				role={'iconPath'}
				d="M5.625 8.71875H21.375"
				stroke="#fcfcfc"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	switch (variant) {
		case 'outlined':
			iconButton = (
				<button
					className={classNames(classes.button, classes.outlined)}
					onClick={onClick}
				>
					{cancel}
					<span className={classes.text} role={'text'}>
						Cancel
					</span>
				</button>
			);
			break;
		case 'contained-danger':
			iconButton = (
				<button
					className={classNames(classes.button, classes.containedDanger)}
					onClick={onClick}
				>
					{submitDanger}
					<span className={classes.text} role={'text'}>
						{text}
					</span>
				</button>
			);
			break;
		case 'contained-disabled':
			iconButton = (
				<button
					className={classNames(classes.button, classes.contained)}
					disabled={true}
				>
					{submitDisabled}
					<span className={classes.text} role={'text'}>
						Submit
					</span>
				</button>
			);
			break;
		default:
			iconButton = (
				<button
					className={classNames(classes.button, classes.contained)}
					onClick={onClick}
				>
					{icon === 'cancel' ? cancel : submit}
					<span className={classes.text} role={'text'}>
						{text}
					</span>
				</button>
			);
	}

	return iconButton;
};

export default IconButton;