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
        placeholder="Поиск по названию или артисту..." 
      />

      <button id="goFav">Избранное</button>

      <div id="trackList">
        ${renderTracks(data)}
      </div>
    `)

    attachListeners() // ✅ вот сюда

    initNavbar()

    // Поиск
    const searchInput = document.getElementById('search') as HTMLInputElement
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase()
      const filtered = data.filter(track =>
        track.title.toLowerCase().includes(query) ||
        track.artist.toLowerCase().includes(query)
      )

      const list = document.getElementById('trackList')
      if (list) {
        list.innerHTML = renderTracks(filtered)
        attachListeners() // ✅ заново вешаем обработчики после перерисовки
      }
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

// 🔁 Обработчики кнопок
function attachListeners() {
  // Кнопки "в избранное"
  document.querySelectorAll('button[data-id]')?.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = (btn as HTMLButtonElement).dataset.id
      if (!id) return

      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      if (!favorites.includes(id)) {
        favorites.push(id)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        alert('Добавлено в избранное ❤️')
      }
    })
  })

  // Кнопка "Избранное"
  const favBtn = document.getElementById('goFav')
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      window.location.hash = '#favorites'
    })
  }
}