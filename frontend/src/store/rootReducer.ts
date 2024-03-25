import { combineReducers } from '@reduxjs/toolkit';
import announceSlice from './announce/announceSlice';
import roomsDataSlice from './roomsData/roomsDataSlice';

const rootReducer = combineReducers({
  announce: announceSlice,
  rooms: roomsDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
