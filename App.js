import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from "./src/components/Header";
import GameScreen from "./src/components/Screens/GameScreen";
import GameStartScreen from "./src/components/Screens/GameStartScreen";
export default function App() {
const [userInput,setUserInput] = useState()


const userScreenHandler = e=>{
  setUserInput(e)
} 

  return (
    <View style={styles.screen}>
     <Header title="Guess a Number"/>
     {userInput ? <GameScreen userChoice={userInput}/> : <GameStartScreen userScreenHandler={userScreenHandler}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
