import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState, AppDispatch } from '../store';

// Redux hooks
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;