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
    const [displayTimer, setDisplayTimer] = useState(timer);
   

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
        if (timerOn)  startTimer();{
          return;
        }
        setDisplayTimer(timer);
    });
    
    //     const interval = setInterval(() => {
    //       setDisplayTimer(() =>
    //         prevTimer > 0 ? prevTimer - 1 : clearInterval(interval)
    //       );
    //     }, 1000);
    //   }, [timerOn, setTimerOn, timer]);

    


return (
   <View style={styles.container}>
     {timerClicked && <Timer time={time} />}
     <Text style={styles.displayTimerText}>{displayTimer}</Text>
     <View style={styles.timerContainer}>
        <Text></Text>
        
            <Button
                title="Start/Stop"
                onPress={ startTimer }
                color="gray"
            />

            <Button
                title="Reset"
                // onPress={}
                color="gray"
            />
            
        </View>
    </View>
    //         {timerOn && (
             
    //         )}
     );
};


