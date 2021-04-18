import React, { useState, useRef, useEffect } from "react";
import { Button, Text, View, StyleSheet, Alert } from "react-native";
import Card from "../Card";

function GameScreen({ userChoice }) {
  const [guess, setGuess] = useState(getRandomNumber(0, 99, userChoice));
  const currentLow = useRef(1);
  const currentHigh = useRef(99);
  function getRandomNumber(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      getRandomNumber(min, max, exclude);
    } else {
      return rndNum;
    }
  }

 
    if (guess === userChoice) {
      Alert.alert('Game over',`Your Number is ${guess}`,[{text:'New Game'},{text:'cancel',style:'cancel'}])
    }
 

  const nextGuessNumber = (direction) => {
    if (
      (direction === "lower" && guess < userChoice) ||
      (direction === "higher" && guess > userChoice)
    ) {
      Alert.alert("Don't Lie", "Be honest, when Playing the game !", [
        { text: "Sorry !", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      currentHigh.current = guess;
    } else {
      currentLow.current = guess;
    }
    setGuess(getRandomNumber(currentLow.current, currentHigh.current, guess));
  };

  
    return (
      <View style={styles.gameScreen}>
        <Text style={styles.gameTitle}>Opponents Guess</Text>
        <Text style={styles.guess}>{guess}</Text>
        <Card style={styles.buttons}>
          <Button title="Lower" onPress={() => nextGuessNumber("lower")} />
          <Button title="Higher" onPress={() => nextGuessNumber("higher")} />
        </Card>
      </View>
    );
  
}
const styles = StyleSheet.create({
  gameScreen: {
    justifyContent: "center",
    alignItems: "center",
  },
  gameTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  guess: {
    fontSize: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 10,
  },
});

export default GameScreen;
