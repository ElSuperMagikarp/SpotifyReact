import { useLocalSearchParams } from "expo-router";

import { usePlaylist } from "@/hooks/playlists/usePlaylist";

import PlaylistHeader from "@/components/Playlist/PlaylistHeader";
import Screen from "@/components/common/Screen";
import SongTable from "@/components/Song/SongTable";
import PlaylistOptions from "@/components/Playlist/PlaylistOptions";

const Playlist = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    const { playlist, songs, user, error } = usePlaylist(id);

    return (
        <Screen padding={0}>
            <PlaylistHeader
                playlist={playlist}
                user={user}
                error={error}
            />

            {!error ? (
                <PlaylistOptions
                    playlist={playlist}
                />
            ) : ""}

            <SongTable songs={songs} error={error} />
        </Screen>
    )
}

export default Playlist