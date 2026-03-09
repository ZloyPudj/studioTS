import { tracks } from '../data/tracks.js'
import { render } from '../utils/render'
import { initNavbar } from '../components/navbar'

export const TracksPage = () => {
    const data = tracks

    render(`<p>Загрузка...</p>`)

    try {

        render(`
      <h1>Треки 🎵</h1>

      <button id="goFav">Избранное</button>

       <div>
          ${data.map(track => `
         <div>
           <b>${track.title}</b> — ${track.artist}
           <button data-id="${track.id}">❤️</button>
         </div>
         `).join('')}
        </div>
    `)
        initNavbar()

        document.querySelectorAll('button[data-id]').forEach(btn => {
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

    } catch (e) {
        console.error(e)
        render(`<p>Ошибка загрузки треков</p>`)
    }
}