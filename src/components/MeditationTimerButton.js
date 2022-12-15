import { Button } from "react-native";
import React, { useState, useRef } from 'react';

export default function MeditationTimerButton({ lotAnimation, totalTime, color }) {
    // time
    const [secondsLeft, setSecondsLeft] = useState(totalTime);


    function timerStart() {
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
            disabled={totalTime != secondsLeft}
            onPress={() => { timerStart(); lotAnimation.current?.play(); }}
            color={color}>
        </Button >
    )

}