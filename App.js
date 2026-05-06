import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";



export default function App() {
  const [newGoal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    if (!newGoal) return;
    const exist = [...goalList].find((goal) => goal === newGoal);
    if (exist) return;
    setGoalList([...goalList, newGoal]);
    setGoal("");
  }

  function removeGoalHandler(value) {
    const filtered = [...goalList].filter((goal) => goal !== value);
    setGoalList(filtered);
  }

  const itemList = (item) => (
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>{item}</Text>
      <Button title="Remove" onPress={() => removeGoalHandler(item)} />
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          value={newGoal}
          placeholder="Yoiur curse goal"
          onChangeText={goalInputHandler}
        />
        <Button
          style={styles.button}
          title="Add goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.scrollView}
          data={goalList}
          renderItem={(itemData) => {
            return itemList(itemData.item);
          }}
          keyExtractor={(item,index)=> {
            return item + index
          }}
        />
      </View>
    </View>
  );
}
