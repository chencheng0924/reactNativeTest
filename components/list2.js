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
            <Text style={styles.itemText2}>{item.weight}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "32%",
  },
  itemImg: {
    width: 24,
    height: 24,
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  itemText2: {
    fontSize: 12,
    fontWeight: '400',
    color: "#919191",
  },
});
