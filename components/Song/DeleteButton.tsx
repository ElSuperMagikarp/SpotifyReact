import { TouchableOpacity } from 'react-native'
import { usePathname, useRouter } from 'expo-router';

import { useRemoveSong } from '@/hooks/playlists/useRemoveSong';

import { Playlist } from '@/interfaces/playlist.interface';
import { Song } from '@/interfaces/song.interface';

import { Trash } from 'lucide-react-native';

interface Props {
    playlist: Playlist | null;
    song: Song;
}

const DeletePlaylistButton = ({ playlist, song }: Props) => {
    const router = useRouter();

    const { removeSong, error } = useRemoveSong();

    const handleDelete = async () => {
        if (!playlist) return

        await removeSong(playlist.id, song.id)
        if (!error) router.replace({
            pathname: "/playlist/[id]",
            params: { id: playlist.id }
        })
    };

    return (
        <TouchableOpacity
            className='minimal-button'
            onPress={handleDelete}
        >
            <Trash size={30} />
        </TouchableOpacity>
    )
}

export default DeletePlaylistButton