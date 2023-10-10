import { View, StyleSheet, Text, Image } from "react-native";

const List = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map((item) => {
        return (
          <View style={styles.item} key={item.type}>
            {/* <Image style={styles.img} source={item.uri} /> */}
            <Image style={styles.itemImg} source={item.uri} />
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>{item.weight}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
  },
  itemImg: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  itemText: {
    color: "#6543FF",
    fontWeight: "bold",
    fontSize: 12,
    marginVertical: 2,
  },
});
