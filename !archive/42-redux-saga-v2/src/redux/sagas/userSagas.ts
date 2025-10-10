import type { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeEvery } from 'redux-saga/effects'
import { setUsernameAsync, setUsernamePending, setUsernameFulfilled } from '../slices/userSlice'

function* setUsernameSaga(action: PayloadAction<string>) {
  yield put(setUsernamePending())
  yield delay(1000)
  yield put(setUsernameFulfilled(action.payload))
}

export default function* userSagas() {
  yield takeEvery(setUsernameAsync, setUsernameSaga)
}
