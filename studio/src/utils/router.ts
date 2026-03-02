import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { TracksPage } from '../pages/tracks'
import { FavoritesPage } from '../pages/favorites'

export const navigate = (path: string) => {

    const token = localStorage.getItem('token')

    if ((path === '/tracks') || (path === '/favorites') && !token) {
        LoginPage()
        return
    }
    
    if (path === '/login') LoginPage()
    if (path === '/register') RegisterPage()
    if (path === '/tracks') TracksPage()  
    if (path === '/favorites') FavoritesPage() 
}
