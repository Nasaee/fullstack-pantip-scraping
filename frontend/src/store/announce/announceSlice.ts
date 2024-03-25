import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AnnounceType } from '../../../../backend/src/share-type';
type AnnounceState = {
  announceData: AnnounceType | null;
  loading: boolean;
  error: string;
};

const initialState: AnnounceState = {
  announceData: null,
  loading: false,
  error: '',
};

const announceSlice = createSlice({
  name: 'announce',
  initialState,
  reducers: {
    fetchAnnounceStart: (state: AnnounceState) => {
      state.loading = true;
    },
    fetchAnnounceSuccess: (
      state: AnnounceState,
      action: PayloadAction<AnnounceType>
    ) => {
      state.announceData = action.payload;
      state.loading = false;
    },
    fetchAnnounceFailure: (
      state: AnnounceState,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {
  fetchAnnounceSuccess,
  fetchAnnounceStart,
  fetchAnnounceFailure,
} = announceSlice.actions;

export default announceSlice.reducer;
