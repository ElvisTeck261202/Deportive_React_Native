import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import RankingBar from '../components/RankingBar'
import PersonalCoach from '../components/PersonalCoach'
import ProgressGraphic from '../components/ProgressGraphic'
import Summary from '../components/Summary'
import { useColorScheme } from 'nativewind'

export default function TestScreen4() {

  const {colorScheme} = useColorScheme()

  return (
    <ScrollView className='h-full'
      style={{backgroundColor: colorScheme === 'dark' ? '#292b2a' : '#ffffff'}}
    >
      <View className='justify-center items-center'>
        <Image
          source={require('../assets/weights_image.png')}
          className='h-[325px] w-full relative'
        />
        <View className='items-center absolute'>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/72.jpg' }}
            className='h-[150px] w-[150px] rounded-full shadow-xl'
          />
          <Text className='text-white pt-[15px] text-center text-4xl font-bold'>Lucy Heaton</Text>
          <Text className='text-gray-400'>Intermediate Athlete</Text>
        </View>
      </View>
      <View className='items-center'>
        {/** Ranking Bar */}
        <RankingBar/>
        {/** Personal Coach */}
        <PersonalCoach/>
        {/** Progress Graphic */}
        <ProgressGraphic/>
        {/** Summary */}
        <Summary/>
      </View>
    </ScrollView>

  )
} 
