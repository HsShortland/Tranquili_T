import {Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import React, {useEffect, useState} from 'react';
import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';
import StopButton from '../components/StopButton';
import TenMinute from '../components/TenMinuteTimer';
import FifteenMinute from '../components/FifteenMinuteTimer';
import TwentyMinute from '../components/TwentyMinuteTimer';




export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);


return (
    <View style={styles.container}>

        <TenMinute></TenMinute>

        <FifteenMinute></FifteenMinute>

        <TwentyMinute></TwentyMinute>

    </View>

    );
};


