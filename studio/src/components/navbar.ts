import { navigate } from '../utils/router'

export const initNavbar = () => {
  const existing = document.getElementById('navbar')
  if (existing) existing.remove()

  const nav = document.createElement('div')
  nav.id = 'navbar'

  nav.innerHTML = `
    <button id="tracksBtn">Треки</button>
    <button id="favBtn">Избранное ❤️</button>
  `

  document.body.prepend(nav)

  document.getElementById('tracksBtn')?.addEventListener('click', () => {
    navigate('/tracks')
  })

  document.getElementById('favBtn')?.addEventListener('click', () => {
    navigate('/favorites')
  })
}