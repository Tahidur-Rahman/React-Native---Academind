import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from "./src/components/Header";
import GameStartScreen from "./src/components/Screens/GameStartScreen";
export default function App() {


  return (
    <View style={styles.screen}>
     <Header title="Guess a Number"/>
     <GameStartScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
