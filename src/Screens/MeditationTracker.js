import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';

export default function MeditationTracker() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meditation Tracker</Text>
            <StatusBar style="auto" />
    </View>
);
}