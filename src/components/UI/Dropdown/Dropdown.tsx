import * as React from 'react';

import listenForOutsideClick from '@/middleware/listenForOutsideClick';
import { DropdownProps } from '$/declaration';
import classes from './Dropdown.module.scss';
import Button from '../Button/Button';

/**
 * Functional dropdown components.
 *
 * @param {number} counter A counter to trigger useEffect and close the dropdown,
 * when we do not use navigate in onClick event handler! Optional!
 * @param {string} label Label of the dropdown button.
 * @param {JSX.Element[]} menu Elements in the dropdown menu.
 * @param {string} variant variant of the dropdown button.
 * It can be either contained or contained-disabled!
 * 
 * @returns {JSX.Element} A dropdown for the header of the dashboard's body.
 */
const Dropdown = ({ counter, label, menu, variant }: DropdownProps): JSX.Element => {	
	// Components state
	const menuRef = React.useRef<HTMLElement>(null);
	const [listening, setListening] = React.useState<boolean>(false);
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	// Handler
	const toggle = (): void => setIsOpen(!isOpen);

	// Component hooks
	React.useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

	React.useEffect(() => {
		setIsOpen(false);
	}, [counter]);

	// TODO: If button variant contains 'disabled', onClick property has to be removed!
	return (
		<section ref={menuRef} className={classes.dropdown}>
			{/* Button for showing dropdown */}
			<Button variant={variant} text={label} onClick={toggle} />
			{/* Dropdown menu */}
			{isOpen ? (
				menu !== null ?
					<ul className={classes.menu}>
						{menu.map((menuitem, index) => (
							// Dropdown items
							<li
								className={classes.menuItem}
								key={index}
							>
								{menuitem}
							</li>
						))}
					</ul> :
					null
			) :
				null
			}
		</section>
	);
};

export default Dropdown;