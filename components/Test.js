import { View, Text, StyleSheet } from "react-native";

const Test = () => {
  return (
    <View>
      <Text style={styles.text}>123123</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
