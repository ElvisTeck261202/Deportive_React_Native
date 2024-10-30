import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function RankingBar() {
  return (
    <View className='pt-[20px] flex-row items-center'>
        <View className='items-center px-[15px]'> 
          <View className='flex-row items-center'>
            <Ionicons name="trophy" size={24} color="gold" />
            <Text className='text-2xl dark:text-white pl-[10px]'>1</Text>
          </View>
          <Text className='text-xl text-gray-400'>Ranking</Text>
        </View>
        <View className='items-center px-[15px]'> 
          <View className='flex-row items-center'>
            <Text className='text-2xl dark:text-white pl-[10px]'>3 214</Text>
          </View>
          <Text className='text-xl text-gray-400'>Points</Text>
        </View>
        <View className='items-center px-[15px]'> 
          <View className='flex-row items-center'>
            <Text className='text-2xl dark:text-white pl-[10px]'>24</Text>
          </View>
          <Text className='text-xl text-gray-400'>Goal streaks</Text>
        </View>
    </View>
  )
}