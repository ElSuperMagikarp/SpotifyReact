import { Image, Text, View } from "react-native";

import ListRenderer from "@/components/common/ListRenderer";
import PlaylistBox from "@/components/Playlist/PlaylistBox";
import Screen from "@/components/common/Screen";
import SongBox from "@/components/Song/SongBox";

import { usePlaylists } from "@/hooks/playlists/usePlaylists";
import { useSongs } from "@/hooks/songs/useSongs";

export default function Index() {
  const songs = useSongs();
  const playlists = usePlaylists();

  return (
    <Screen>
      <View className="w-full flex flex-row justify-center items-center space-x-8 px-2">
        <Image
          source={require('@/assets/images/spotify2logo.png')}
          style={{ width: 100, height: 100 }}
          resizeMode='cover'
        />
        <Text className="hidden sm:block text-title text-5xl underline">Spotify 2: Electric Boogaloo</Text>
      </View>

      <ListRenderer
        title="Cançons"
        data={songs.songs}
        error={songs.error}
        emptyMessage="No hem trobat cançons :("
        renderItem={(song) => (
          <SongBox
            key={song.id}
            song={song}
          />
        )}
      />

      <ListRenderer
        title="Playlists"
        data={playlists.playlists}
        error={playlists.error}
        emptyMessage="No hem trobat llistes de reproducció :("
        renderItem={(playlist) => (
          <PlaylistBox
            key={playlist.id}
            playlist={playlist}
          />
        )}
      />
    </Screen>
  );
}
