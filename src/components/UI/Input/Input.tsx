import * as React from 'react';
import classNames from 'classnames';

import { InputProps } from '$/declaration';
import classes from './Input.module.scss';

/**
 * ForwardRef exotic component of an input field. It can have its own ref!
 * 
 * @param {string} name Name of the input field.
 * @param {string} value Value of the input field.
 * @param {string} label Label of the input field.
 * @param {boolean} error Whether the input value is correct or incorrect.
 * @param {string} errorText Text to show if the input is incorrect. Optional!
 * @param {boolean} required Whether the input field is required or not.
 * @param {string} type Type of the input field.
 * @param {number} maxLength Max length for input value. It can be 50, 100 or 255.
 * @param {ChangeEventHandler} onChange Changes the value of input field.
 * 
 * @returns {JSX.Element} An input field with its own ref.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	
	// Chooses right css style in case input value is not correct
	const labelClassNames = props.error === true ?
		classNames(classes.label, classes.labelError) :
		classes.label;

	return (
		<div className={classes.inputContainer}>
			{/* Input field */}
			<input
				id={props.name}
				className={classes.input}
				type={props.type}
				name={props.name}
				value={props.value}
				maxLength={props.maxLength}
				placeholder={' '}
				ref={ref}
				required={props.required}
				onChange={props.onChange}
			/>
			{/* Background for when input field is focused */}
			<div className={classes.background} role={'background'}>
				{props.label}
			</div>
			{/* Label of input field */}
			<label className={labelClassNames} htmlFor={props.name} role={'label'}>
				{props.label}
			</label>
			{/* Error message */}
			{
				props.error === true ?
					<p className={classes.error}>{props.errorText}</p> :
					null
			}
		</div>
	);
});

Input.displayName = 'Input';

export default Input;