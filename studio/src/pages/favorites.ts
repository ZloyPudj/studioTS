import { render } from '../utils/render'
import type { Track } from '../types/track'
import { navigate } from '../utils/router'
import { initNavbar, } from '../components/navbar'
import { tracks as allTracks } from '../data/tracks.js'

export const FavoritesPage = async () => {
  render(`<p>Загрузка...</p>`)

  try {
    const fav = JSON.parse(localStorage.getItem('favorites') || '[]') as string[]

    const favTracks: Track[] = allTracks.filter(t =>
      fav.includes(String(t.id))
    )

    render(`
      <h1>Избранное ❤️</h1>

      <button id="back">Назад</button>

      <div>
        ${favTracks.map(t => `
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
          const fav = JSON.parse(localStorage.getItem('favorites') || '[]')

          const updated = fav.filter((f: string) => f !== id)

          localStorage.setItem('favorites', JSON.stringify(updated))

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