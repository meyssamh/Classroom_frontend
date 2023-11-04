import * as React from 'react';

import { MainProps } from '$/declaration';
import classes from './Main.module.scss';
import Navigation from '@/components/Navigation/Navigation';
import Header from '@/components/Header/Header';
import Body from '@/components/Body/Body';

/**
 * Higher order component that combines the sidebar, header and body of the dashboard.
 * 
 * @param {string} title Title of the page.
 * @param {ReactNode} buttons Buttons to show in header of body.
 * @param {ReactNode} children Elements to show in body of dashboard.
 * 
 * @returns {JSX.Element} A dashboard with filled body.
 */
const Main = ({ title, buttons, children }: MainProps): JSX.Element => {
	return (
		<main className={classes.main}>
			<Navigation />
			<Header />
			<section className={classes.body}>
				<Body title={title} buttons={buttons}>
					{children}
				</Body>
			</section>
		</main>
	);
};

export default Main;