import { Pressable, StyleSheet, Text } from "react-native";
import React, {useEffect, useState} from 'react';
import styles from './ReusableStyleSheet';


export default function TenMinuteTimer(){
    const [secondsLeft, setSecondsLeft] = useState(600);

    useEffect(() => {
        const interval = setInterval(() => {
            if(secondsLeft > 0) setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
        });

    const clockIt = () => {
        let mins = Math.floor((secondsLeft / 60) % 60);
        let seconds = Math.floor(secondsLeft % 60);

        let displayMins = mins < 10 ? `0${mins}` : mins;
        let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        return {
            displayMins: displayMins,
            displaySeconds: displaySeconds,
        };
    };
        return(
        <Pressable style={styles.beigeButtonStyle}>
            
        </Pressable>
    );
}



// export default function TenMinuteTimer(){
//     return(
//     <Pressable style={styles.greyBlueButtonStyle}>
//             <Text>{secondsLeft}</Text>
//         </Pressable>
//     )
// }
