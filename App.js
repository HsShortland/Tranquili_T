import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import MeditationTimer from './src/Screens/MeditationTimer';
import MeditationTracker from './src/Screens/MeditationTracker';
import { StyleSheet, Text, Button, View } from 'react-native';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen" >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="MeditationTimer" component={MeditationTimer} />
        <Drawer.Screen name="MeditationTracker" component={MeditationTracker} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}