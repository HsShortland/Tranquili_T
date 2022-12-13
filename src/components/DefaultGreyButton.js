import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function GreyButton(props) {

    return(
        <Pressable style={styles.grayButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


