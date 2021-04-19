import {SET_HOME_LIST,SET_HOME_LIST_ASYNC} from '../action-types';
import { put, takeEvery, call} from 'redux-saga/effects'
import {getHomelist} from '../../api/index'

function* saveMsg(data) {
  const {callBack} = data
  const response = yield call(getHomelist,'aaaaaa')
  console.log('request',response.data)
  yield put({type: SET_HOME_LIST, payload:response.data});
  if(callBack){
    callBack(response.data)
  }
  
 }

 export function* watchSaveHomeList() {
    yield takeEvery(SET_HOME_LIST_ASYNC, saveMsg)
  }