import {all} from 'redux-saga/effects';
import {watchFetchBaseSaga} from './base/saga';

export default function* rootSaga() {
  yield all([watchFetchBaseSaga()]);
}
