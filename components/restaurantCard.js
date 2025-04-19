import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import * as Icon from "react-native-feather";
import React from 'react'
import { themeColors } from '@/theme';
import { useRouter } from 'expo-router';

export default function RestaurantCard({ item }) {

  console.log(item);


  const router = useRouter()


  return (
    <TouchableWithoutFeedback
      onPress={() => router.push({
        pathname: '/restaurant',
        // params: {
        //   id: String(item.id),
        //   image: item.image,
        //   name: item.name,
        //   stars: item.stars,
        //   reviews: item.reviews,
        //   address: item.address,
        // },
        params: {
          item: JSON.stringify(item)
        }

      })}
    >

      <View
        style={{
          hadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          elevation: 10,
        }}
        className='mr-6 bg-white rounded-3xl shadow-lg'>
        <Image className='h-36 w-64 rounded-t-3xl' source={item.image} />
        <View className='px-3 gap-2'>
          <Text className='text-lg font-bold pt-2'>{item.name}</Text>
          <View className='flex-row items-center space-x-1'>
            <Image source={require('../assets/images/react-logo.png')} className='h-4 w-4' />
            <Text className='text-xs'>
              <Text className='text-green-700'>{item.stars}</Text>
              <Text className='text-gray-700'>
                ({item.reviews} review) - <Text className='font-semibold'>{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className='flex-row items-center space-x-1 mb-2'>
            <Icon.MapPin
              color={'gray'}
              width={15}
              height={15}
            />
            <Text className='text-gray-700 text-xs'> Nearby . {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}