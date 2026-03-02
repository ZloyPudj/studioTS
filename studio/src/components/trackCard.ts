import type { Track } from '../types/track';

export const TrackCard = (track: Track) => {
    return`
    <div style="margin:10px 0;">
      <b>${track.title}</b> — ${track.artist}
      <button data-id="${track.id}">❤️</button>
    </div>
    `
}