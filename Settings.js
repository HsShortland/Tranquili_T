import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function Home() {
  const nav = useNavigation();
  const drawerStatus = useDrawerStatus();
  console.log(drawerStatus);

  return (
    <View style={styles.container}>
      <Text>Welcome Home!</Text>
      <Button title='Open' onPress={() => nav.openDrawer()} />
      <Button title='Close' onPress={() => nav.closeDrawer()} />
      <Button title='Toggle' onPress={() => nav.toggleDrawer()} />
      <Button title='Go to settings' onPress={() => nav.navigate("Settings")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});