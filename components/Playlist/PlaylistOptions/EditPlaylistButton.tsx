import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router';

import { CreatePlaylistDTO, Playlist } from '@/interfaces/playlist.interface';
import { useEditPlaylist } from '@/hooks/playlists/useEditPlaylist';

import { Pencil } from 'lucide-react-native';
import { PopUpWindow, PopUpWindowHandle } from '@/components/common/PopUpWindow';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/common/Button';

interface Props {
    playlist: Playlist | null;
}

const EditPlaylistButton = ({ playlist }: Props) => {
    const router = useRouter();

    const { edit, loading, error } = useEditPlaylist();

    const [name, setName] = useState(playlist?.name);
    const [description, setDescription] = useState(playlist?.description ?? '');
    const [imageUrl, setImageUrl] = useState(playlist?.imageUrl ?? '');

    const modalRef = useRef<PopUpWindowHandle>(null);

    useEffect(() => {
        if (!playlist) return;

        setName(playlist.name);
        setDescription(playlist.description ?? '');
        setImageUrl(playlist.imageUrl ?? '');
    }, [playlist]);

    const handleEdit = async () => {
        if (!playlist) return

        const editPlaylist: CreatePlaylistDTO = {
            userId: playlist.userId,
            name: name ?? playlist.name,
            description: description ?? playlist.description,
            imageUrl: imageUrl ?? playlist.imageUrl,
        };

        await edit(playlist.id, editPlaylist)

        modalRef.current?.close();

        console.log(error)


        if (error == null) {
            router.replace({ pathname: "/playlist/[id]", params: { id: playlist.id } })
        } else {
            router.replace("/")
        }
    };

    return (
        <>
            <TouchableOpacity
                className='minimal-button'
                onPress={() => { modalRef.current?.open(); }}
                disabled={loading}
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
                                value={name}
                                onChangeText={setName}
                                editable={!loading}
                                className="form-input"
                            />
                        </View>

                        <View className='flex flex-col gap-y-1'>
                            <Text className='text-regular'>Descripció</Text>
                            <TextInput
                                placeholder="Description (optional)"
                                value={description}
                                onChangeText={setDescription}
                                editable={!loading}
                                className="form-input"
                            />
                        </View>

                        <View className='flex flex-col gap-y-1'>
                            <Text className='text-regular'>URL Imatge</Text>
                            <TextInput
                                placeholder="Image URL (optional)"
                                value={imageUrl}
                                onChangeText={setImageUrl}
                                editable={!loading}
                                autoCapitalize="none"
                                className="form-input"
                            />
                        </View>
                    </View>

                    <View className='flex-1 flex flex-row justify-around items-center mt-4'>
                        <Button
                            onPress={() => { modalRef.current?.close() }}
                            disabled={loading}
                        >
                            <Text className="text-white text-center">Cancel·lar</Text>
                        </Button>
                        <Button
                            onPress={handleEdit}
                            className="button-green"
                            disabled={loading}
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