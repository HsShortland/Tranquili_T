import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import { useRef } from 'react';

import MeditationTimerButton from '../components/MeditationTimerButton';


import LotusAnimation from '../components/LotusAnimation';

export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    const lotAnimation = useRef(null);

    return (
        <View style={styles.container}>
            <View>
                <LotusAnimation lotAnimation={lotAnimation} />
            </View>
            <View>
                <MeditationTimerButton lotAnimation={lotAnimation} totalTime={600} color={'#79a1b1'} />
                <View style={styles.space} />
                <MeditationTimerButton lotAnimation={lotAnimation} totalTime={900} color={'#727e94'} />
                <View style={styles.space} />
                <MeditationTimerButton lotAnimation={lotAnimation} totalTime={1200} color={'#AEA488'} />
            </View>
        </View>

    );
};

