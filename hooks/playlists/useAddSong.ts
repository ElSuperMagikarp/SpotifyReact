import { useState } from "react";

import { postPlaylistSong } from "@/api/playlists.api";

export function useAddSong() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const add = async (playlistId: string, songId: string) => {
        try {
            if (!playlistId || !songId) return;

            setLoading(true);
            setError(null);

            const responseCode = await postPlaylistSong(playlistId, songId);

            if (responseCode !== 201) {
                setError("Unknown Error")
            };
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err.message ||
                "Failed to add song to playlist playlist"
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        add,
        loading,
        error
    };
}