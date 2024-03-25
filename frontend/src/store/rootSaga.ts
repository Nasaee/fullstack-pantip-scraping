import { all, call } from 'redux-saga/effects';
import announceSaga from './announce/announceSaga';

export function* rootSaga() {
  yield all([call(announceSaga)]);
}
