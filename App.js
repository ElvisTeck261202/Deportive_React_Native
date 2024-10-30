import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import TestScreen2 from './screens/TestScreen2';
import TestScreen3 from './screens/TestScreen3';
import TestScreen4 from './screens/TestScreen4';
import { useColorScheme } from 'nativewind';
import { Colors } from './constants/Colors';
import { StripeProvider } from '@stripe/stripe-react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  const { colorScheme } = useColorScheme(); // Detecta el tema

  return (
    <StripeProvider
      publishableKey='pk_test_51QDJX1EPHfpMXwM4WiAxt5Rbdv4AfctnibosP2lLB0yQ0Wd3SEyDdysHOYqn1lqZBKqUtqTItXYkULW9z1sjMy6100iK5xcBU2'
    >
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: colorScheme === 'dark' ? '#292b2a' : '#ffffff', // Cambia según el tema
              height: 80,
              borderTopColor: colorScheme === 'dark' ? '#444' : '#e0e0e0', // Ajusta el borde superior de la barra
            },
            tabBarShowLabel: false,
            headerShown: false,
          }}
        >
          <Tab.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'stats-chart' : 'stats-chart-outline'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
          <Tab.Screen 
            name='Test' 
            component={TestScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'cloudy-sharp' : 'cloudy-outline'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
          <Tab.Screen 
            name='Test2' 
            component={TestScreen2}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'time-sharp' : 'time-outline'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
          <Tab.Screen 
            name='Test3' 
            component={TestScreen3}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'chatbubble-sharp' : 'chatbubble-outline'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
          <Tab.Screen 
            name='Test4' 
            component={TestScreen4}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name='person-outline' 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}
