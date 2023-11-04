import * as React from 'react';

import { TagProps } from '$/declaration';
import classes from './Tag.module.scss';
import Button from '../Button/Button';

/**
 * Functional component for three variants of tags. 
 * You can use this tag for open, edit and delete classes and
 * edit or delete students.
 * 
 * Tag variants:
 * 1. delete
 * 2. edit
 * 3. open (default)
 * 
 * Note: Open variant is the default variant!
 * 
 * @param {string} text Name of class or student.
 * @param {string} buttonText Button text.
 * @param {string} variant Variant of tag.
 * @param {MouseEventHandler} onClick Eventhandler for tag's button.
 * 
 * @returns {JSX.Element} A tag of your choice.
 */
const Tag = ({ text, buttonText, variant, onClick }: TagProps): JSX.Element => {

	let tag;

	switch (variant) {
		case 'delete':
			tag = (
				<div className={classes.tag} role={'delete'}>
					{/* Classname or Student's name */}
					<strong className={classes.text} role={'text'}>
						{text}
					</strong>
					{/* Delete button */}
					<Button
						variant={'contained-danger-slim'}
						text={buttonText}
						onClick={onClick}
					/>
				</div>
			);
			break;
		case 'edit':
			tag = (
				<div className={classes.tag} role={'edit'}>
					{/* Classname or Student's name */}
					<strong className={classes.text} role={'text'}>
						{text}
					</strong>
					{/* Edit button */}
					<Button
						variant={'contained-slim'}
						text={buttonText}
						onClick={onClick}
					/>
				</div>
			);
			break;
		default:
			tag = (
				<div className={classes.tag} role={'open'}>
					{/* Classname or Student's name */}
					<strong className={classes.text} role={'text'}>
						{text}
					</strong>
					{/* Open button */}
					<Button
						variant={'contained-slim'}
						text={buttonText}
						onClick={onClick}
					/>
				</div>
			);
	}

	return tag;
};

export default Tag;