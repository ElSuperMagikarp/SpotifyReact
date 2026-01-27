import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router';

import { Playlist } from '@/interfaces/playlist.interface';
import { useDeletePlaylist } from '@/hooks/playlists/useDeletePlaylist';

import { Pencil } from 'lucide-react-native';
import { PopUpWindow, PopUpWindowHandle } from '@/components/common/PopUpWindow';
import { useRef } from 'react';
import { Button } from '@/components/common/Button';

interface Props {
    playlist: Playlist | null;
}

const EditPlaylistButton = ({ playlist }: Props) => {
    const router = useRouter();

    const { deletePlaylistById, error } = useDeletePlaylist();

    const modalRef = useRef<PopUpWindowHandle>(null);

    const handleEdit = async () => {
        if (!playlist) return

        await deletePlaylistById(playlist.id)

        modalRef.current?.close();
        if (!error) router.replace("/")
    };

    return (
        <>
            <TouchableOpacity
                className='minimal-button'
                onPress={() => { modalRef.current?.open(); }}
            >
                <Pencil size={30} />
            </TouchableOpacity>

            <PopUpWindow>
                <Text className="text-lg font-bold mb-4 text-title">
                    Edit playlist
                </Text>
                <View className='flex-1 flex flex-col justify-center items-center gap-y-10'>
                    <View className='flex flex-col gap-y-1'>
                        <View className='flex flex-row gap-x-1'>
                            <Text className='text-regular'>Nom Playlist</Text>
                            <Text className='text-red-500'>*</Text>
                        </View>

                        <TextInput
                            placeholder="Playlist name *"
                            value={playlist?.name}
                            className="form-input"
                        />
                    </View>

                    <View className='flex flex-col gap-y-1'>
                        <Text className='text-regular'>Descripció</Text>
                        <TextInput
                            placeholder="Description (optional)"
                            value={playlist?.description}
                            className="form-input"
                        />
                    </View>

                    <View className='flex flex-col gap-y-1'>
                        <Text className='text-regular'>URL Imatge</Text>
                        <TextInput
                            placeholder="Image URL (optional)"
                            value={playlist?.imageUrl}
                            autoCapitalize="none"
                            className="form-input"
                        />
                    </View>
                </View>

                <View className='flex-1 flex flex-row justify-around items-center'>
                    <Button
                        onPress={() => { modalRef.current?.close() }}
                    >
                        <Text className="text-white text-center">Cancel·lar</Text>
                    </Button>
                    <Button
                        onPress={handleEdit}
                        className="button-green"
                    >
                        <Text className="text-white text-center">Guardar</Text>
                    </Button>
                </View>
            </PopUpWindow>
        </>
    )
}

export default EditPlaylistButton