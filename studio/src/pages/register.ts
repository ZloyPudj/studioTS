import { render } from '../utils/render'
import { register } from '../api/auth'

export const RegisterPage = () => {
  render(`
    <h1>Register</h1>
    <input id="username" placeholder="username" />
    <input id="password" type="password" placeholder="password" />
    <button id="btn">Зарегистрироваться</button>
  `)

  const btn = document.getElementById('btn')!

  btn.addEventListener('click', async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value
    const password = (document.getElementById('password') as HTMLInputElement).value

    try {
      await register(username, password)
      alert('Регистрация успешна 🔥')
    } catch (e) {
      console.error(e)
      alert('Ошибка регистрации')
    }
  })
}