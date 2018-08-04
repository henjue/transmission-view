import axios from 'axios'
export default {
  install: (Vue, options) => {
    axios.defaults.withCredentials = true
    axios.interceptors.request.use((request) => {

      let sessionId = localStorage.getItem('X-Transmission-Session-Id')
      if (sessionId) {
        axios.defaults.headers['X-Transmission-Session-Id'] = sessionId
        if (!request.headers['X-Transmission-Session-Id']) {
          request.headers['X-Transmission-Session-Id'] = sessionId
        }
      }
      return request
    })
    axios.interceptors.response.use((response) => {
      console.log('response')
      return response
    }, (error) => {
      console.log(error)
      let {response, config} = error
      if (response.status === 409) {
        let sessionId = response.headers['x-transmission-session-id']
        if (sessionId) {
          localStorage.setItem('X-Transmission-Session-Id', sessionId)
          return axios(config)
        }
      } else if (response.status === 401) {
        console.log('授权失败，请检查账号密码')
      } else {
        return Promise.reject(error)
      }
      return Promise.reject(error)
    })
    Vue.prototype.axios = axios
    Vue.prototype.http = axios
    Vue.prototype.$http = axios
  }
}
