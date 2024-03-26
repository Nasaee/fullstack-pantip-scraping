import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomDataType } from '../../../../backend/src/share-type';

export type RoomsDataState = {
  roomsData: RoomDataType[] | [];
  isLoading: boolean;
  error: string | null;
};

const initialState: RoomsDataState = {
  roomsData: [],
  isLoading: false,
  error: null,
};

const roomsDataSlice = createSlice({
  name: 'roomsData',
  initialState,
  reducers: {
    fetchRoomsDataStart: (state: RoomsDataState) => {
      state.isLoading = true;
    },
    fetchRoomsDataSuccess: (
      state: RoomsDataState,
      action: PayloadAction<RoomDataType[]>
    ) => {
      state.roomsData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchRoomsDataFailure: (
      state: RoomsDataState,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchRoomsDataStart,
  fetchRoomsDataSuccess,
  fetchRoomsDataFailure,
} = roomsDataSlice.actions;

export default roomsDataSlice.reducer;
