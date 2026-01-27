import { useEffect, useState } from "react";

import { Song } from "@/interfaces/song.interface";

import { getSongs } from "@/api/songs.api";

export const useSongs = () => {
    const [songs, setSongs] = useState<Song[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getSongs()
            .then(setSongs)
            .catch(() => setError("Songs Error"));
    }, []);

    return { songs, error };
};
