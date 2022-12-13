import { Pressable, StyleSheet, Text } from "react-native";
import styles from './ReusableStyleSheet';

export default function BlueGreyButton(props) {

    return(
        <Pressable style={styles.greyBlueButtonStyle}>
            <Text>{props.details}</Text>
        </Pressable>
    );
}


