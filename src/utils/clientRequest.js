import axios from 'axios'

const instance = axios.create({
  baseURL:'localhost:4444',
  timeout: 1000,
})
export default instance