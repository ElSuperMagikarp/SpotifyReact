import { View, ViewProps, Modal, Pressable } from 'react-native'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export type PopUpWindowHandle = {
    open: () => void
    close: () => void
}

type PopUpWindowProps = ViewProps & {
    children: React.ReactNode
}

export const PopUpWindow = forwardRef<PopUpWindowHandle, PopUpWindowProps>(
    ({ children, ...viewProps }, ref) => {
        const [visible, setVisible] = useState(false)

        useImperativeHandle(ref, () => ({
            open: () => setVisible(true),
            close: () => setVisible(false),
        }))
        return (
            <Modal
                visible={visible}
                transparent
                animationType="fade"
                className='relative'
                onRequestClose={() => setVisible(false)} // Android back button
            >
                <Pressable
                    className="flex-1 bg-black/50 justify-center items-center"
                    onPress={() => setVisible(false)}
                />
                <View className="z-99 absolute top-1/2 left-1/2 w-11/12 max-w-md bg-regular border-regular border-2 rounded-xl p-4" {...viewProps}>
                    {children}
                </View>
            </Modal>
        )
    }
)

PopUpWindow.displayName = "PopUpWindow"