import Axios from 'axios'

import { backendPath, endPoint } from '../Constants/paths'

const requestWithToken = Axios.create()

export function restPath(endpoint = '') {
  return backendPath + endPoint + endpoint
}

export function restRequest(method = 'GET', path = '', data = {}) {
  return requestWithToken({
    method: method,
    url: restPath(path),
    data: data,
  }).then((res) => {
    return res.data
  })
}
