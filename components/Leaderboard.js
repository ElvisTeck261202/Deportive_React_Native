import { View, Text, Animated, SafeAreaView, Image } from 'react-native'
import React from 'react'
import data from './data.json'

export default function Leaderboard({ scrollY }) {

  const Item = ({item}) => (
    <View className='flex-row mx-[30px] dark:bg-[#1d1e1e] items-center w-full'>
        <Text className='text-gray-500 w-[25px]'>{item.position}</Text>
        <View className='flex-row border-t-[1px] dark:border-gray-700 w-[500px] ml-[10px] py-[15px]'>
            <Image 
                className='h-[50px] w-[50px] mx-[20px] rounded-full'
                source={{ uri: item.uri }}
            />
            <View>
                <Text className='dark:text-white'>{item.name}</Text>
                <Text className='text-gray-500'>{item.points}</Text>
            </View>
        </View>
    </View>
  )

  return (
    <SafeAreaView className='dark:bg-[#1d1e1e]'>
      <Animated.FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.position.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  )
}
