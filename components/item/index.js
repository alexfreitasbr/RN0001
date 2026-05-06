import { styles } from "./styles";
import { Text, View} from "react-native";
import BottomUI from "../buttomui";
export default function Item({ item, action }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>{item}</Text>
      <BottomUI label="Remove" action={() => action(item)} />
    </View>
  );
}
