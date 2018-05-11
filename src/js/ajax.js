import Promise from 'bluebird'
import axios from 'axios'
import qs from 'query-string'


const baseURL = '/'
const instance = axios.create({
  baseURL,
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: data => qs.stringify(data)
})

export default {
  fetch(url = '/', data = {}, method = 'GET') {
    let ops = {
      url,
      method: method.toUpperCase()
    }
    if (method.toUpperCase() === 'POST') {
      if (data._cache !== false) {
        Object.assign(data, {_: new Date().getTime()})
      }
      ops.data = data
    } else {
      ops.params = data
    }
    return new Promise((resolve, reject) => {
      instance(ops).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.statusText)
        }
      }).catch(e => {
        let status = e && e.response && e.response.status
        switch (status) {
          case 400:
            break
          case 404:
            break
          case 500:
            break
          default:
            break
        }
        reject(e)
      })
    })
  },
  get(url, data) {
    return this.fetch(url, data)
  },
  post(url, data) {
    return this.fetch(url, data, 'POST')
  }
}
