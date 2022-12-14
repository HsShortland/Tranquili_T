import {Button} from "react-native";
import React, {useState} from 'react';

const TIME = 1200;

export default function TwentyMinute() {

    // time
    const [secondsLeft, setSecondsLeft] = useState(TIME);


    function twentyStart() {
        const interval = setInterval(() => {
            setSecondsLeft(secondsLeft => (secondsLeft > 0) ? secondsLeft - 1 : 0);
        }, 1000);
    };


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


    const { displayMins, displaySeconds } = clockIt();

    return (

        <Button
            title={`${displayMins} Mins ${displaySeconds} Secs`}
            disabled={ TIME != secondsLeft } 
            onPress={() => { twentyStart(); }}
            color= '#AEA488'
            >
        </Button >
    )

}
