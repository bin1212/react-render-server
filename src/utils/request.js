import clientRequest from './clientRequest'
import serverRequest from '../server/request'
const isBrowser = typeof window !== 'undefined';
let request = isBrowser ? clientRequest : serverRequest
export default request