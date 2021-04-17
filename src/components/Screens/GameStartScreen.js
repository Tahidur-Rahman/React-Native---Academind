import React, { useState } from "react";

import { View, StyleSheet, Button, Text } from "react-native";
import Card from "../Card";
import Colors from "../../constants/Colors.js";
import Input from "../Input";

function GameStartScreen() {
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game !</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Input a Number</Text>
        <Input
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={2}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button color={Colors.secondary} title="Reset" />
          </View>
          <View style={styles.button}>
            <Button color={Colors.primary} title="Confirm" />
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTitle: {
    paddingVertical: 10,
    fontSize: 20,
  },
  textInput: {
    width: 60,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    width: 100,
  },
});
export default GameStartScreen;
