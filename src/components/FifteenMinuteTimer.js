import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function StopButton(props) {

    return(
        <Pressable style={styles.grayButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


