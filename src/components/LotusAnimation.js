
import { StyleSheet, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';



export default function LotusAnimation({lotAnimation}) {

    return (
                <View style={styles.animationContainer}>
                    <LottieView
                    ref={lotAnimation}
                    style={{width: 200, height: 200, backgroundColor: '#15224C',
                    }}
                    source={require('../../assets/LottieAnimation/lf30_editor_iocvfkpl.json')}
                    />
                </View>
        
    );
}
const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#384A72',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexGrow:0.3
    },
});