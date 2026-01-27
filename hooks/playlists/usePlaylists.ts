import { useEffect, useState } from "react";

import { Playlist } from "@/interfaces/playlist.interface";

import { getPlaylists } from "@/api/playlists.api";

export const usePlaylists = () => {
    const [playlists, setPlaylists] = useState<Playlist[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPlaylists()
            .then(setPlaylists)
            .catch(() => setError("Playlists All Error"));
    }, []);

    return { playlists, error };
};