import { all } from 'redux-saga/effects'
import {watchSaveHomeList} from './home'

export function* helloSaga(){
  console.log('hello')
}
export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchSaveHomeList()
  ])
}