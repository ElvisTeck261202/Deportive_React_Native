import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import { LineChart } from 'react-native-chart-kit'
import { useColorScheme } from 'nativewind'

export default function ProgressGraphic() {

  const {colorScheme} = useColorScheme()

  return (
    <View>
      <View className='w-[350px] mt-[30px] flex-row justify-between'>
        <Text className='text-xl font-bold dark:text-white text-start'>Progress</Text>
        <View className='items-center flex-row justify-end'>
          <Entypo name="dot-single" size={24} color="#18e5e5"/>
          <Text className='dark:text-white'>Current</Text>
          <Entypo name="dot-single" size={24} color="gray"/>
          <Text className='dark:text-white'>Goal</Text>
        </View>
      </View>
      {/** Progress Graphic */}
      <LineChart
        data={{
          labels: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
          datasets: [
            {
              data: [6, 7.5, 7, 8, 6, 7, 8], // Datos de progreso
              color: (opacity = 1) => `rgba(24, 229, 229, ${opacity})`, // Línea de 'Current'
              strokeWidth: 3
            },
            {
              data: [7, 8, 7.5, 8.5, 7, 7.8, 9], // Meta
              color: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`, // Línea de 'Goal'
              strokeWidth: 3
            }
          ]
        }}
        width={Dimensions.get('window').width - 50} // Ancho de la gráfica
        height={220} // Altura de la gráfica
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#292b2a', //1E2923
          backgroundGradientTo: '#292b2a',//08130D
          decimalPlaces: 1, // Números decimales en los valores
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Color de los números
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '5',
            strokeWidth: '1',
            stroke: '#18e5e5'
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}