import { useState } from "react";

import { deletePlaylist } from "@/api/playlists.api";

export function useDeletePlaylist() {
    const [error, setError] = useState<string | null>(null);

    const deletePlaylistById = async (playlistId: string) => {
        try {
            if (!playlistId) return;
            const responseCode = await deletePlaylist(playlistId);

            if (responseCode === 404) {
                setError("Playlist not found")
            } else if (responseCode !== 204) {
                setError("Unknown Error")
            }
        } catch {
            setError("Playlist Error");
        }
    };

    return {
        deletePlaylistById,
        error,
    };
};