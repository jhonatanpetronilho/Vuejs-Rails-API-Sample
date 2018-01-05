import axios from 'axios'
import store from 'src/store'
import router from 'src/router'
import {toast} from 'src/helpers/toast'

// Instance for requests
export const http = axios.create({
  baseURL: 'http://192.168.1.102:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
})

// Response intereceptor for requests
http.interceptors.request.use(config => {
  // Load and decoed token in localStorage
  const token = localStorage.getItem('token')

  // Verify and set token in interceptor
  config.headers.Authorization = token ? `${token}` : ''

  // Dispatch actions: 1 - set erros to false
  store.dispatch('set_errors', false)
  return config
})

// Response intereceptor (verify errors)
http.interceptors.response.use(null, (error) => {
  // put response error in store
  store.dispatch('set_errors', `${error}`)

  if (error.response) {
    if (error.response.status === 404) {
      toast('User nor found. Verify your data', 'lock', 'error')
    } else if (error.response.status === 401) {
      toast('User unauthorized', 'lock', 'error')
      if (localStorage.token) {
        delete localStorage.token
        this.store.dispatch('remove_user')
        router.go({name: 'login'})
      }
    }
  }
})
