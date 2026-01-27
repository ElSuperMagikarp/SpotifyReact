import { User } from 'lucide-react-native';
import { Text, View } from 'react-native';

import ListRenderer from '@/components/common/ListRenderer';
import PlaylistBox from '@/components/Playlist/PlaylistBox';
import Screen from '@/components/common/Screen';

import { useUser } from '@/hooks/users/useUser';

// TEMPORAL (s'ha de borrar quan hi hagi el login)
import { useUsers } from '@/hooks/users/useUsers';

const Profile = () => {
    // TEMPORAL (s'ha de borrar quan hi hagi el login)
    const { users } = useUsers();
    const firstUserId = users?.[0]?.id;
    // ------------------

    const { user, playlists, error } = useUser(firstUserId ?? "");

    return (
        <Screen horizontalPadding={50}>
            <View className="w-full flex items-center px-2">
                <Text className="text-title text-5xl underline">Profile</Text>
            </View>

            {error ? (
                <Text className="text-red-500 text-xl">{error}</Text>
            ) : user == null ? (
                <Text className="text-description text-xl">Carregant usuari...</Text>
            ) : (
                <View className="w-full flex flex-col sm:flex-row items-center justify-center mt-10">
                    <View className='w-[25vh] aspect-square bg-gray-700 dark:bg-gray-500 rounded-full overflow-hidden flex justify-center items-center'>
                        <User size={100} color="black"></User>
                    </View>
                    <View className='sm:h-full flex flex-col sm:justify-center sm:space-y-4 mt-2 sm:mt-0 sm:ml-4 text-center sm:text-start'>
                        <Text numberOfLines={1} className='text-regular text-5xl font-bold'>{user?.username}</Text>
                        <Text numberOfLines={1} className='text-description text-3xl'>{user?.email}</Text>
                    </View>
                </View>
            )}

            <ListRenderer
                title="Mis Playlists"
                data={playlists}
                error={error}
                emptyMessage="Encara no tens cap llista de reproducció"
                renderItem={(playlist) => (
                    <PlaylistBox
                        key={playlist.id}
                        playlist={playlist}
                    />
                )}
            />
        </Screen>
    )
}

export default Profile