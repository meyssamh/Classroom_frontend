import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Classes, Sessions } from '$/redux';
import { RootState } from '@/store';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import Main from '^/Main/Main';
import classes from '../Pages.module.scss';
import Tag from '@/components/UI/Tag/Tag';

/**
 * Functional component that returns select edit session page.
 *
 * @returns {JSX.Element} Select edit session page.
 */
const SelectEditSession = (): JSX.Element => {
	// Redux state
	const selectedClass: Classes = useSelector((state: RootState) => state.class.data.class);
	const sessions: Sessions[] = useSelector((state: RootState) => state.class.data.sessions);

	// Router-dom hook
	const navigate = useNavigate();

	// Handler
	function handleSelect (id: number): void {
		localStorage.setItem('selectedSession', `${id}`);
		navigate('/edit-session');
	}

	// Title of body's header
	const title = `${selectedClass.classname}: Sessions`;

	// Button in header of body, to return to class page.
	const classButton = <LinkButton link={'/class'} text={'Go to Class'} variant={'contained'} />;

	// Complete body element
	const bodyContent = sessions.map(session => {
		const sessionDate = new Date(session.date);
		const date = sessionDate.getDate();
		const month = sessionDate.getMonth() + 1;
		const text = `Session ${date}/${month}`;

		const id = session.id;

		return (
			<Tag
				variant={'edit'}
				text={text}
				buttonText={'Edit Session'}
				key={id}
				onClick={handleSelect.bind(this, id)}
			/>
		);
	});

	return (
		<Main title={title} buttons={classButton}>
			<section className={classes.body}>
				{bodyContent}
			</section>
		</Main>
	);
};

export default SelectEditSession;