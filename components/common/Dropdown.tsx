import { View } from "react-native";

type DropdownProps = {
    isOpen: boolean;
    children: React.ReactNode;
    bottomSpace?: number;
    minWidth?: number;
    horizontalPositionClass?: string;
};

export function Dropdown({ isOpen, children, bottomSpace = 16, minWidth = 48, horizontalPositionClass = "right-0" }: DropdownProps) {
    if (!isOpen) return;

    return (
        <View
            className={`absolute bottom-${bottomSpace} ${horizontalPositionClass} min-w-${minWidth} bg-regular border-regular border rounded-lg p-4 shadow-lg`}
        >
            {children}
        </View>
    );
}
