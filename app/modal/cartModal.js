import { View, Text, Platform, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '@/theme';
import * as Icon from "react-native-feather";
import { useRouter } from 'expo-router';
import { featured } from '@/constants'



export default function CartModal() {
  const restaurant = featured.restaurants[0]
  const router = useRouter();

  return (
    
    <View className='bg-white flex-1'>
      {/* back button */}
      <View className={`relative py-4 ${Platform.OS === 'android' ? 'elevation-sm' : ''} ${Platform.OS === 'ios' ? 'shadow-sm' : ''}`}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className=' absolute z-10 rounded-full p-1 shadow top-10 left-2 '>
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className='text-center font-bold text-xl'>Your Cart</Text>
        <Text className='text-center text-gray-700'>{restaurant.name}</Text>
      </View>

      {/* diliver time */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}}
      className='flex-row px-4 items-center'>
        <Image source={require('../../assets/images/favicon.png')} className='w-20 h-20 rounded-full'/>
        <Text className='flex-1 pl-4'>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className='font-bold' style={{color: themeColors.text}}>Change</Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50
      }}
      className='bg-white pt-5'
      >
        {
          restaurant.dishes.map((dish, index)=>{
            return(
              <View 
              key={index}
              className={`flex-row items-center gap-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3  ${Platform.OS === 'ios'? 'shadow-md' : '' } ${Platform.OS === 'android' ? 'elevation-md' : ''}`}
              >
                <Text className='font-bold' style={{color: themeColors.text}}>2 x</Text>
                <Image className='h-14 w-14 rounded-full' source={dish.image}/>
                <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                <Text className='font-semibold text-base'>${dish.price}</Text>
                <TouchableOpacity
                className='p-1 rounded-full'
                style={{backgroundColor: themeColors.bgColor(1)}}>
                  <Icon.Minus strokeWidth={2} stroke={'white'} height={20} width={20}/>
                </TouchableOpacity>
              </View>
            )      })
        }
      </ScrollView>
      {/* totals */}
      <View
      style={{backgroundColor: themeColors.bgColor(0.2)}} className='p-6 px-8 rounded-t-3xl gap-4'>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Subtotal</Text>
          <Text className='text-gray-700'>$20</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Delivery Fee</Text>
          <Text className='text-gray-700'>$2</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700 font-extrabold'>Order Total</Text>
          <Text className='text-gray-700 font-extrabold'>$30</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>router.push('/modal/customModal/orderPrepareScreen')}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className='p-3 rounded-full'>
          <Text className='text-white text-center font-bold text-lg'>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}