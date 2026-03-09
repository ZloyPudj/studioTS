import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { TracksPage } from '../pages/tracks'
import { FavoritesPage } from '../pages/favorites'

export const navigate = (path: string) => {
  if (path === '/login') LoginPage()
  else if (path === '/register') RegisterPage()
  else if (path === '/tracks') TracksPage()
  else if (path === '/favorites') FavoritesPage()
}

window.addEventListener('hashchange', () => {
  const path = window.location.hash.slice(1)
  navigate(path)
})