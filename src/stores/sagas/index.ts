import { put, call, delay } from 'redux-saga/effects'
import TYPES from '@/constants/actionTypes/test'

export const sagaTets = function * (payload) {
  console.log('payload===', payload)
  yield call(delay, 2000)
  yield put({
    type: TYPES.TEST,
    payload,
  })
}
