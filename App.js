import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";


import Input from "./components/input";
import List from "./components/list";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler(value) {
    if (!value) return;
    const exist = [...goalList].find((goal) => goal === value);
    if (exist) return;
    setGoalList([...goalList, value]);
  }

  function removeGoalHandler(value) {
    const filtered = [...goalList].filter((goal) => goal !== value);
    setGoalList(filtered);
  }

  return (
    <View style={styles.appContainer}>
      <Input addGoalHandler={addGoalHandler} />
      <List goalList={goalList} removeGoalHandler={removeGoalHandler} />
    </View>
  );
}
