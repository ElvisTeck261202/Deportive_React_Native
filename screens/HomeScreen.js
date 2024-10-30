import { View, Text, Image, TouchableOpacity, Animated, Easing, Switch } from 'react-native'
import React, { useRef, useState } from 'react'
import Leaderboard from '../components/Leaderboard'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'

export default function HomeScreen() {

  const { colorScheme, toggleColorScheme } = useColorScheme()

  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const dropdownHeight = useRef(new Animated.Value(0)).current

  const navigation = useNavigation()

  // Valor animado para controlar el scroll
  const scrollY = useRef(new Animated.Value(0)).current

  const goToProfile = () => {
    navigation.navigate('Test4')
  }

  const toggleDropdown = () => {
    if (isDropdownVisible) {
      // Animación para esconder el menú
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start(() => setDropdownVisible(false))
    } else {
      // Mostrar el menú
      setDropdownVisible(true)
      Animated.timing(dropdownHeight, {
        toValue: 120, // Altura que deseas
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start()
    }
  }

  // Interpolaciones para las imágenes y los textos
  const imageSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 0], // Imágenes de chicas se reducen a 0
    extrapolate: 'clamp',
  })

  const CenterimageSize = scrollY.interpolate({
    inputRange: [0, 125],
    outputRange: [100, 0], // Imágenes de chicas se reducen a 0
    extrapolate: 'clamp',
  })

  const medalSize = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [50, 70], // Medallas crecen de 50px a 70px
    extrapolate: 'clamp',
  })

  const containerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 100], // Contenedor se reduce de 250px a 100px
    extrapolate: 'clamp',
  })

  return (
    <View className='dark:bg-[#292b2] flex-1 pt-[30px]'>

      <View className="flex-row justify-between items-center px-5 pt-5 pb-[20px] bg-white dark:bg-[#292b2a]">
        <TouchableOpacity onPress={toggleDropdown}>
          <Text className="dark:text-white text-xl">Workout Season ▼</Text>
        </TouchableOpacity>
        <Switch
          value={colorScheme === 'dark'}
          onChange={toggleColorScheme}
        />
      </View>

      {/** Menú desplegable con Animated.View */}
      {isDropdownVisible && (
        <Animated.View
          className='overflow-hidden'
          style={{
            height: dropdownHeight, // El valor animado de la altura
            backgroundColor: colorScheme === 'dark' ? '#292b2a' : '#ffffff'
          }}
        >
          <Text className='text-lg pl-[10px] font-bold'
            style={{color: colorScheme === 'dark' ? '#fff' : '#000'}}
          >Recent</Text>
          <TouchableOpacity onPress={toggleDropdown} style={{ padding: 10 }}>
            <Text className="text-gray-400 text-xl">Workout TC 2019</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleDropdown} style={{ padding: 10 }}>
            <Text className="text-gray-400 text-xl">Athetic TSC 2019</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {/** Sección de medallas */}
      <Animated.View style={{ height: containerHeight, backgroundColor: colorScheme === 'dark' ? '#292b2a' : '#ffffff' }}>
        <View className='flex-row align-middle'>
          {/** Medalla de plata */}
          <View className='justify-center align-middle items-center w-[150px]'>
            <Animated.Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/40.jpg' }}
              style={{
                height: imageSize,
                width: imageSize,
                borderRadius: 50,
                marginHorizontal: 20,
              }}
            />
            <Animated.Image
              source={require('../assets/medalla-de-plata.png')}
              style={{
                height: medalSize,
                width: medalSize,
                marginBottom: 10,
                marginTop: -20,
              }}
            />
            <Text className='text-center dark:text-white'>Christina Volla</Text>
            <Text className='text-center text-gray-500'>2 753</Text>
          </View>

          {/** Medalla de Oro */}
          <View className='justify-center align-middle items-center w-[100px]'>
            <Animated.Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/72.jpg' }}
              style={{
                height: CenterimageSize,
                width: CenterimageSize,
                borderRadius: 50,
                marginHorizontal: 20,
              }}
            />
            <TouchableOpacity onPress={goToProfile}>
              <Animated.Image
                source={require('../assets/medalla-de-oro.png')}
                style={{
                  height: medalSize,
                  width: medalSize,
                  marginBottom: 10,
                  marginTop: -20,
                }}
              />
            </TouchableOpacity>
            <Text className='text-center dark:text-white'>Lucy Heaton</Text>
            <Text className='text-center text-gray-500'>3 214</Text>
          </View>

          {/** Medalla de Bronce */}
          <View className='justify-center align-middle items-center w-[150px]'>
            <Animated.Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/40.jpg' }}
              style={{
                height: imageSize,
                width: imageSize,
                borderRadius: 50,
                marginHorizontal: 20,
              }}
            />
            <Animated.Image
              source={require('../assets/medalla-de-bronce.png')}
              style={{
                height: medalSize,
                width: medalSize,
                marginBottom: 10,
                marginTop: -20,
              }}
            />
            <Text className='text-center dark:text-white'>Andrea Romero</Text>
            <Text className='text-center text-gray-500'>2 513</Text>
          </View>
        </View>
      </Animated.View>

      {/** Leaderboard como Animated.FlatList */}
      <Leaderboard scrollY={scrollY} />
      <View 
        className='flex-row px-[30px] items-center absolute bottom-0'       
        style={{
          backgroundColor: colorScheme === 'dark' ? '#1d1e1e' : '#ffffff', // Fallback directo
      }}>
        <Text className='text-gray-500 w-[25px]'>52</Text>
        <View className='flex-row border-t-[1px] border-gray-700 w-[500px] ml-[10px] py-[15px]'>
            <Image 
                className='h-[50px] w-[50px] mx-[20px] rounded-full'
                source={{ uri: 'https://randomuser.me/api/portraits/women/76.jpg' }}
            />
            <View>
                <Text className='dark:text-white'>Mercedes Rooney</Text>
                <Text className='text-gray-500'>932</Text>
            </View>
        </View>
      </View>
    </View>
  )
}


