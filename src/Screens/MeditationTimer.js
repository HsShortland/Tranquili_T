import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';

import TenMinuteTimer from '../components/TenMinuteTimer';
import FifteenMinute from '../components/FifteenMinuteTimer';
import TwentyMinute from '../components/TwentyMinuteTimer';

export default function MeditationTimer() {
    //Navigation
    const nav = useNavigation();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);


return (
    <View style={styles.container}>

        <TenMinuteTimer></TenMinuteTimer>
        <View style={styles.space} />
        <FifteenMinute></FifteenMinute>
        <View style={styles.space} />
        <TwentyMinute></TwentyMinute>

    </View>

    );
};

