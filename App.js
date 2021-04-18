import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from "./src/components/Header";
import GameScreen from "./src/components/Screens/GameScreen";
import GameStartScreen from "./src/components/Screens/GameStartScreen";
import * as Font from "expo-font";
import  AppLoading  from "expo-app-loading";

const fetchFonts = () => {
 return Font.loadAsync({
    "open-sans-bold": require("./src/assets/Fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./src/assets/Fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [userInput, setUserInput] = useState();
  const [dataLoad, setDataLoad] = useState(false);

  if (!dataLoad) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoad(true)} onError={e=>console.log(e)} />
    );
  }

  const userScreenHandler = (e) => {
    setUserInput(e);
  };

  return (
    <View style={styles.screen}>
      <Header title="Number Guessing" />
      {userInput ? (
        <GameScreen userChoice={userInput} />
      ) : (
        <GameStartScreen userScreenHandler={userScreenHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
