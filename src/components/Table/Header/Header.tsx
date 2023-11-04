import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import classes from './Header.module.scss';
import { Sessions } from '$/redux';

/**
 * Functional component for table's header.
 *
 * @returns {JSX.Element} Table's header.
 */
const Header = (): JSX.Element => {

	// redux state
	const classSessions: Sessions[] = useSelector((state: RootState) => state.class.data.sessions);

	// Classsession dates
	const classSessionDates = classSessions.map(session => { 
		const date = new Date(session.date).getDate();
		const month = new Date(session.date).getMonth() + 1;

		return (
			<th key={session.id}>
				{date}/{month}
			</th>
		);
	});

	return (
		<thead className={classes.header}>
			<tr>
				<th></th>
				{classSessionDates}
			</tr>
		</thead>
	);
};

export default Header;