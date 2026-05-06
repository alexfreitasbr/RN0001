import { styles } from "./styles";
import { View, TextInput } from "react-native";
import { useState } from "react";
import BottomUI from "../buttomui";

export default function Input({ addGoalHandler }) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.textInput}
        value={goal}
        placeholder="Yoiur curse goal"
        onChangeText={goalInputHandler}
      />
      <BottomUI
        label="Add goal"
        action={() => {
          addGoalHandler(goal);
          setGoal("");
        }}
      />
    </View>
  );
}