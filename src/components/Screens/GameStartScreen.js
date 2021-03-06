import React, { useState } from "react";

import { View, StyleSheet, Button, Text,Alert,Image } from "react-native";
import Card from "../Card";
import Colors from "../../constants/Colors.js";
import Input from "../Input";
import StartGame from "../StartGame";

function GameStartScreen({userScreenHandler}) {
  const [number, setNumber] = useState();
  const [confirm, setConfirm] = useState(false);
  const [confirmNumber, setConfirmNumber] = useState();

  const inputHandler = (e) => {
    setNumber(parseInt(e));
  };
  const resetNumber = () => {
    setNumber("");
    setConfirm(false);
  };
  
  const confirmValidator = () => {
    if (number >= 0 ) {
      setConfirm(true);
      setConfirmNumber(number);
      setNumber('')
    }else{
      return Alert.alert('Invalid Number','Input should be a positive number between 0-99',[{text:'Okay',style:'cancel',onPress:resetNumber}])
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Start a new Game !</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'}}/>
      </View>
      <Card style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Input a Number</Text>
        <Input
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={inputHandler}
          value={number}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              color={Colors.secondary}
              title="Reset"
              onPress={resetNumber}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={Colors.primary}
              title="Confirm"
              onPress={confirmValidator}
            />
          </View>
        </View>
      </Card>
      {confirm && <StartGame userScreenHandler={userScreenHandler} confirmNumber={confirmNumber} />}
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
    fontFamily:'open-sans-bold'
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
    fontFamily:'open-sans'
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
  image:{
    width:260,
    height:200,
  }
});
export default GameStartScreen;
