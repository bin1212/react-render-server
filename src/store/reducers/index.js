import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import home from './home'
import history from '../../untils/history'

const reducers = combineReducers({
  home,
  router:connectRouter(history)
})
export default reducers