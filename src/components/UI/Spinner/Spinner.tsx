import * as React from 'react';

import Overlay from '../Overlay/Overlay';
import classes from './Spinner.module.scss';

/**
 * Functionall component for spinner to show when the fetch is on pending.
 *
 * @returns {JSX.Element} A spinner with its own overlay.
 */
const Spinner = (): JSX.Element => {
	return (
		<Overlay>
			<span className={classes.loader}></span>
		</Overlay>
	);
};

export default Spinner;