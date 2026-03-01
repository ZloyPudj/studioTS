import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { TrackPage } from '../pages/tracks'

export const navigate = (path: string) => {
    if (path === '/login') LoginPage()
    if (path === '/register') RegisterPage()
    if (path === '/tracks') TrackPage()    
}