import { View } from 'react-native';

import { Playlist } from '@/interfaces/playlist.interface';

import EditPlaylistButton from './PlaylistOptions/EditPlaylistButton';
import DeletePlaylistButton from './PlaylistOptions/DeletePlaylistButton';

interface Props {
    playlist: Playlist | null;
}

const PlaylistOptions = ({ playlist }: Props) => {
    // S'HA DE IMPLEMENTAR: Error si no es la teva playlist
    return (
        <>
            <View className='flex flex-row gap-x-2 px-4 py-2'>
                <EditPlaylistButton
                    playlist={playlist}
                />
                <DeletePlaylistButton
                    playlist={playlist}
                />
            </View>
        </>
    )
}

export default PlaylistOptions