import { render } from '../utils/render'
import { getTracks } from '../api/track'
import type { Track } from '../types/track'
import { addFavorite } from '../api/favorites'
import { initNavbar } from '../components/navbar'

export const TracksPage = async () => {
    render(`<p>Загрузка...</p>`)

    try {
        const tracks: Track[] = await getTracks()

        render(`
      <h1>Треки 🎵</h1>

      <button id="goFav">Избранное</button>

       <div>
          ${tracks.map(track => `
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

            try {
                await addFavorite(id)
                alert('Добавленнов избранное')
            } catch {
                alert('Ошибка')
            }
        })
     })

    } catch (e) {
        console.error(e)
        render(`<p>Ошибка загрузки треков</p>`)
    }
}