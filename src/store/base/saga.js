import {put, takeLatest} from 'redux-saga/effects';
import {fetchBaseSuccess, fetchBaseFailure} from './actions';
import {BASE_REQUEST} from './types';

export function* fetchBaseSaga() {
  let response = null;

  if (response) {
    yield put(fetchBaseSuccess(response));
  } else {
    yield put(fetchBaseFailure('Base Data Failed'));
  }
}

export function* watchFetchBaseSaga() {
  yield takeLatest(BASE_REQUEST, fetchBaseSaga);
}
