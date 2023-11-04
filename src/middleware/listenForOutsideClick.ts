/**
 * A module that listens to the clicks outside of the dropdown.
 *
 * @module listenForOutsideClicks
 * @param {boolean} listening whether if the dropdown is open or not,
 * so module has to listen to clicks or not.
 * @param {(arg: boolean) => void} setListening Changes the listening state.
 * @param {{ current: any; }} menuRef Ref of dropdown.
 * @param {(arg: boolean) => void} setIsOpen Closes the dropdown.
 * 
 * @returns {void} Detects clicks outside of the dropdown.
 */
export default function listenForOutsideClicks (
	listening: boolean,
	setListening: (arg: boolean) => void,
	menuRef: { current: any; },
	setIsOpen: (arg: boolean) => void
) {
	return (): void => {
		
		if (listening) {
			return;
		}

		if (!menuRef.current) {
			return;
		}

		setListening(true);

		['click', 'touchstart'].forEach(() => {
			document.addEventListener('click', (evt) => {
				const cur = menuRef.current;
				const node = evt.target;
				if (cur !== null) {
					if (cur.contains(node)) return;
				}
				setIsOpen(false);
			});
		});
	};
}