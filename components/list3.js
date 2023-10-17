import { View, StyleSheet, Text, Image } from "react-native";

const List = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map((item) => {
        return (
          <View style={styles.item} key={item.name}>
            <View style={styles.itemComtainer}>
                <Image style={styles.itemImg} source={item.uri} />
                <Text style={styles.itemText}>{item.name}</Text>
            </View>    
            <View style={styles.itemComtainer}>
                <View style={styles.itemComtainer2}>
                    <Text style={styles.itemText2}>{item.weight}</Text>
                    <Text>/</Text>
                    <Text style={styles.itemText2}>貢獻值{item.present}%</Text>
                </View>
                <Image style={styles.itemImg} source={require("../assets/icon_arrowright.png")} />
            </View>        
          </View>
        );
      })}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 10
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemComtainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  itemImg: {
    width: 32,
    height: 32,
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  itemText2: {
    fontSize: 12,
    fontWeight: '700',
    color: "#919191",
  },
  itemComtainer2: {
    flexDirection: 'row',
    gap: 3,
  }
});
