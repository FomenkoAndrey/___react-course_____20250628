import { all, delay, put, takeEvery } from 'redux-saga/effects'
import {
  incrementAsync,
  decrementAsync,
  incrementPending,
  incrementFulfilled,
  decrementPending,
  decrementFulfilled
} from '../slices/counterSlice'

function* incrementSaga() {
  yield put(incrementPending())
  yield delay(1000)
  yield put(incrementFulfilled(1))
}

function* decrementSaga() {
  yield put(decrementPending())
  yield delay(1000)
  yield put(decrementFulfilled(1))
}

export default function* counterSagas() {
  yield all([takeEvery(incrementAsync, incrementSaga), takeEvery(decrementAsync, decrementSaga)])
}
