import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {routerMiddleware} from 'connected-react-router'
import history from '../utils/history'
import reducers from './reducers'

const middleware = routerMiddleware(history)

export const sagaMiddleware = createSagaMiddleware()

//客户端store
export function getClientStore(){
  let initState;
  if(window.context){
    initState = window.context.state;
  }
  return createStore(reducers,initState,applyMiddleware(middleware,sagaMiddleware))
}
//服务端store
export function getServerStore(req) {
  return createStore(reducers,applyMiddleware(middleware,sagaMiddleware));
}