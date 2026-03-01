import { render } from '../utils/render'
import { login } from '../api/auth'
import { navigate } from '../utils/router'

export const LoginPage = () => {
  render(`
    <h1>Login</h1>
    
    <input id="username" placeholder="username" />
    <input id="password" type="password" placeholder="password" />
    
    <button id="btn">Войти</button>

    <p>
      Нет аккаунта?
      <button id="goRegister">Регистрация</button>
    </p>
  `)

  const btn = document.getElementById('btn')! as HTMLButtonElement

  btn.addEventListener('click', async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value
    const password = (document.getElementById('password') as HTMLInputElement).value

    if (!username || !password){
        alert('Заполните все поля')
        return
    }

    try {
       btn.disabled = true
      btn.textContent = 'Загрузка'
      const data = await login(username, password)
      localStorage.setItem('token', data.token)

      navigate('/tracks')
    } catch {
      alert('Ошибка логина')
    }
  })

  const goRegister = document.getElementById('goRegister')!

  goRegister.addEventListener('click', () => {
    navigate('/register')
  })
}