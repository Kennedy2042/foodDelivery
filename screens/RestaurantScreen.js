import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '@/theme';
import { useRouter } from 'expo-router';
import DishRow from '@/components/dishRow'
import CartIcon from '@/components/cartIcon'
import {StatusBar} from 'expo-status-bar'


export default function RestaurantScreen({ item }) {
  console.log("data from item", item)

  const router = useRouter()




  return (
    <View>
      <CartIcon/>
      <StatusBar style='dark'/>
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={item.image} />
          <TouchableOpacity
            onPress={() =>
              router.back()
            }
            className='absolute top-4 left-3 p-2 bg-gray-50 rounded-full shadow' >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className='bg-white -mt-12 pt-6 '
        >
          <View className='px-5'>
            <Text className='text-3xl font-bold'>{item.name}</Text>
            <View className='flex-row space-x-4 my-1 items-center'>
              <View className='flex-row items-center space-x-1'>
                <Image source={require('../assets/images/react-logo.png')} className='h-4 w-4' />
                <Text className='text-xs'>
                  <Text className='text-green-700'>{item.stars}</Text>
                  <Text className='text-gray-700'>
                    ({item.reviews} review) - <Text className='font-semibold'>{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className='flex-row items-center space-x-1 ml-3'>
                <Icon.MapPin
                  color={'gray'}
                  width={10}
                  height={10}
                />
                <Text className='text-gray-700 text-xs'> Nearby . {item.address}</Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2'>{item.description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>

          {/* dishes */}
          {
            item.dishes.map((dish, index) => <DishRow key={dish.id} item={{...dish}} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}