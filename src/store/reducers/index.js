import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import home from './home'
import counter from './counter'
import history from '../../utils/history'

const reducers = combineReducers({
  home,counter,
  router:connectRouter(history)
})
export default reducers