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
    timerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    displayTimerText: {
        color: "#e0ab78",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    startButtonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#727E94',
      margin: 10,
    },
    resetButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#AEA488',
        margin: 10,
      },
    textStyle: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#003b49',
    },
});

export default styles;