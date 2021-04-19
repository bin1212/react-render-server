import { all,select,takeEvery } from 'redux-saga/effects'
import {watchSaveHomeList} from './home'
import {watchFirstThreeTodosCreation} from './counter'

export function* helloSaga(){
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    // console.log('action', action)
    // console.log('state after', state)
  })
}
export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchSaveHomeList(),
    watchFirstThreeTodosCreation()
  ])
}