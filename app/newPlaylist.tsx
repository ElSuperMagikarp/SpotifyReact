import { Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { useCreatePlaylist } from '@/hooks/playlists/useCreatePlaylist';

import { Plus } from 'lucide-react-native';
import Screen from '@/components/common/Screen'
import { Button } from '@/components/common/Button';

// TEMPORAL (s'ha de borrar quan hi hagi el login)
import { useUsers } from '@/hooks/users/useUsers';
// ------------------

export default function CreatePlaylistPage() {
    // TEMPORAL (s'ha de borrar quan hi hagi el login)
    const { users } = useUsers();
    const firstUserId = users?.[0]?.id;
    // ------------------

    const router = useRouter();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [doneSubmitting, setDoneSubmitting] = useState<boolean | undefined>(undefined);

    const { submit, loading, error } = useCreatePlaylist();

    const handleSubmit = async () => {
        if (!name.trim()) return;
        setDoneSubmitting(false)

        const newPlaylist = await submit({
            userId: firstUserId ?? "",
            name: name.trim(),
            description: description.trim() || undefined,
            imageUrl: imageUrl.trim() || undefined,
        });

        if (newPlaylist != null) {
            router.push({
                pathname: "/playlist/[id]",
                params: { id: newPlaylist.id }
            })
        }

        setDoneSubmitting(true)
    };

    return (
        <Screen>
            <View className="w-full flex items-center px-2">
                <Text className="text-title text-5xl underline">Nova llista de reproducció</Text>
            </View>
            <View className='flex-1 flex flex-col justify-center items-center gap-y-10'>
                <View className='flex flex-col gap-y-1'>
                    <View className='flex flex-row gap-x-1'>
                        <Text className='text-title text-xl'>Nom Playlist</Text>
                        <Text className='text-red-500 text-xl'>*</Text>
                    </View>

                    <TextInput
                        placeholder="Playlist name *"
                        value={name}
                        onChangeText={setName}
                        className="form-input"
                    />
                </View>

                <View className='flex flex-col gap-y-1'>
                    <Text className='text-title text-xl'>Descripció</Text>
                    <TextInput
                        placeholder="Description (optional)"
                        value={description}
                        onChangeText={setDescription}
                        className="form-input"
                    />
                </View>

                <View className='flex flex-col gap-y-1'>
                    <Text className='text-title text-xl'>URL Imatge</Text>
                    <TextInput
                        placeholder="Image URL (optional)"
                        value={imageUrl}
                        onChangeText={setImageUrl}
                        autoCapitalize="none"
                        className="form-input"
                    />
                </View>
            </View>

            {error && <Text className="text-red-500">{error}</Text>}

            <View className='h-[20%] flex flex-row justify-center items-center gap-x-20'>
                <Button
                    onPress={() => {
                        if (router.canGoBack()) {
                            router.back();
                        } else {
                            router.push("/");
                        }
                    }}
                    disabled={loading}
                >
                    <Text className="text-white text-center">Cancel·lar</Text>
                </Button>
                <Button
                    onPress={handleSubmit}
                    disabled={loading || !name.trim() || doneSubmitting === false}
                    className="button-green"
                >
                    <Plus size={20} />
                    <Text className="text-white text-center">
                        {loading ? "Creant..." : "Crear"}
                    </Text>
                </Button>
            </View>
        </Screen>
    )
}