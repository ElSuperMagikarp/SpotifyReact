import { Href, useRouter } from 'expo-router';
import { LucideIcon } from 'lucide-react-native';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';

interface Props {
    url: Href;
    Icon: LucideIcon;
}

const MenuButton = ({ url, Icon }: Props) => {
    const router = useRouter();
    const { width } = useWindowDimensions();

    const iconSize = width >= 640 ? 30 : 24; // sm breakpoint

    return (
        <View className="
            w-1/3 h-full
            sm:w-14 sm:h-auto shrink-0">
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => router.push(url)}
            >
                <Icon size={iconSize} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default MenuButton