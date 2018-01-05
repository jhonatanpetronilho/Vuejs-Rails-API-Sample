import jwtDecode from 'jwt-decode'

export const decode = (token) => {
  if (token) {
    const decoded = jwtDecode(token)
    return decoded
  }
  return false
}
