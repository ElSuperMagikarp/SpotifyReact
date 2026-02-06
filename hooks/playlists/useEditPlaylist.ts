import { useState } from "react";

import { CreatePlaylistDTO, Playlist } from "@/interfaces/playlist.interface";
import { putPlaylist } from "@/api/playlists.api";

export function useEditPlaylist() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [playlist, setPlaylist] = useState<Playlist | null>(null);

    const edit = async (id: string, data: CreatePlaylistDTO) => {
        try {
            setLoading(true);
            setError(null);

            const result = await putPlaylist(id, data);
            setPlaylist(result);

            return result;
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err.message ||
                "Failed to update playlist"
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        edit,
        loading,
        error,
        playlist,
    };
}