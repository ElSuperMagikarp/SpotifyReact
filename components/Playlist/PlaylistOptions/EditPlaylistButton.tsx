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

            <PopUpWindow ref={modalRef}>
                <View className="w-11/12 max-w-md bg-regular border-regular border-2 rounded-xl p-4 flex flex-col gap-y-4">
                    <Text className="text-lg font-bold text-title">
                        Edit playlist
                    </Text>
                    <View className='flex flex-col justify-center items-center gap-y-10'>
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

                    <View className='flex-1 flex flex-row justify-around items-center mt-4'>
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
                </View>
            </PopUpWindow>
        </>
    )
}

export default EditPlaylistButton