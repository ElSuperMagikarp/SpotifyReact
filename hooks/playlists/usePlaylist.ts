import { useEffect, useState } from "react";

import { Playlist } from "@/interfaces/playlist.interface";
import { Song } from "@/interfaces/song.interface";
import { User } from "@/interfaces/user.interface";

import { getPlaylistById, getPlaylistSongs } from "@/api/playlists.api";
import { getUserById } from "@/api/users.api";

export const usePlaylist = (playlistId: string) => {
    const [playlist, setPlaylist] = useState<Playlist | null>(null);
    const [songs, setSongs] = useState<Song[] | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!playlistId) return;

        const load = async () => {
            try {
                const playlistData = await getPlaylistById(playlistId);
                setPlaylist(playlistData);

                const userData = await getUserById(playlistData.userId);
                setUser(userData);

                const songsData = await getPlaylistSongs(playlistId);
                setSongs(songsData);
            } catch {
                setError("Playlist Error");
            }
        };

        load();
    }, [playlistId]);

    return { playlist, songs, user, error };
};
