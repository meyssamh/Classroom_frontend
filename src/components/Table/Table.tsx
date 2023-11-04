import * as React from 'react';

import Header from './Header/Header';
import Body from './Body/Body';
import classes from './Table.module.scss';

/**
 * Functional component that makes the students and session table for the class.
 *
 * @returns {JSX.Element} A table.
 */
const Table = (): JSX.Element => {

	return (
		<table className={classes.table}>
			<Header />
			<Body />
		</table>
	);
};

export default Table;