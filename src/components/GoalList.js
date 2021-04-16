import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
function GoalList({ goal,id,onDelete }) {
  return (
    <TouchableOpacity onPress={()=>onDelete(id)}>
      <View style={styles.listItem}>
        <Text style={{ color: "#fff" }}>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    width: "79%",
    backgroundColor: "#364156",
    margin: 2,
    borderRadius: 1,
  },
});

export default GoalList;
