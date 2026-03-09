import { render } from '../utils/render'
import { tracks } from '../data/tracks.js'

export const FavoritesPage = () => {

  const fav = JSON.parse(localStorage.getItem('favorites') || '[]')

  const favTracks = tracks.filter(t => fav.includes(String(t.id)))

  render(`
  <h1>Избранное ❤️</h1>

  ${favTracks.map(track => `
    <div>
      <b>${track.title}</b> — ${track.artist}
    </div>
  `).join('')}
  `)
}