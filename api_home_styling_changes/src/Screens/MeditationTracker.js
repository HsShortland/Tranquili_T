import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import CalendarTracker from '../components/CalendarTracker';
import { useDispatch } from 'react-redux';
import * as React from 'react';


export default function MeditationTracker() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    const dispatch = useDispatch()

    function markCalendar() {
        const action = {
            type: "MARK_CALENDAR",
            payload: new Date().toISOString().slice(0, 10)
        }
        dispatch(action)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <Text style={styles.text}>Tranquili-T</Text> */}
            <Text style={styles.text}>Meditation Tracker{'\n'}</Text>
            <CalendarTracker></CalendarTracker>
            <Button color='#E0AB78' title='Meditation Tracker' onPress={() => { markCalendar(); }}></Button>
        </View>
    );
}
