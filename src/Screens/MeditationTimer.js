import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import React, {useEffect, useState} from 'react';
import Timer from '../components/timer'



export default function MeditationTimer() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    const [timerClicked, setTimerClicked] = useState(false);
    const [time, setTime] = useState(600);
    const [timer, setTimer] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
   

    const onPressTimerItem = (time) => {
        setTimerClicked((prevState) => !prevState);
        setTimer(time);
      };


    const startTimer = () => {
        setTimerClicked((prevState) => !prevState)
        setInterval(() => {
            setTime((prevTime) => prevTime - 1)
        }, 1000)
    };


    useEffect(() => {
        if (!timerOn) {
          return;
        }
        setDisplayTimer(timer);
    
        const interval = setInterval(() => {
          setDisplayTimer((prevTimer) =>
            prevTimer > 0 ? prevTimer - 1 : clearInterval(interval)
          );
        }, 1000);
      }, [timerOn, setTimerOn, timer]);




return (
   <View style={styles.container}>
     {timerClicked && <Timer time={time} />}
     <View style={styles.timerContainer}>
              <Button
                icon={"back-in-time"}
                title="Timer"
                onPress={ startTimer }
              />
              <Text style={styles.timerText}>{timer}s</Text>
            </View>
        </View>
            // {timerOn && (
            // <Text style={styles.displayTimerText}>{displayTimer}s</Text>
            // )}
    );
};


