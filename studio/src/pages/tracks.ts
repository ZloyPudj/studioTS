import { tracks } from '../data/tracks.js'
import { render } from '../utils/render'
import { initNavbar } from '../components/navbar'

export const TracksPage = () => {
  const data = tracks

  render(`<p>Загрузка...</p>`)

  try {
    render(`
      <h1>Треки 🎵</h1>

      <input 
        type="text" 
        id="search" 
        placeholder="Поиск по названию..." 
      />

      <button id="goFav">Избранное</button>

      <div id="trackList">
        ${renderTracks(data)}
      </div>
    `)

    initNavbar()

    // добавление в избранное
    document.querySelectorAll('button[data-id]')?.forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = (btn as HTMLButtonElement).dataset.id
        if (!id) return

        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
        if (!favorites.includes(id)) {
          favorites.push(id)
          localStorage.setItem('favorites', JSON.stringify(favorites))
        }

        alert('Добавлено в избранное ❤️')
      })
    })

    // поиск
    const searchInput = document.getElementById('search') as HTMLInputElement
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase()
      const filtered = data.filter(track =>
        track.title.toLowerCase().includes(query)
      )

      const list = document.getElementById('trackList')
      if (list) list.innerHTML = renderTracks(filtered)
    })

  } catch (e) {
    console.error(e)
    render(`<p>Ошибка загрузки треков</p>`)
  }
}

function renderTracks(data: typeof tracks) {
  return data.map(track => `
    <div>
      <b>${track.title}</b> — ${track.artist}
      <button data-id="${track.id}">❤️</button>
    </div>
  `).join('')
}