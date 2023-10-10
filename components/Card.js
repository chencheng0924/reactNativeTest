import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
  },
});
