import axios from 'axios'
import store from '@/store'

// Instance for requests
export const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
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

  // check for erros if true and status 401 (Unauthorized), delete token
  if (error.response && error.response.status === 401) {
    if (localStorage.token) {
      delete localStorage.token
    }
  }
})
