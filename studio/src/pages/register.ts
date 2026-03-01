import { render } from '../utils/render'
import { register } from '../api/auth'
import { navigate } from '../utils/router'

export const RegisterPage = () => {
  render(`
    <h1>Регистрация</h1>

    <input id="username" placeholder="username" />
    <input id="password" type="password" placeholder="password" />

    <button id="btn">Зарегистрироваться</button>

    <p>
      Уже есть аккаунт?
      <button id="goLogin">Войти</button>
    </p>
  `)

  const btn = document.getElementById('btn')! as HTMLButtonElement

  btn.addEventListener('click', async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value
    const password = (document.getElementById('password') as HTMLInputElement).value

    if (!username || !password) {
      alert('Заполни все поля')
      return
    }

    try {
      btn.disabled = true
      btn.textContent = 'Загрузка...'

      await register(username, password)

      alert('Успешно! Теперь войди')
      navigate('/login')
    } catch {
      alert('Ошибка регистрации')
    } finally {
      btn.disabled = false
      btn.textContent = 'Зарегистрироваться'
    }
  })

  const goLogin = document.getElementById('goLogin')!

  goLogin.addEventListener('click', () => {
    navigate('/login')
  })
}