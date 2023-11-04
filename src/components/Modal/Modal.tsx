import * as React from 'react';

import { ModalProps } from '$/declaration';
import Overlay from '../UI/Overlay/Overlay';
import classes from './Modal.module.scss';
import IconButton from '../UI/IconButton/IconButton';

/**
 * Functional modal component.
 *
 * @param {string} type - Type of modal. It can be eather edit, edit-disabled or delete.
 * @param {string} label - Label of modal.
 * @param {JSX.Element} children - Input fields used in edit or edit-disabled type modal. Optional!
 * @param {string} question - Question we use in delete type modal. Optional!
 * @param {MouseEventHandler} onCancelClick - Eventhandler for cancel button.
 * @param {MouseEventHandler} onProceedClick - Eventhandler for submit or delete button. Optional!
 * 
 * @returns {JSX.Element} A modal with its own overlay.
 */
const Modal = ({
	type,
	label,
	children,
	question,
	onCancelClick,
	onProceedClick
}: ModalProps): JSX.Element => {

	return (
		<Overlay>
			{/* Modal */}
			<section className={classes.modal}>
				{/* Header */}
				<section>
					<strong className={classes.title}>{label}</strong>
					<section className={classes.line}></section>
				</section>
				{/* Body */}
				{type === 'edit' || type === 'edit-disabled' ?
					(
						// input fields
						<section className={classes.input}>
							{children}
							<strong className={classes.required}>* Required</strong>
						</section>
					) :
					(
						// Delete question
						<section className={classes.question}>{question}</section>
					)
				}
				{/* Actions */}
				<section className={classes.actions}>
					{/* Cancel button */}
					<section>
						{type === 'edit' || type === 'edit-disabled' ?
							<IconButton
								variant={'outlined'}
								text={'Cancel'}
								icon={'cancel'}
								onClick={onCancelClick}
							/> :
							<IconButton
								variant={'contained'}
								text={'Cancel'}
								icon={'cancel'}
								onClick={onCancelClick}
							/>
						}
					</section>
					<section className={classes.action}>
						{type === 'edit' ?
							// Submit button
							<IconButton
								variant={'contained'}
								text={'Submit'}
								icon={'submit'}
								onClick={onProceedClick}
							/> :
							type === 'edit-disabled' ?
								// Disabled Submit button
								<IconButton
									variant={'contained-disabled'}
									text={'Submit'}
									icon={'submit'}
								/> :
								// Delete button
								<IconButton
									variant={'contained-danger'}
									text={'Delete'}
									icon={'submit-danger'}
									onClick={onProceedClick}
								/>
						}
					</section>
				</section>
			</section>
		</Overlay>
	);
};

export default Modal;