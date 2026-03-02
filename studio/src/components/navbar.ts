import { navigate } from '../utils/router';
import { removeToken } from '../utils/storage'

export const Navbar = () => {
    return `
     <nav style="margin-bottom:20px;">
      <button id="navTracks">Треки</button>
      <button id="navFav">Избранное</button>
      <button id="logout">Выйти</button>
    </nav>
    `
}

export const initNavbar = () => {
    document.getElementById('navTracks')?.addEventListener('click', () => {
        navigate('/tracks')
    }) 

    document.getElementById('navFav')?.addEventListener('click', () => {
        navigate('/favorites')
    })

    document.getElementById('logout')?.addEventListener('click', () => {
        removeToken()
        navigate('/login')
    })
}