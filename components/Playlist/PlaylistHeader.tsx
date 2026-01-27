import { LinearGradient } from 'expo-linear-gradient';
import { Music } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { Playlist } from '@/interfaces/playlist.interface';
import { User } from '@/interfaces/user.interface';

interface Props {
    playlist: Playlist | null;
    user: User | null;
    error: string | null;
}

const PlaylistHeader = ({ playlist, error, user }: Props) => {
    const [PlaylistImageHasError, setPlaylistImageHasError] = useState(false)

    return (
        <LinearGradient
            colors={['#4ade80', '#166534']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="w-full flex flex-col items-center sm:flex-row p-6 sm:p-12"
        >
            <View className='w-[70%] sm:w-2/12 aspect-square bg-gray-500 rounded-md overflow-hidden flex justify-center items-center'>
                {PlaylistImageHasError ? (
                    <View className='flex flex-col justify-center items-center'>
                        <Text className='text-4xl'>!</Text>
                        <Text className='p-2 text-center'>Imatge not trobada</Text>
                    </View>
                ) : !playlist?.imageUrl ? (
                    <View className='flex flex-col justify-center items-center'>
                        <Music size={50}></Music>
                    </View>
                ) : (
                    <Image
                        source={{ uri: playlist?.imageUrl }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='cover'
                        onError={() => setPlaylistImageHasError(true)}
                    />
                )}
            </View>
            <View className='sm:ml-8 flex flex-col justify-center w-full mt-3 sm:mt-0'>
                {error ? (
                    <Text className="w-full text-red-500 text-left font-bold text-4xl mb-7">Error en la playlist</Text>
                ) : playlist == null ? (
                    <Text className="text-description text-xl">Carregant Playlist...</Text>
                ) : (
                    <>
                        <Text className="w-full text-title text-left font-bold text-2xl sm:text-8xl mb-1 sm:mb-7">{playlist?.name}</Text>
                        <Text className="w-full text-regular text-left text-md sm:text-lg">{playlist?.description}</Text>
                    </>
                )}
                {error ? (
                    <Text className="w-full text-red-500 text-left text-md">Error al usuari</Text>
                ) : user == null ? (
                    <Text className="text-description text-md">Carregant Usuari...</Text>
                ) : (
                    <Text className="w-full text-regular text-left text-md">{user?.username}</Text>
                )}
            </View>
        </LinearGradient>
    )
}

export default PlaylistHeader