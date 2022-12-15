import { View, useWindowDimensions, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useRef, useState, useEffect } from 'react';

import { Audio } from 'expo-av';
import audioFile from '../../assets/simply-meditation-series-11hz-alpha-binaural-waves-for-relaxed-focus-8028.mp3';


import MeditationTimerButton from '../components/MeditationTimerButton';
import styles from '../components/ReusableStyleSheet';
import LotusAnimation from '../components/LotusAnimation';


export default function MeditationTimer() {
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    const lotAnimation = useRef(null);


    const soundHook = useState();
    const [soundState, setSoundState] = soundHook;

    useEffect(() => {
        async function loadSound() {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(audioFile);
            setSoundState(sound);
        }
        loadSound();

        return soundState
            ? () => {
                console.log('Unloading Sound');
                soundState.unloadAsync();
            }
            : undefined;
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <LotusAnimation lotAnimation={lotAnimation} />
            </View>
            <View>
                <MeditationTimerButton lotAnimation={lotAnimation} totalTime={600} color={'#79a1b1'} soundHook={soundHook} />
                <View style={styles.space} />
                <MeditationTimerButton lotAnimation={lotAnimation} totalTime={900} color={'#727e94'} soundHook={soundHook} />
                <View style={styles.space} />
                <MeditationTimerButton lotAnimation={lotAnimation} totalTime={1200} color={'#AEA488'} soundHook={soundHook} />
            </View>
        </View>
    );
};

