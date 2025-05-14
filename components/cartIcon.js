import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '@/theme'
import { useRouter } from 'expo-router'

export default function CartIcon() {
    const router = useRouter();
    return (
        <View className='absolute bottom-5 w-full z-50'>
            <TouchableOpacity
                onPress={() => { router.push('/modal/cartModal') }}
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className={`flex-row justify-between items-center mx-5 rounded-full p-4 py-3 ${Platform.OS === 'ios' ? 'shadow-lg' : ''} ${Platform.OS === 'android' ? 'elevation-lg' : ''}`}
            >
                <View>
                    <Text>3</Text>
                </View>
                <Text>View Cart</Text>
                <Text>${23}</Text>
            </TouchableOpacity>
        </View>
    )
}