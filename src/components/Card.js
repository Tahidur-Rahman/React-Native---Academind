import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card,...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation:6,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    padding: 20,
    borderRadius: 5,
  },
});

export default Card;
