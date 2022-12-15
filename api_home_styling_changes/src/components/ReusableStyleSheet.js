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
        color: 'white',
        fontSize: 40,
        fontFamily: 'OleoScript-Regular',
        marginBottom: 50
    },
    timerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    displayTimerText: {
        color: "#e0ab78",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    blueGreyButtonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#79a1b1',
      margin: 10,
    },
    beigeButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#AEA488',
        margin: 10,
      },
    grayButtonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#727e94',
      margin: 10,
      },
    textStyle: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#003b49',
    },
    space: {
      width: 20,
      height: 30,
    },
    quoteText:{
      fontSize: 20,
      color: 'white'
    },
    logo: {
      width: 200,
      height: 200,
      marginTop: 50
    },
    quoteTextQ: {
      fontSize: 16,
      color: 'white',
      justifyContent: 'center',
      paddingLeft: 50,
      paddingRight: 50,
      marginBottom: 20,
      fontStyle: 'italic'
    },
    quoteTextA: {
      color: 'white',
      justifyContent: 'center',
      paddingLeft: 50,
      paddingRight: 50,
      marginBottom: 20,
    },
    homeHead:{
      color: '#e0ab78',
      fontSize: 40,
      fontFamily: 'OleoScript-Regular',
      marginBottom: 20,
      marginTop: 10
    },
    homeButton:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#AEA488',
      marginBottom: 150
    }
});

export default styles;