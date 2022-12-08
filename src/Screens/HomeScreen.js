// use for 1st app page with user login and link to sign up

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';

export default function HomeScreen() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Home!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
