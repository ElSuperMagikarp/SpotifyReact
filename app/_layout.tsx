import { Stack } from "expo-router";
import { House, Plus, User } from 'lucide-react-native';
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import MenuButton from "@/components/layout/MenuButton";

import "@/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="w-full h-full bg-regular flex-col-reverse sm:flex-row">
      {/* Menu */}
      <View className="bg-regular border-regular
        w-full h-[8%] border-t flex-row items-center justify-evenly
        sm:h-full sm:w-auto sm:min-w-[5%] sm:border-t-0 sm:border-r-2 sm:flex-col sm:px-5 sm:justify-start sm:py-10 gap-y-10">
        <MenuButton url="/profile" Icon={User} />
        <MenuButton url="/" Icon={House} />
        <MenuButton url="/newPlaylist" Icon={Plus} />
      </View>

      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SafeAreaView>
  )
}
