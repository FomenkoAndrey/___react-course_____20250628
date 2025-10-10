import { all } from 'redux-saga/effects'
import counterSagas from './counterSagas'
import userSagas from './userSagas'

// Головна сага, що об'єднує всі саги додатку
export default function* rootSaga() {
  yield all([counterSagas(), userSagas()])
}
