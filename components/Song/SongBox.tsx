import { Music2 } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { Song } from '@/interfaces/song.interface';

import AddButton from './AddButton';

interface Props {
    song: Song
}

const SongBox = ({ song }: Props) => {
    const [ImageHasError, setImageHasError] = useState(false)

    return (
        <View className='flex flex-col justify-center w-28 sm:w-44'>
            <View className='group w-full aspect-square bg-gray-500 rounded-md overflow-hidden flex justify-center items-center'>
                {!ImageHasError ? (
                    <Image
                        source={{ uri: song.imageUrl }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='cover'
                        onError={() => setImageHasError(true)}
                    />
                ) : (
                    <View className='flex flex-col justify-center items-center'>
                        <Music2 size={50}></Music2>
                    </View>
                )}
                <AddButton
                    song={song}
                    size={35}
                    buttonWrapperClassName='absolute right-2 bottom-2 flex justify-center items-center transition-opacity opacity-0 group-hover:opacity-100'
                    className='p-1 bg-spotify-green rounded-full'
                />
            </View>
            <View className='mt-2'>
                <Text numberOfLines={1} className='text-regular text-md font-bold'>{song.title}</Text>
                <Text numberOfLines={1} className='text-description text-sm'>{song.artist}</Text>
            </View>
        </View>
    )
}

export default SongBox