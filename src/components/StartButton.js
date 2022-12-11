import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function StartButton(props) {

    return(
        <Pressable style={styles.startButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


