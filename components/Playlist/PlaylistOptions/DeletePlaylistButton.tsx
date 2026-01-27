import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';

import { Playlist } from '@/interfaces/playlist.interface';
import { useDeletePlaylist } from '@/hooks/playlists/useDeletePlaylist';

import { Trash } from 'lucide-react-native';

interface Props {
    playlist: Playlist | null;
}

const DeletePlaylistButton = ({ playlist }: Props) => {
    const router = useRouter();

    const { deletePlaylistById, error } = useDeletePlaylist();

    const handleDelete = async () => {
        if (!playlist) return

        await deletePlaylistById(playlist.id)

        if (!error) router.replace("/")
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