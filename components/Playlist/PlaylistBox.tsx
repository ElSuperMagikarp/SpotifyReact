import { useRouter } from 'expo-router';
import { Music } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Playlist } from '@/interfaces/playlist.interface';

interface Props {
    playlist: Playlist;
}

const PlaylistBox = ({ playlist }: Props) => {
    const [ImageHasError, setImageHasError] = useState(false)
    const router = useRouter();

    return (
        <TouchableOpacity className='flex flex-col justify-center w-28 sm:w-44'
            onPress={() => router.push({
                pathname: "/playlist/[id]",
                params: { id: playlist.id }
            })}>
            <View className='w-full aspect-square bg-spotify-green rounded-md overflow-hidden flex justify-center items-center'>
                {ImageHasError || !playlist.imageUrl ? (
                    <View className='flex flex-col justify-center items-center'>
                        <Music size={50}></Music>
                    </View>
                ) : (
                    <Image
                        source={{ uri: playlist.imageUrl }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='cover'
                        onError={() => setImageHasError(true)}
                    />
                )}
            </View>
            <View className='mt-2'>
                <Text numberOfLines={2} className='text-regular text-md font-bold'>{playlist.name}</Text>
                <Text numberOfLines={2} className='text-description text-sm'>{playlist.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaylistBox