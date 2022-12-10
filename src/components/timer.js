import {View, Text, FlatList, StyleSheet, TouchableOpacity, } from "react-native";

   
export default function Timer({ time }) {
    // const onClick = (time) => {
    //   onPress(time);
    // };

    return (
      <View style={styles.timerContainer}>
        {/* <FlatList
          style={styles.timerList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onClick(item.time)}>
              <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
          )}
        /> */}
        <Text styles={styles.item}>{time}</Text>
      </View>
    );
   }
   
   const styles = StyleSheet.create({
    timerContainer: {
      bottom: -370,
      left: -120,
      width: "20%",
      backgroundColor: "#AEA488",
      zIndex: 1,
      borderRadius: 10,
      padding: 10,
    },
    timerList: {
      paddingTop: 10,
    },
    item: {
      fontSize: 30,
      textAlign: "center",
      height: 44,
      fontWeight: "bold",
    },
   });