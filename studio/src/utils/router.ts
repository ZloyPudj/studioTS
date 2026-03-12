import { TracksPage } from '../pages/tracks'
import { FavoritesPage } from '../pages/favorites'

export const navigate = (path: string) => {
  if (path === '/tracks') TracksPage()
  else if (path === '/favorites') FavoritesPage()
}

window.addEventListener('hashchange', () => {
  const path = window.location.hash.slice(1)
  navigate(path)
})  