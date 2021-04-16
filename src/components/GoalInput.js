import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal } from "react-native";

function GoalInput({ addGoal, modalVisibility, setModalVisibility }) {
  const [enteredGoal, setEnteredGoal] = useState(null);

  const goalInputHandler = (e) => setEnteredGoal(e);

  return (
    <Modal visible={modalVisibility}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttons}>
          <Button
            title="Add"
            backgroundColor="green"
            onPress={() => addGoal(enteredGoal)}
          />
          <Button
            title="Close"
            backgroundColor="#ddd"
            onPress={() => setModalVisibility(false)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#aaa",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  input: {
    width: "80%",
    borderBottomColor: "dodgerblue",
    borderBottomWidth: 2,
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 10,
  },
});

export default GoalInput;
