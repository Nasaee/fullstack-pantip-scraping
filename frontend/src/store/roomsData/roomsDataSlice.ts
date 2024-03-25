import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomDataType } from '../../../../backend/src/share-type';

export type RoomsDataState = {
  roomsData: RoomDataType[] | [];
  loading: boolean;
  error: string | null;
};

const initialState: RoomsDataState = {
  roomsData: [],
  loading: false,
  error: null,
};

const roomsDataSlice = createSlice({
  name: 'roomsData',
  initialState,
  reducers: {
    fetchRoomsDataStart: (state: RoomsDataState) => {
      state.loading = true;
    },
    fetchRoomsDataSuccess: (
      state: RoomsDataState,
      action: PayloadAction<RoomDataType[]>
    ) => {
      state.roomsData = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRoomsDataFailure: (
      state: RoomsDataState,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchRoomsDataStart,
  fetchRoomsDataSuccess,
  fetchRoomsDataFailure,
} = roomsDataSlice.actions;

export default roomsDataSlice.reducer;
