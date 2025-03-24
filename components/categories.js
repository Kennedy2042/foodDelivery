import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'

export default function Categories() {
    return (
        <View className='mt-4 '>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='overflow-visible'
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories.map((category, index) => {
                        return (
                            <View key={index} className='flex justify-center items-center mr-6'>
                                <TouchableOpacity 
                                className='p-1 rounded-full bg-gray-200'>
                                    <Image style={{width: 45, height: 45}} source={category.image}/>
                                    <Text className='text-sm'>{category.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}