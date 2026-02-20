import { Song } from '@/interfaces/song.interface';
import { Music2 } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import AddButton from './AddButton';

interface Props {
    index?: number;
    song: Song;
}

const SongRow = ({ index, song }: Props) => {
    const [SongImageHasError, setSongImageHasError] = useState(false)

    const durationMinutes = Math.trunc(song.duration / 60);
    const durationSeconds = song.duration % 60;
    const durationSecondsStr = durationSeconds < 10 ? "0".concat(durationSeconds.toString()) : durationSeconds;

    const durationStr = `${durationMinutes}:${durationSecondsStr}`

    return (
        <View className="w-full flex flex-row items-center my-2 space-x-4">
            {index != null && <Text className="hidden sm:block w-10 text-description text-md">{index}</Text>}
            <View className="flex flex-row flex-1 min-w-0">
                <View className='w-14 aspect-square bg-spotify-green rounded-md overflow-hidden flex justify-center items-center'>
                    {!SongImageHasError ? (
                        <Image
                            source={{ uri: song.imageUrl }}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode='cover'
                            onError={() => setSongImageHasError(true)}
                        />
                    ) : (
                        <View className='flex flex-col justify-center items-center'>
                            <Music2 size={20}></Music2>
                        </View>
                    )}
                </View>

                <View className="flex flex-1 flex-col justify-center ml-2">
                    <Text className="text-regular text-md" numberOfLines={1}>{song.title}</Text>
                    <Text className="text-description text-md" numberOfLines={1}>{song.artist}</Text>
                </View>

            </View>
            <Text className="hidden sm:block flex-1 min-w-0 text-regular text-md" numberOfLines={1}>{song.album}</Text>
            <Text className="hidden sm:block flex-1 min-w-0 text-regular text-md" numberOfLines={1}>{song.genre}</Text>
            <Text className="hidden sm:block w-16 text-regular text-md" numberOfLines={1}>{durationStr}</Text>

            <View className="w-7 flex justify-center items-center">
                <AddButton song={song} />
            </View>
        </View>
    )
}

export default SongRow