import { request } from '../api/api'
import type { Track } from '../types/track'

export const getFavorites = () => {
    return request<Track[]>('favorites', 'GET')
}

export const addFavorite = (trackId: string) => {
    return request ('favorites', 'POST', { trackId })
}

export const removeFavorite = (trackId: string) => {
    return request ('favorites', 'DELETE', { trackId })
}   