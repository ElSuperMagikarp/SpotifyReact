import { useEffect, useState } from "react";

import { Playlist } from "@/interfaces/playlist.interface";
import { User } from "@/interfaces/user.interface";

import { getUserById, getUserPlaylists } from "@/api/users.api";

export const useUser = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [playlists, setPlaylists] = useState<Playlist[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;

        const load = async () => {
            try {
                const userData = await getUserById(userId);
                setUser(userData);

                const playlistsData = await getUserPlaylists(userId);
                setPlaylists(playlistsData);
            } catch {
                setError("User Error");
            }
        };

        load();
    }, [userId]);

    return { user, playlists, error };
};
