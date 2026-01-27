import { Pressable, View, PressableProps } from "react-native";

type ButtonProps = PressableProps & {
    className?: string;
    wrapperClassName?: string;
    children: React.ReactNode;
};

export function Button({
    children,
    className = "button-regular",
    wrapperClassName = "button-wrapper",
    ...pressableProps
}: ButtonProps) {
    return (
        <Pressable
            className={className}
            {...pressableProps}
        >
            <View className={wrapperClassName}>
                {children}
            </View>
        </Pressable>
    );
}
