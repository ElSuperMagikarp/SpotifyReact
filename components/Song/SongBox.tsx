import { Music2 } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

interface Props {
    title: string;
    artist: string;
    imageUrl: string;
}

const SongBox = ({ title, artist, imageUrl }: Props) => {
    const [ImageHasError, setImageHasError] = useState(false)

    return (
        <View className='flex flex-col justify-center w-28 sm:w-44'>
            <View className='w-full aspect-square bg-spotify-green rounded-md overflow-hidden flex justify-center items-center'>
                {!ImageHasError ? (
                    <Image
                        source={{ uri: imageUrl }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='cover'
                        onError={() => setImageHasError(true)}
                    />
                ) : (
                    <View className='flex flex-col justify-center items-center'>
                        <Music2 size={50}></Music2>
                    </View>
                )}
            </View>
            <View className='mt-2'>
                <Text numberOfLines={1} className='text-regular text-md font-bold'>{title}</Text>
                <Text numberOfLines={1} className='text-description text-sm'>{artist}</Text>
            </View>
        </View>
    )
}

export default SongBox