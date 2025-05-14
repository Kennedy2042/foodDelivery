import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function OrderPreparingScreen() {

  const router = useRouter()

  useEffect(
    () => {
      setTimeout(
        () => {
          router.push('delivery')
        }, 3000
      )
    }
  )

  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image source={require('../../../assets/images/favicon.png')} />
    </View>
  )
}