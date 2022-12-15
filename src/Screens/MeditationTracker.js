import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import CalendarTracker from '../components/CalendarTracker';
import * as React from 'react';


export default function MeditationTracker() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>Meditation Tracker{'\n'}</Text>
            <CalendarTracker></CalendarTracker>
            <View style={styles.space} />
            <Pressable style={styles.meditationTrackerButton} onPress={() => nav.openDrawer()}>
                <Text style={styles.timerTrackerButtonText}>Where to next?</Text>
            </Pressable>
        </View>
    );
}
