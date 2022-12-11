import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import React, {useEffect, useState} from 'react';
import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';




export default function MeditationTimer({ timeForSeconds }) {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    const [timerClicked, setTimerClicked] = useState(false);
    const [time, setTime] = useState(600);
    const [displayTimer, setDisplayTimer] = useState(time);
    const [secondsLeft, setSecondsLeft] = useState(timeForSeconds);
    
   


    const startTimer = () => {
        setTimerClicked((prevState) => !prevState)
    };

    const resetTimer = () => {
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(secondsLeft > 0) setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
        });

    // useEffect(() => {
    //     if (timerOn)  startTimer();{
    //       return;
    //     }
    //     setDisplayTimer(timer);
    // });
    

    


return (
   <View style={styles.container}>
     
     <Text style={styles.displayTimerText}>{secondsLeft}</Text>
     <StartButton details= "Start/Stop"></StartButton>
     <ResetButton details= "Reset"></ResetButton>
     <View style={styles.timerContainer}>
            
        </View>
    </View>

     );
};


