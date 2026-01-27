import { ActivityIndicator, ScrollView, View } from "react-native";

export default function LoadingScreen() {
    return (
        <ScrollView
            className="flex-1 bg-regular"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View className="flex-1 flex justify-center items-center">
                <ActivityIndicator size="large" color="#1DB954" />
            </View>
        </ScrollView>
    );
}