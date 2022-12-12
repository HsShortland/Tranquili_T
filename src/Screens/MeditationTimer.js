import {Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import React, {useEffect, useState} from 'react';
import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';
import StopButton from '../components/StopButton';
import TenMinute from '../components/TenMinuteTimer';




export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);


return (
    <View style={styles.container}>
    
        
        
        <StartButton details= "Start"></StartButton>

        <StopButton details= "Stop"></StopButton>

        <ResetButton details= "Reset"></ResetButton>

        <TenMinute></TenMinute>
        
    </View>

    );
};


