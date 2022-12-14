import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import MeditationTimer from './src/Screens/MeditationTimer';
import MeditationTracker from './src/Screens/MeditationTracker';
import * as React from 'react';
import { useFonts } from 'expo-font';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import StoreConfig from './StoreConfig';

const { store, persistor } = StoreConfig();


const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'KaushanScript-Regular': require('./assets/Google_Fonts/KaushanScript-Regular.ttf'),
    'OleoScript-Regular': require ('./assets/Google_Fonts/OleoScript-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(null, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Meditation Timer" component={MeditationTimer} />
            <Drawer.Screen name="Meditation Tracker" component={MeditationTracker} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}