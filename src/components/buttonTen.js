import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';
import TenMinute from "./TenMinuteTimer";


export default function ButtonTen(props) {

        return(
            <Pressable style={styles.grayButtonStyle} onPress={TenMinute}>
                <Text>{state.secondsLeft}</Text>
            </Pressable>
        );
    }

