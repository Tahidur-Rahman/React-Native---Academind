import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button,ScrollView,TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(null);
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (e) => setEnteredGoal(e);
  const goalsHandler = () =>
    setGoals((currentGoal) => [...currentGoal, enteredGoal]);

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="Add" onPress={goalsHandler} />
      </View>
      <ScrollView>
        {goals.map((goal) => (
          <View style={styles.listItem}>
            <Text style={{ color: "#fff" }}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "skyblue",
    flex: 1,
    paddingTop: 90,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "dodgerblue",
    borderBottomWidth: 2,
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
  },
  listItem: {
    padding: 10,
    width: "79%",
    backgroundColor: "#364156",
    margin: 2,
    borderRadius: 1,
  },
});
