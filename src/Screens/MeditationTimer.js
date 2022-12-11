import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import React, {useEffect, useState} from 'react';
import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';




export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    // time
    const [time, setTime] = useState(600);
    const [secondsLeft, setSecondsLeft] = useState(600);
    
   

    useEffect(() => {
        const interval = setInterval(() => {
            if(secondsLeft > 0) setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
        });


    const clockIt = () => {
        let mins = Math.floor((secondsLeft / 60) % 60);
        let seconds = Math.floor(secondsLeft % 60);

        let displayMins = mins < 10 ? `0${mins}` : mins;
        let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        return {
            displayMins: displayMins,
            displaySeconds: displaySeconds,
        };
    };

return (
   <View style={styles.container}>
     
     <Text style={styles.displayTimerText}>{clockIt().displayMins} Mins {clockIt().displaySeconds} Secs </Text>

     <StartButton details= "Start/Stop"></StartButton>

     <ResetButton details= "Reset"></ResetButton>

     <View style={styles.timerContainer}>
            
        </View>
    </View>

     );
};


