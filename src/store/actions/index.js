import {push} from 'connected-react-router'
import * as types from '../action-types'

export const goto = (name) => (push(name))
export const setHomeList = (data) =>({type:types.SET_HOME_LIST,payload:data})
