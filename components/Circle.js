import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Circle } from 'react-native-svg'
import { useColorScheme } from 'nativewind';

export default function CircleGraph() {

  const {colorScheme} = useColorScheme()

    const radius = 35;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = 0.25; // 25% completado

  return (
      <View className='items-center justify-center'>
        <Svg
          width={radius * 2 + strokeWidth} // Ancho del círculo
          height={radius * 2 + strokeWidth} // Alto del círculo
          viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}
        >
          {/* Fondo circular */}
          <Circle
            cx={radius + strokeWidth / 2} // Posición horizontal del centro
            cy={radius + strokeWidth / 2} // Posición vertical del centro
            r={radius}
            stroke='#2E2E2E' // El mismo color que el fondo
            strokeWidth={strokeWidth}
            fill='none'
          />

          {/* Borde circular progresivo */}
          <Circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            stroke='#18e5e5' // Color del borde
            strokeWidth={strokeWidth}
            fill='none'
            strokeDasharray={`${circumference} ${circumference}`} // Tamaño del borde
            strokeDashoffset={(1 - progress) * circumference} // Progreso (25%) y ajuste de la posición
            strokeLinecap='round'
            rotation='-90' // Girar para comenzar en la parte superior
            origin={`${radius + strokeWidth / 2}, ${radius + strokeWidth / 2}`} // Centro de rotación
          />
        </Svg>

        {/* Número en el centro del círculo */}
        <View style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: radius * 2,
          height: radius * 2,
        }}>
          <Text style={{ color: colorScheme === 'dark' ? '#fff' : '#292b2a', fontSize: 24, fontWeight: 'bold' }}>28</Text>
        </View>
      </View>
  )
}