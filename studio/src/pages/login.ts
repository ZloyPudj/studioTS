/*import { render } from '../utils/render'
//import { login } from '../api/auth'
import { navigate } from '../utils/router'
//import {  setToken } from '../utils/storage'

export const LoginPage = () => {
  render(`
    <h1>Login</h1>
    
    <input id="username" placeholder="username" />
    <input id="password" type="password" placeholder="password" />
    
    <button id="btn" type="button">Войти</button>

    <p>
      Нет аккаунта?
      <button id="goRegister">Регистрация</button>
    </p>
  `)

 const btn = document.querySelector('#btn') as HTMLButtonElement

  btn.addEventListener('click', () => {
  console.log('клик')
  window.location.hash = '/tracks'
})

    const username = (document.getElementById('username') as HTMLInputElement).value
    const password = (document.getElementById('password') as HTMLInputElement).value

    if (!username || !password) {
      alert('Заполните все поля')
      return
    }

    try {
      btn.disabled = true
      btn.textContent = 'Загрузка'

      window.location.hash = '/tracks'
    } catch {
      alert('Ошибка логина')
    }
  }

  const goRegister = document.getElementById('goRegister')!

  goRegister.addEventListener('click', () => {
    navigate('/register')
  })
*/