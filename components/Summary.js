import { View, Text, Image } from 'react-native'
import React from 'react'
import Circle from './Circle'

export default function Summary() {
  return (
    <View className='w-[350px] overflow-x-visible items-center'>
      <Text className='text-gray-400 text-left w-full'>Steps</Text>
      <Text className='dark:text-white text-7xl font-bond mt-[15px] w-full text-left'>11 476</Text>
      <View className='w-[400px] h-[100px] border border-gray-600 mb-[30px] flex-row justify-center items-center'>
        <View className='items-center justify-center px-[30px] border-r-gray-600 border-r h-full w-[140px]'>
            <Text className='text-gray-400'>Kilometers</Text>
            <Text className='text-3xl dark:text-white font-bold'>7.8</Text>
        </View>
        <View className='items-center justify-center px-[30px] border-r-gray-600 border-r h-full w-[140px]'>
            <Text className='text-gray-400'>Calories</Text>
            <Text className='text-3xl dark:text-white font-bold'>252</Text>
        </View>
        <View className='items-center justify-center px-[30px] border-r-gray-600 border-r h-full w-[140px]'>
            <Text className='text-gray-400'>Points</Text>
            <Text className='text-3xl dark:text-white font-bold'>73</Text>
        </View>
      </View>
      <Text className='text-lg font-bold dark:text-white text-start w-full mb-[30px]'>Exercises Done</Text>
      <View className='flex-row mb-[15px] items-start'>
        <Circle/>
        <View className='w-[230px] h-[75px]'>
            <Image
                source={require('../assets/cobra_lift.jpg')}
                className='w-full h-full ml-[25px]'  
            />
            <Text className='text-white absolute ml-[50px] mt-[20px] font-bold text-lg'>Cobra Lift</Text>
            <Text className='text-white absolute ml-[50px] mt-[45px]'>With Sara Stratford</Text>
        </View>
      </View>
    </View>
    
  )
}