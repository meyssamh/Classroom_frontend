import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { Classes } from '$/redux';

const apiUrl = process.env.API_URL;

/**
 * Async function to get data of all classes from backend.
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchClasses = createAsyncThunk(
	'home/classes',
	async (data, { rejectWithValue }) => {
		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;
		
		try {
			const response = await fetch(apiUrl + '/api/class' as string, {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json',
				}
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if(response.status !== 200) {
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
 * Async function to post data of a class to backend.
 * 
 * @param {string} newClassname Name of the new class
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchNewClass = createAsyncThunk(
	'home/newclass',
	async (newClassname: string, { rejectWithValue }) => {
		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;
		
		try {
			if (newClassname.trim().length === 0) {
				throw new Error('Invalid input!');
			}

			const response = await fetch(apiUrl + '/api/class' as string, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					classname: newClassname
				})
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if(response.status !== 200) {
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
 * Async function to put data of a class to backend.
 * 
 * @param {number} id Id of the chosen class
 * @param {string} classname Updated name of the chosen class
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchEditClass = createAsyncThunk(
	'home/editclass',
	async (data: Classes, { rejectWithValue }) => {
		const { id, classname } = data;
		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;
		
		try {
			
			if (classname.trim().length === 0) {
				throw new Error('Invalid input!');
			}

			const response = await fetch(apiUrl + `/api/class/${id}` as string, {
				method: 'PUT',
				credentials: 'include',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					classname
				})
			});

			if (response.status === 401) {
				throw new Error('Unauthorized');
			} else if(response.status !== 200) {
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
 * Async function to deleta data of a class from backend.
 * 
 * @param {number} id Id of the chosen class
 * 
 * @returns Data to be stored in redux state.
 */
export const fetchDeleteClass = createAsyncThunk(
	'home/deleteclass',
	async (id: number, { rejectWithValue }) => {
		const bearer = Cookies.get('access_token') === undefined ?
			'' :
			Cookies.get('access_token') as string;
		
		try {
			const response = await fetch(apiUrl + `/api/class/${id}`, {
				method: 'DELETE',
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