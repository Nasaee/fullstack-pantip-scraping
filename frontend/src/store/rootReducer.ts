import { combineReducers } from '@reduxjs/toolkit';
import announceSlice from './announce/announceSlice';

const rootReducer = combineReducers({ announce: announceSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
