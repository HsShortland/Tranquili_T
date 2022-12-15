// use for 1st app page with user login and link to sign up

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, useWindowDimensions, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import styles from '../components/ReusableStyleSheet';
import QuoteOfDay from '../components/QuoteOfDay';
import lotuslogo from '../../assets/lotuslogo.png';

export default function HomeScreen() {
    const nav = useNavigation();
    const {height} = useWindowDimensions();
    const drawerStatus = useDrawerStatus();
    console.log(drawerStatus);

    return (
        <View style={styles.container}>
            <Image 
                source = {lotuslogo} 
                style = {[styles.logo, {height: height *0.3}]}
                resizeMode="contain"/>
            
            <Text style={styles.homeHead}>Welcome Home!</Text>
            <QuoteOfDay></QuoteOfDay>
            <Pressable 
                style={styles.homeButton}
                onPress={() => nav.openDrawer()}>
                    <Text>Get Started</Text>
            </Pressable>
            {/* <Button
                title="Get Started"
                onPress={() => nav.openDrawer()}
                color='white'
                elevation='50'></Button> */}
            <StatusBar style="auto" />
        </View>
    );
}
