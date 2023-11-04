import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { Sessions, Student, Students } from '$/redux';
import { Situation } from '$/declaration';

const apiUrl = process.env.API_URL;

// Regex for validation
const nameRegex = /^[a-zA-Z]+$/;

/**
 * Async function to get data of a class from backend.
 * 
 * @param {number} id Id of the chosen class.
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchClass = createAsyncThunk(
	'class/class',
	async (id: number, { rejectWithValue }) => {

		localStorage.setItem('classId', `${id}`);

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		try {
			const response = await fetch(apiUrl + `/api/class/${id}` as string, {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json',
				}
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			const jsonData = await response.json();

			return jsonData.data;

		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);

/**
 * Async function to post data of a new student to backend.
 * 
 * @param {string} firstname Firstname of the student
 * @param {string} lastname Lastname of the student
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchNewStudent = createAsyncThunk(
	'class/newstudent',
	async (student: Student, { rejectWithValue }) => {
		const { firstname, lastname } = student;
		const classId = localStorage.getItem('classId');

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		try {
			if (firstname.trim().length === 0 || !firstname.match(nameRegex)) {
				throw new Error('Invalid input!');
			} else if (lastname.trim().length === 0 || !lastname.match(nameRegex)) {
				throw new Error('Invalid input!');
			}

			const response = await fetch(apiUrl + `/api/student/${classId}` as string, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstname,
					lastname
				})
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			const jsonData = await response.json();

			return jsonData.data;

		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);

/**
 * Async function to update data of a student to backend.
 * 
 * @param {number} id Id of the chosen student
 * @param {string} firstname Firstname of the student
 * @param {string} lastname Lastname of the student
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchEditStudent = createAsyncThunk(
	'class/editstudent',
	async (student: Students, { rejectWithValue }) => {
		const { id, firstname, lastname } = student;
		const classId = localStorage.getItem('classId');

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		try {
			if (firstname.trim().length === 0 || !firstname.match(nameRegex)) {
				throw new Error('Invalid input!');
			} else if (lastname.trim().length === 0 || !lastname.match(nameRegex)) {
				throw new Error('Invalid input!');
			}

			const response = await fetch(apiUrl + `/api/student/${classId}/${id}` as string, {
				method: 'PUT',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstname,
					lastname
				})
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			const jsonData = await response.json();

			return jsonData.data;

		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);

/**
 * Async function to delete data of a student from backend.
 * 
 * @param {number} id Id of the chosen student
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchDeleteStudent = createAsyncThunk(
	'class/deletestudent',
	async (id: number, { rejectWithValue }) => {
		const classId = localStorage.getItem('classId');

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		try {
			const response = await fetch(apiUrl + `/api/student/${classId}/${id}` as string, {
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json',
				}
			}
			);

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			const jsonData = await response.json();

			return jsonData.data;

		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);

/**
 * Async function to post data of a new session to backend.
 * 
 * @param {object} situation Situation of the students
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchNewSession = createAsyncThunk(
	'class/newsession',
	async (situation: Situation, { rejectWithValue }) => {
		const classId = localStorage.getItem('classId');
		const students = localStorage.getItem('students');

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		// TODO: check if the length of new session and the amount of students are the same!
		try {
			if (Object.keys(situation).length === Object.keys(JSON.parse(students!)).length) {
				const response = await fetch(apiUrl + `/api/session/${classId}` as string, {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Authorization': bearer,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						situation: JSON.stringify(situation)
					})
				}
				);

				if (response.status === 401) {
					throw new Error('Unauthorized');
				} else if (response.status !== 200) {
					throw new Error('Something went wrong!');
				}

				const jsonData = await response.json();

				return jsonData.data;

			} else {
				throw new Error('Invalid input');
			}

		} catch (e: any) {
			return rejectWithValue(e);
		}

	}
);

/**
 * Async function to update data of a session to backend.
 * 
 * @param {object} session Situation of the students in the chosen session
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchEditSession = createAsyncThunk(
	'class/editsession',
	async (session: Sessions, { rejectWithValue }) => {
		const classId = localStorage.getItem('classId');

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		// TODO: check if the length of new session and the amount of students are the same!
		try {
			const response = await fetch(apiUrl + `/api/session/${classId}/${session.id}`, {
				method: 'PUT',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					situation: JSON.stringify(session.situation)
				})
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			const jsonData = await response.json();

			return jsonData.data;

		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);

/**
 * Async function to delete data of a session from backend.
 * 
 * @param {number} id Id of the chosen session
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchDeleteSession = createAsyncThunk(
	'class/deletesession',
	async (id: number, { rejectWithValue }) => {
		const classId = localStorage.getItem('classId');

		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;

		try {
			const response = await fetch(apiUrl + `/api/session/${classId}/${id}` as string, {
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}

			const jsonData = await response.json();

			return jsonData.data;

		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);