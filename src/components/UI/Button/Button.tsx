import * as React from 'react';
import classNames from 'classnames';

import { ButtonProps } from '$/declaration';
import classes from './Button.module.scss';

/**
 * Functional button component that returns eleven variant of buttons:
 * 1. text
 * 2. text-slim
 * 3. text-disabled
 * 4. outlined
 * 5. contained-danger
 * 6. contained-danger-slim
 * 7. contained-disabled
 * 8. contained-long
 * 9. contained-long-disabled
 * 10. contained-slim
 * 11. contained (default)
 * 
 * Note: The contained variant is the default variant!
 *
 * @param {string} text Button Text.
 * @param {string} variant Variant of button.
 * @param {MouseEventHandler} onClick Eventhandler for the button. Optional!
 * 
 * @returns {JSX.Element} A button of your choice.
 */
const Button = ({ text, variant, onClick }: ButtonProps): JSX.Element => {

	let button;

	switch (variant) {
		case 'text':
			button = (
				<button
					className={classNames(classes.text, classes.textButton)}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		case 'text-slim':
			button = (
				<button
					className={
						classNames(
							classes.text,
							classes.textButton,
							classes.textSlim
						)
					}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		case 'text-disabled':
			button = (
				<button
					className={classNames(classes.text, classes.textButton)}
					disabled
				>
					{text}
				</button>
			);
			break;
		case 'outlined':
			button = (
				<button
					className={classNames(classes.text, classes.outlinedButton)}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		case 'contained-danger':
			button = (
				<button
					className={
						classNames(
							classes.text,
							classes.containedButton,
							classes.danger
						)
					}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		case 'contained-danger-slim':
			button = (
				<button
					className={
						classNames(
							classes.text,
							classes.containedButton,
							classes.danger,
							classes.slim
						)
					}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		case 'contained-disabled':
			button = (
				<button
					className={classNames(classes.text, classes.containedButton)}
					disabled
				>
					{text}
				</button>
			);
			break;
		case 'contained-long':
			button = (
				<button
					className={
						classNames(
							classes.text,
							classes.containedButton,
							classes.long
						)
					}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		case 'contained-long-disabled':
			button = (
				<button
					className={
						classNames(
							classes.text,
							classes.containedButton,
							classes.long
						)
					}
					disabled
				>
					{text}
				</button>
			);
			break;
		case 'contained-slim':
			button = (
				<button
					className={
						classNames(
							classes.text,
							classes.containedButton,
							classes.slim
						)
					}
					onClick={onClick}
				>
					{text}
				</button>
			);
			break;
		default:
			button = (
				<button
					className={classNames(classes.text, classes.containedButton)}
					onClick={onClick}
				>
					{text}
				</button>
			);
	}

	return button;
};

export default Button;