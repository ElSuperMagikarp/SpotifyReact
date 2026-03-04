import { useState } from "react";
import { Text, TextInput, View } from "react-native";

import Screen from "@/components/common/Screen";
import { Button } from "@/components/common/Button";
import { LogIn } from "lucide-react-native";

export default function Index() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Screen padding={0}>
            <View className="w-full h-full flex flex-col justify-center items-center">
                <View className='w-full h-full sm:w-auto sm:h-auto
                                flex flex-col justify-center items-center gap-y-10 sm:rounded-xl bg-regular-2 p-10'
                >
                    <Text className="text-title font-bold text-2xl">Inici de sessió</Text>

                    <View className='flex flex-col gap-y-1'>
                        <Text className='text-title text-xl'>Nom</Text>

                        <TextInput
                            placeholder="Nom"
                            value={name}
                            onChangeText={setName}
                            className="form-input"
                        />
                    </View>

                    <View className='flex flex-col gap-y-1'>
                        <Text className='text-title text-xl'>Contrasenya</Text>
                        <TextInput
                            placeholder="Contrasenya"
                            value={password}
                            onChangeText={setPassword}
                            className="form-input"
                        />
                    </View>

                    <Button
                        //onPress={handleSubmit}
                        //disabled={loading || !name.trim() || doneSubmitting === false}
                        className="button-green"
                    >
                        <LogIn size={20} />
                        <Text className="text-white text-center">
                            {/*loading*/ false ? "Entrant..." : "Entrar"}
                        </Text>
                    </Button>
                </View>
            </View>
        </Screen>
    );
}
