import { StyleSheet } from 'react-native';

// add things here as needed that can be applied to all screens
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15224c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#e0ab78'
    },
    time: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    timerContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      timerText: {
        color: "#f1f1f1",
        fontSize: 16,
        marginLeft: 10,
      },
      displayTimerText: {
        color: "#f1f1f1",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
      },
});

export default styles;