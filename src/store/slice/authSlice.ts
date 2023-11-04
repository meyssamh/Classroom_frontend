import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from '$/redux';
import { fetchLogin, fetchSignup } from '../action/authActions';

// State
const initialState: AuthState = {
	data: {
		user: {
			username: '',
			firstname: '',
			lastname: ''
		}
	},
	loading: 'idle',
	error: null,
};

// Slice
const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchLogin.pending, state => {
			state.loading = 'pending';
			state.error = null;
		});
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			state.data = action.payload.data;
			state.loading = 'succeeded';
			state.error = null;
		});
		builder.addCase(fetchLogin.rejected, (state, action) => {
			const errorPayload: any = action.payload;
			state.loading = 'failed';
			state.error = errorPayload.message;
		});
		builder.addCase(fetchSignup.pending, state => {
			state.loading = 'pending';
			state.error = null;
		});
		builder.addCase(fetchSignup.fulfilled, (state, action) => {
			state.data = action.payload.data;
			state.loading = 'succeeded';
			state.error = null;
		});
		builder.addCase(fetchSignup.rejected, (state, action) => {
			const errorPayload: any = action.payload;
			state.loading = 'failed';
			state.error = errorPayload.message;
		});
	},
	reducers: {
		logout: state => {
			state.data.user.username = '';
			state.data.user.firstname = '';
			state.data.user.lastname = '';
			state.loading = 'idle';
			state.error = null;
		}
	}
});

export const { logout } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;