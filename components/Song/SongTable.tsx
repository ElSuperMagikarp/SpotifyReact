import { Clock } from 'lucide-react-native';
import { ActivityIndicator, Text, View } from 'react-native';

import SongRow from './SongRow';

import { Playlist } from '@/interfaces/playlist.interface';
import { Song } from '@/interfaces/song.interface';

interface Props {
    playlist: Playlist | null;
    songs: Song[] | null;
    error: string | null;
}

const SongTable = ({ playlist, songs, error }: Props) => {
    if (error) {
        return (
            <View className="flex-1 flex flex-col items-center justify-center">
                <Text className="text-red-500 text-3xl">!</Text>
                <Text className="text-red-500 text-xl">{error}</Text>
            </View>
        );
    }

    if (songs == null) {
        return (
            <View className="flex-1 flex flex-row items-center justify-center">
                <ActivityIndicator size="large" color="#1DB954" />
            </View>
        );
    }

    if (songs.length === 0) {
        return (
            <View className="flex-1 flex flex-col items-center justify-center">
                <Text className="text-description text-xl">Aquesta llista està buida</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 px-6 py-4 pt-0">
            <View className="hidden w-full sm:flex flex-row items-center mb-2 py-2 space-x-4 border-b border-regular">
                <Text className="w-10 text-description text-md">#</Text>
                <Text className="flex flex-row flex-1 min-w-0 text-description text-md" numberOfLines={1}>Title</Text>
                <Text className="flex-1 min-w-0 text-description text-md" numberOfLines={1}>Album</Text>
                <Text className="flex-1 min-w-0 text-description text-md" numberOfLines={1}>Genre</Text>
                <View className="w-16 text-description text-md"><Clock size={20} color={"#9ca3af"}></Clock></View>
                <View className="w-7"></View>
            </View>

            {/* Desktop */}
            <View>
                {songs.map((song, index) => (
                    <SongRow key={song.id} index={index + 1} song={song} playlist={playlist} />
                ))}
            </View>
        </View>
    )
}

export default SongTable