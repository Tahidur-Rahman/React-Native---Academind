import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./Card";

function StartGame({ confirmNumber,userScreenHandler }) {
  return (
    <Card style={styles.startGame}>
      <Text style={{ marginVertical: 10 }}>Your Number is </Text>
      <Text style={{ fontSize: 25 }}>{confirmNumber}</Text>
      <Button title="Start Game" color={Colors.secondary} onPress={()=>userScreenHandler(confirmNumber)} />
    </Card>
  );
}

const styles = StyleSheet.create({
  startGame: {
    marginTop: 50,
    alignItems: "center",
  },
});

export default StartGame;
