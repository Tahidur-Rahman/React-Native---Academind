import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalList from "./src/components/GoalList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisibility,setModalVisibility] = useState(false);

  const goalsHandler = (goalTitle) =>{
    setGoals((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]) 
    setModalVisibility(false);
  }

  const removeHandler = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New goal"  onPress={()=>setModalVisibility(true)}/>
      <GoalInput addGoal={goalsHandler} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalList
            id={itemData.item.id}
            onDelete={removeHandler}
            goal={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "skyblue",
    flex: 1,
    paddingTop: 90,
  }
});
