import { useState } from "react";

import { CreatePlaylistDTO, Playlist } from "@/interfaces/playlist.interface";
import { createPlaylist } from "@/api/playlists.api";

export function useCreatePlaylist() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [playlist, setPlaylist] = useState<Playlist | null>(null);

    const submit = async (data: CreatePlaylistDTO) => {
        try {
            setLoading(true);
            setError(null);

            const result = await createPlaylist(data);
            setPlaylist(result);

            return result;
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err.message ||
                "Failed to create playlist"
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        submit,
        loading,
        error,
        playlist,
    };
}