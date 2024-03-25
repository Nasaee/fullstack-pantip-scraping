import { createSlice } from '@reduxjs/toolkit';

type UiControlsState = {
  isSidebarOpen: boolean;
};

const initialState: UiControlsState = {
  isSidebarOpen: false,
};

const uiControlsSlice = createSlice({
  name: 'uiControls',
  initialState,
  reducers: {
    toggleSidebar(state: UiControlsState) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = uiControlsSlice.actions;

export default uiControlsSlice.reducer;
