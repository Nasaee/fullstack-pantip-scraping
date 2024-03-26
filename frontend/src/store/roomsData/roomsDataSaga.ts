import { takeLatest, call, put, all } from 'redux-saga/effects';
import { RoomDataType } from '../../../../backend/src/share-type';
import axios from 'axios';
import { API_URL } from '@/api-client';
import {
  fetchRoomsDataStart,
  fetchRoomsDataSuccess,
  fetchRoomsDataFailure,
} from './roomsDataSlice';

const fetchRoomsData = async (): Promise<RoomDataType[]> => {
  const response = await axios.get(`${API_URL}/api/roomsData`);
  return response.data;
};

function* fetchRoomsDataAsync() {
  try {
    const roomsData: RoomDataType[] = yield call(fetchRoomsData);
    yield put(fetchRoomsDataSuccess(roomsData));
  } catch (error: any) {
    if (error.message) {
      yield put(fetchRoomsDataFailure(error.message));
    } else {
      yield put(fetchRoomsDataFailure('An unexpected error occurred.'));
    }
  }
}

function* onFetchRoomsData() {
  yield takeLatest(fetchRoomsDataStart, fetchRoomsDataAsync);
}

export default function* roomsDataSaga() {
  yield all([call(onFetchRoomsData)]);
}
