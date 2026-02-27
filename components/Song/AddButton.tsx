import { View, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useUsers } from '@/hooks/users/useUsers';
import { useUser } from '@/hooks/users/useUser';
import { Button } from '../common/Button';
import { Song } from '@/interfaces/song.interface';
import { useAddSong } from '@/hooks/playlists/useAddSong';
import { Playlist } from '@/interfaces/playlist.interface';
import { Dropdown } from '../common/Dropdown';
import { useState } from 'react';

interface Props {
    song: Song;
    size?: number;
    className?: string;
    buttonWrapperClassName?: string;
}

const AddButton = ({ song, size, className, buttonWrapperClassName }: Props) => {
    // TEMPORAL (s'ha de borrar quan hi hagi el login)
    const { users } = useUsers();
    const firstUserId = users?.[0]?.id;
    // ------------------

    const { playlists, error: playlistError } = useUser(firstUserId ?? "");

    const { add, error: songError } = useAddSong();

    const handleAddToPlaylist = async (playlist: Playlist) => {
        if (!playlist) return

        await add(playlist.id, song.id)
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <>
            <View className={`${buttonWrapperClassName}`}>
                <TouchableOpacity className={`flex flex-col justify-center items-center text-white ${className ?? ''}`}
                    onPress={toggleDropdown}>
                    <Plus size={size ? size : 20}></Plus>
                </TouchableOpacity>
            </View>
            <Dropdown isOpen={isDropdownOpen}>
                <Text className="text-title text-base mb-2">
                    Afegir a playlist
                </Text>
                {songError ? (
                    <Text className="text-red-500">
                        {songError}
                    </Text>
                ) : playlistError ? (
                    <Text className="text-red-500">
                        {playlistError}
                    </Text>
                ) : playlists ? (
                    playlists.map((playlist) => (
                        <Button key={playlist.id}
                            className='bg-gray-700 hover:bg-gray-800 hover:cursor-pointer rounded-md'
                            onPress={() => handleAddToPlaylist(playlist)}
                        >
                            {playlist.name}
                        </Button>
                    ))
                ) : (
                    <Text className="text-description">
                        Loading...
                    </Text>
                )}
            </Dropdown>
        </>
    )
}

export default AddButton