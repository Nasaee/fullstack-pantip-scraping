import { combineReducers } from '@reduxjs/toolkit';
import uiControlsSlice from './ui-controls/uiControlsSlice';

const rootReducer = combineReducers({ uiControls: uiControlsSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
