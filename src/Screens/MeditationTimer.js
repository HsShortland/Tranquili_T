import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import BackgroundTimer from 'react-native-background-timer';
import React, {useEffect, useState} from 'react';

export default function MeditationTimer() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    const [secondsLeft, setSecondsLeft] = useState(3601);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if (timerOn) startTimer();
        else BackgroundTimer.stopBackgroundTimer();
    
    return () => {
        BackgroundTimer.stopBackgroundTimer();
    };
    }, [timerOn]);

    return (
        <View style={styles.container}>
            <Text style={styles.time}>Hello</Text>
            <Button title="Start/Stop"></Button>
            <StatusBar style="auto" />
    </View>
);
};


