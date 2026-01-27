import { ReactNode } from "react";
import { ScrollView } from "react-native";

type ScreenProps = {
    children: ReactNode;
    padding?: number;
    horizontalPadding?: number;
};

export default function Screen({ children, padding = 28, horizontalPadding }: ScreenProps) {
    return (
        <ScrollView
            className="flex-1 bg-regular"
            contentContainerStyle={{ flexGrow: 1, padding: padding, paddingHorizontal: horizontalPadding }}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    );
}
