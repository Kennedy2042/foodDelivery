import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '@/constants'
import MapView, { Marker } from 'react-native-maps'

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0]
    return (
        <View className='flex-1'>
            {/* map view */}
            <MapView
                initialRegion={{
                    // latitude: restaurant.lat,
                    latitude: 37.78825,
                    longitude: -122.4324,
                    // longitude: restaurant.lng,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                }}
                className='flex-1'
                mapType='standard'>
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        // latitude: restaurant.lat,
                        // longitude: restaurant.lng,
                    }} />
            </MapView>
        </View>
    )
}