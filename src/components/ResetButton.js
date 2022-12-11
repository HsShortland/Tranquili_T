import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function ResetButton(props) {

    return(
        <Pressable style={styles.beigeButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


