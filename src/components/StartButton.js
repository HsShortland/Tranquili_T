import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function StartButton(props) {

    return(
        <Pressable style={styles.greyBlueButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


