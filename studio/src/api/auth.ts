import { request } from './api'

export const login = (username: string, password: string) => {
    return request<{ token: string}>('/login', 'POST', {
        username,
        password
    })
}

export const register = (username: string, password: string) => {
  return request('/register', 'POST', {
    username,
    password
  })
}