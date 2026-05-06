import { styles } from "./styles";
import { Text, View, FlatList, Button} from "react-native";
import Item from'../item'

export default function List({goalList, removeGoalHandler}) {

  return (
    <View style={styles.listContainer}>
        
      <FlatList
        style={styles.scrollView}
        data={goalList}
        renderItem={(itemData) => {
          return <Item item={itemData.item } action={removeGoalHandler}/>
        }}
        keyExtractor={(item, index) => {
          return item + index;
        }}
      />
    </View>
  );
}
