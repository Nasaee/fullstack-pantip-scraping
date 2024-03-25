import { all, call } from 'redux-saga/effects';
import announceSaga from './announce/announceSaga';
import roomsDataSaga from './roomsData/roomsDataSaga';

export function* rootSaga() {
  yield all([call(announceSaga), call(roomsDataSaga)]);
}
