import React, { useState } from "react";
import { Button, StatusBar, Text, View, StyleSheet } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleGoals = () => {
    setGoals([...goals, { id: Math.random.toString(), value: goal }]);
    // setGoal('')
  };

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <TextInput
          placeholder="Input Here"
          style={styles.input}
          value={goal}
          onChangeText={(e) => setGoal(e)}
        />
        <Button title="ADD" onPress={handleGoals} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 100,
  },
  form: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderColor: "black",
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ccc",
  },
});
export default App;
