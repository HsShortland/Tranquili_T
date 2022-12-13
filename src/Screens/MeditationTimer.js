import {Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import React, {useEffect, useState} from 'react';
import TenMinute from '../components/TenMinuteTimer';
import FifteenMinute from '../components/FifteenMinuteTimer';
import TwentyMinute from '../components/TwentyMinuteTimer';
import ButtonTen from '../components/StopButton';
import TenMinuteTimer from '../components/TenMinuteTimer';




export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);


return (
    <View style={styles.container}>

        <TenMinuteTimer></TenMinuteTimer>

        <FifteenMinute></FifteenMinute>

        <TwentyMinute></TwentyMinute>

    </View>

    );
};


