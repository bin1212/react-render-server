import request from '../utils/request'

export const getHomelist = async (data) => {console.log(data);return request.get('/api/getList') } 