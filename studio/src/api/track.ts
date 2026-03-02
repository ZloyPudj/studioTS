import { request } from "./api";
import type { Track } from '../types/track';

export const getTracks = () => {
    return request<Track[]>('/tracks', 'GET')   
}