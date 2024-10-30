import { View, Text, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { useColorScheme } from 'nativewind'

export default function PersonalCoach() {

    const {colorScheme} = useColorScheme()

  return (
    <View className='w-[350px] pb-[50px] mt-[50px] h-[150px] overflow-y-visible justify-center flex-row items-center'
        style={{backgroundColor: colorScheme === 'dark' ? '#525151' : '#232728'}}
    >
        <View className='items-center'>
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/82.jpg'}}
                className='w-[75px] h-[150px] m-[10px] ml-[-40px] mr-[15px] drop-shadow-2xl'
            />
            <View className='flex-row items-center ml-[-40px] mr-[15px]'>
                <AntDesign name="star" size={10} color="yellow"/>
                <AntDesign name="star" size={10} color="yellow"/>
                <AntDesign name="star" size={10} color="yellow"/>
                <AntDesign name="star" size={10} color="yellow"/>
                <AntDesign name="star" size={10} color="yellow"/>
            </View>
        </View>
        <View className='items-start mt-[30px]'>
            <Text className='text-2xl text-white font-bold text-center'>Sarah Stratford</Text>
            <Text className='text-gray-400'>Personal Coach</Text>
            <View className='items-center flex-row'>
                <View className='mx-[15px]'>
                    <Text className='text-white font-bold text-lg'>241</Text>
                    <Text className='text-gray-400'>Students</Text>
                </View>
                <View className='mx-[15px]'>
                    <Text className='text-white font-bold text-lg'>24</Text>
                    <Text className='text-gray-400'>Champions</Text>
                </View>
            </View>
        </View>
    </View>
  )
}