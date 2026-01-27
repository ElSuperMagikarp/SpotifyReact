import { SearchAlert } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

type ErrorScreenProps = {
    message?: string;
};

export default function ErrorScreen({ message }: ErrorScreenProps) {
    return (
        <ScrollView
            className="flex-1 bg-regular"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View className="flex-1 flex flex-col justify-center items-center">
                <SearchAlert size={200} color={"#fff"}></SearchAlert>
                <Text>{message}</Text>
            </View>
        </ScrollView>
    );
}