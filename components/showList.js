import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
const showItem = (props) => {
  return (
    <View style={styles.showItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={(pressed) => pressed && styles.pressedItem}
        onPress={props.deleteItem.bind(this, props.id)}
      >
        <Text style={styles.showItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default showItem;

const styles = StyleSheet.create({
  showItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#2EB6C7",
    borderRadius: 10,
  },
  pressedItem: {
    color: "#fff",
  },
  showItemText: {
    color: "#fff",
  },
});
