import { View, useWindowDimensions, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';

import TenMinuteTimer from '../components/TenMinuteTimer';
import FifteenMinute from '../components/FifteenMinuteTimer';
import TwentyMinute from '../components/TwentyMinuteTimer';

import lotuslogo from '../../assets/lotuslogo.png';

export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);
    const {height} = useWindowDimensions();


return (

    <View style={styles.container}>
        <Text style = {styles.text}>Meditation Timer</Text>

        <TenMinuteTimer></TenMinuteTimer>
        <View style={styles.space} />
        <FifteenMinute></FifteenMinute>
        <View style={styles.space} />
        <TwentyMinute></TwentyMinute>

    </View>

    );
};

