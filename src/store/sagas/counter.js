import {SET_HOME_LIST,SET_HOME_LIST_ASYNC} from '../action-types';
import { put, takeEvery, call,take} from 'redux-saga/effects'

function* saveMsg(data) {
  console.log(1111)
 }

 export function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('TODO_CREATED')
  }
  yield put({type: 'SHOW_CONGRATULATION'})
}