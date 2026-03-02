import { render } from '../utils/render'
import { getFavorites, removeFavorite } from '../api/favorites'
import type { Track } from '../types/track'
import { navigate } from '../utils/router'
import { initNavbar, Navbar } from '../components/navbar'

export const FavoritesPage = async () => {
  render(`<p>Загрузка...</p>`)

  try {
    const tracks: Track[] = await getFavorites()

    render(`
      ${Navbar()}
      <h1>Избранное ❤️</h1>

      <button id="back">Назад</button>

      <div>
        ${tracks.map(t => `
          <div>
            <b>${t.title}</b> — ${t.artist}
            <button data-id="${t.id}">Удалить</button>
          </div>
        `).join('')}
      </div>
    `)
    initNavbar()

    // к трекам
    document.getElementById('back')!.addEventListener('click', () => {
      navigate('/tracks')
    })

    // удаление
    document.querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = (btn as HTMLButtonElement).dataset.id
        if (!id) return

        try {
          await removeFavorite(id)
          FavoritesPage()
        } catch {
          alert('Ошибка удаления')
        }
      })
    })

  } catch {
    render(`<p>Ошибка загрузки</p>`)
  }
}