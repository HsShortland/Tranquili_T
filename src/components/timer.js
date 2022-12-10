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
        <Text>{time}</Text>
      </View>
    );
   }
   
   const styles = StyleSheet.create({
    timerContainer: {
      position: "absolute",
      width: "50%",
      top: "25%",
      right: "25%",
      backgroundColor: "white",
      zIndex: 1,
      borderRadius: 10,
      padding: 10,
    },
    timerList: {
      paddingTop: 10,
    },
    item: {
      fontSize: 18,
      textAlign: "center",
      height: 44,
      fontWeight: "bold",
    },
   });