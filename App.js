import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import MeditationTimer from './src/Screens/MeditationTimer';
import MeditationTracker from './src/Screens/MeditationTracker';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import StoreConfig from './StoreConfig';

const { store, persistor } = StoreConfig();


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomeScreen" >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="MeditationTimer" component={MeditationTimer} />
            <Drawer.Screen name="MeditationTracker" component={MeditationTracker} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}