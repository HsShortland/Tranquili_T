import { Button } from "react-native";
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function MeditationTimerButton({ lotAnimation, totalTime, color, soundHook }) {

    const dispatch = useDispatch()

    function markCalendar() {
        const action = {
            type: "MARK_CALENDAR",
            payload: new Date().toISOString().slice(0, 10)
        }
        dispatch(action)
    }

    // time
    const [secondsLeft, setSecondsLeft] = useState(totalTime);
    const [soundState, setSoundState] = soundHook;

    function timerStart() {
        const interval = setInterval(() => {
            setSecondsLeft(secondsLeft => {
                if (secondsLeft > 0){
                    return secondsLeft - 1;
                }else {
                    soundState.pauseAsync();
                    return 0;
                }
            });
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
            onPress={() => {
                markCalendar();
                timerStart();
                lotAnimation.current?.play();
                try {soundState.playAsync(); }
                catch (e) { }
            }}
            color={color}>
        </Button >
    )

}