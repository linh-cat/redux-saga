import { all, delay } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, takeLatest } from '@redux-saga/core/effects';
import { incrementSaga, incrementSuccess } from 'features/counter/counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting 2s');

  yield delay(1000);

  console.log('Waiting done, dispatch action');

  yield put(incrementSuccess(action.payload));
}

export default function* rootSaga() {
  console.log('Counter Saga run');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
  //   yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
