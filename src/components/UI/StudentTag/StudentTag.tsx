import * as React from 'react';
import classNames from 'classnames';

import { StudentTagProps } from '$/declaration';
import classes from './StudentTag.module.scss';
import Button from '../Button/Button';

/**
 * Functional component for a tag with students name and his situation (absent/present).
 * This Element has three variants:
 * 1. absent
 * 2. present
 * 3. unresolved (default)
 * 
 * Note: The unresolved variant is the default variant!
 * 
 * @param {string} text Name of the student.
 * @param {string} variant Type of the tag.
 * @param {MouseEventHandler} onClick Event handler for click on tag to edit student's situation.
 * @param {MouseEventHandler} onAbsentClick Event handler for click on absent button.
 * @param {MouseEventHandler} onPresentClick Event handler for click on present button.
 *
 * @returns {JSX.Element} A tag with students name to either add or edit student's situation.
 */
const StudentTag = ({
	text,
	variant,
	onAbsentClick,
	onClick,
	onPresentClick
}: StudentTagProps): JSX.Element => {

	let studentTag;

	switch (variant) {
		case 'absent':
			studentTag = (
				<button
					className={classNames(classes.button, classes.absent)}
					onClick={onClick}
				>
					{/* Student's name */}
					<strong
						className={classNames(classes.text, classes.fullname)}
						role={'text'}
					>
						{text}
					</strong>
					{/* Student's situation */}
					<strong
						className={classNames(classes.text, classes.situation)}
						role={'situation'}
					>
						Absent
					</strong>
				</button>
			);
			break;
		case 'present':
			studentTag = (
				<button
					className={classNames(classes.button, classes.present)}
					onClick={onClick}
				>
					{/* Student's name */}
					<strong
						className={classNames(classes.text, classes.fullname)}
						role={'text'}
					>
						{text}
					</strong>
					{/* Student's situation */}
					<strong
						className={classNames(classes.text, classes.situation)}
						role={'situation'}
					>
						Present
					</strong>
				</button>
			);
			break;
		default:
			studentTag = (
				<div
					className={classNames(classes.button, classes.unresolved)}
					role={'tag'}
				>
					{/* Student's name */}
					<strong
						className={classNames(classes.text, classes.fullname)}
						role={'text'}
					>
						{text}
					</strong>
					{/* Student's situation */}
					<div className={classes.buttons} role={'action'}>
						<Button
							variant={'text-slim'}
							text={'Absent'}
							onClick={onAbsentClick}
						/>
						<Button
							variant={'contained-slim'}
							text={'Present'}
							onClick={onPresentClick}
						/>
					</div>
				</div>
			);
	}

	return studentTag;
};

export default StudentTag;