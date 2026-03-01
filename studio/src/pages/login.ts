import { render } from '../utils/render'
import { login } from '../api/auth'

export const LoginPage = () => {
    render(`
    <h1>Login</h1>
    <input id="username" placeholder="username" />
    <input id="password" type="password" placeholder="password" />
    <button id="btn">Войти</button>
  `)

    const btn = document.getElementById('btn')!

    btn.addEventListener('click', async () => {
        const username = (document.getElementById('username') as HTMLInputElement).value
        const password = (document.getElementById('password') as HTMLInputElement).value

        try {
            const data = await login(username, password)

            localStorage.setItem('token', data.token)

            alert('Успешный вход 🔥')
        } catch (error) {
            console.error(error)
            alert('Ошибка логина')
        }
    })
}