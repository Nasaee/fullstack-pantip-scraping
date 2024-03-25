import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AnnounceType } from '../../../../backend/src/share-type';
import axios from 'axios';
import { API_URL } from '@/api-client';
import {
  fetchAnnounceFailure,
  fetchAnnounceStart,
  fetchAnnounceSuccess,
} from './announceSlice';

const fetchAnnounceData = async (): Promise<AnnounceType> => {
  const response = await axios.get(`${API_URL}/api/announce`);
  return response.data;
};

function* fetchAnnounceAsync() {
  try {
    const announceData: AnnounceType = yield call(fetchAnnounceData);
    yield put(fetchAnnounceSuccess(announceData));
  } catch (error: any) {
    if (error.message) {
      yield put(fetchAnnounceFailure(error.message));
    } else {
      yield put(fetchAnnounceFailure('An unexpected error occurred.'));
    }
  }
}

function* onFetchAnnounce() {
  yield takeLatest(fetchAnnounceStart, fetchAnnounceAsync);
}

export default function* announceSaga() {
  yield all([call(onFetchAnnounce)]);
}
