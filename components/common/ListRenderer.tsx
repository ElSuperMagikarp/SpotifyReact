import { ScrollView, Text, View } from 'react-native';

type ListRendererProps<T> = {
    title: string;
    data: T[] | null;
    error?: string | null;
    emptyMessage?: string;
    renderItem: (item: T) => React.ReactNode;
};

function ListRenderer<T>({
    title,
    data,
    error,
    emptyMessage = "Nothing found :(",
    renderItem,
}: ListRendererProps<T>) {
    return (
        <View className="w-full flex mt-10">
            <Text className="text-title text-2xl mb-4">{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, alignItems: 'flex-start' }}>
                {error ? (
                    <Text className="text-red-500 text-xl">{error}</Text>
                ) : !data ? (
                    <Text className="text-description text-xl">Loading...</Text>
                ) : data.length > 0 ? (
                    data.map(renderItem)
                ) : (
                    <Text className="text-description text-xl">{emptyMessage}</Text>
                )}
            </ScrollView>
        </View>
    );
}

export default ListRenderer