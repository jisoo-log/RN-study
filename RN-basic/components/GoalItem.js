import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onDelete(props.item.key);
      }}
    >
      <View style={styles.listItem}>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "black",
  },
});
