import {createStore,applyMiddleware} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import history from '../untils/history'
import reducers from './reducers'

const middleware = routerMiddleware(history)
// const serverMiddleware = routerMiddleware(serverHistory)

export function getClientStore(){
  let initState;
  if(window.context){
    initState = window.context.state;
  }
  return createStore(reducers,initState,applyMiddleware(middleware))
}
export function getServerStore(req) {
  return createStore(reducers,applyMiddleware(middleware));
}