import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './hoc/Routing/ProtectedRoute';
const Home = React.lazy(() => import('./pages/Home/Home'));
const EditClass = React.lazy(() => import('./pages/EditClass/EditClass'));
const DeleteClass = React.lazy(() => import('./pages/DeleteClass/DeleteClass'));
const Class = React.lazy(() => import('./pages/Class/Class'));
const NewSession = React.lazy(() => import('./pages/NewSession/NewSession'));
const SelectEditSession = React.lazy(() => import('./pages/SelectEditSession/SelectEditSession'));
const DeleteSession = React.lazy(() => import('./pages/DeleteSession/DeleteSession'));
const EditSession = React.lazy(() => import('./pages/EditSession/EditSession'));
const EditStudent = React.lazy(() => import('./pages/EditStudent/EditStudent'));
const DeleteStudent = React.lazy(() => import('./pages/DeleteStudent/DeleteStudent'));
const Signup = React.lazy(() => import('./pages/Signup/Signup'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Error = React.lazy(() => import('./pages/Error/Error'));

const App = (): JSX.Element => {

	// TODO: use lazy property of react-router-dom instead of React.Suspense!
	// HINT: I keep getting type error when i use lazy property; no solution yet!
	return (
		<Routes>
			{/* <Route path={'/'} element={<React.Suspense><Signup /></React.Suspense>} />
			<Route path={'login'} element={<React.Suspense><Login /></React.Suspense>} />
			<Route path={'home'} element={<React.Suspense><Home /></React.Suspense>} />
			<Route path={'class'} element={<React.Suspense><Class /></React.Suspense>} />
			<Route path={'edit-class'} element={<React.Suspense><EditClass /></React.Suspense>} />
			<Route path={'delete-class'} element={<React.Suspense><DeleteClass /></React.Suspense>} />
			<Route path={'new-session'} element={<React.Suspense><NewSession /></React.Suspense>} />
			<Route path={'select-edit-session'} element={<React.Suspense><SelectEditSession /></React.Suspense>} />
			<Route path={'edit-session'} element={<React.Suspense><EditSession /></React.Suspense>} />
			<Route path={'delete-session'} element={<React.Suspense><DeleteSession /></React.Suspense>} />
			<Route path={'edit-student'} element={<React.Suspense><EditStudent /></React.Suspense>} />
			<Route path={'delete-student'} element={<React.Suspense><DeleteStudent /></React.Suspense>} />

			<Route path={'*'} element={<React.Suspense><Error /></React.Suspense>} /> */}

			<Route path={'/'} element={<React.Suspense><Signup /></React.Suspense>} />
			<Route path={'/login'} element={<React.Suspense><Login /></React.Suspense>} />
			<Route element={<ProtectedRoute />}>
				<Route path={'/home'} element={<React.Suspense><Home /></React.Suspense>} />
				<Route path={'/class'} element={<React.Suspense><Class /></React.Suspense>} />
				<Route path={'/edit-class'} element={<React.Suspense><EditClass /></React.Suspense>} />
				<Route path={'/delete-class'} element={<React.Suspense><DeleteClass /></React.Suspense>} />
				<Route path={'/new-session'} element={<React.Suspense><NewSession /></React.Suspense>} />
				<Route path={'/select-edit-session'} element={<React.Suspense><SelectEditSession /></React.Suspense>} />
				<Route path={'/edit-session'} element={<React.Suspense><EditSession /></React.Suspense>} />
				<Route path={'/delete-session'} element={<React.Suspense><DeleteSession /></React.Suspense>} />
				<Route path={'/edit-student'} element={<React.Suspense><EditStudent /></React.Suspense>} />
				<Route path={'/delete-student'} element={<React.Suspense><DeleteStudent /></React.Suspense>} />
			</Route>
			<Route path={'*'} element={<React.Suspense><Error /></React.Suspense>} />
		</Routes>
	);
};

export default App;