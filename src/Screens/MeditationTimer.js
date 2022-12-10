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

    const [secondsLeft, setSecondsLeft] = useState(601);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if (timerOn) startTimer();
        else BackgroundTimer.stopBackgroundTimer();
    
        return () => {
            BackgroundTimer.stopBackgroundTimer();
        };
    }, [timerOn]);

    useEffect(() => {
        if (secondsLeft === 0) {
            BackgroundTimer.stopBackgroundTimer();
        }
    }, [secondsLeft]);

    const startTimer = () => {
        BackgroundTimer.runBackgroundTimer(() => {
            setSecondsLeft((secs) => {
                if (secs > 0) return secs -1;
                else return 0;
            });
        }, 1000);
    };

    const clockify = () => {
        let mins = Math.floor((secondsLeft / 60) % 60);
        let seconds = Math.floor(secondsLeft % 60);

        let displayMins = mins < 10 ? `0${mins}` : mins;
        let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

        return {
            displayHours: displayHours,
            displayMins: displayMins,
            displaySeconds: displaySeconds,
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.time}>
                {clockify().displayMins} Mins 
                {clockify().displaySeconds} Secs 
                </Text>

            <Button 
            title="Start/Stop" 
            onPress={() => setTimerOn((current) => !current)}>

            </Button>
            <StatusBar style="auto" />
        </View>
    );
};


