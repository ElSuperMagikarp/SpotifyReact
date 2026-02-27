import { useState } from "react";

import { deletePlaylistSong } from "@/api/playlists.api";

export function useRemoveSong() {
    const [error, setError] = useState<string | null>(null);

    const removeSong = async (playlistId: string, songId: string) => {
        try {
            if (!playlistId) return;
            if (!songId) return;

            const responseCode = await deletePlaylistSong(playlistId, songId);

            if (responseCode === 404) {
                setError("Playlist or song not found")
            } else if (responseCode !== 204) {
                setError("Unknown Error")
            }
        } catch {
            setError("Playlist Error");
        }
    };

    return {
        removeSong,
        error,
    };
};