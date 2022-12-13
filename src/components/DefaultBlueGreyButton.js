import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function BlueGreyButton(props) {

    return(
        <Pressable style={styles.blueGreyButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


