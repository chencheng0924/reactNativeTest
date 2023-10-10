import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
let carouselItems = {
  activeSlide: 0,
  entries: [
    {
      title: "一卡通MONEY",
      subtitle: "**4345 65421",
      uri: require("../assets/qrcode.png"),
    },
    {
      title: "一卡通MONEY",
      subtitle: "**4345 65421",
      uri: require("../assets/qrcode.png"),
    },
    {
      title: "一卡通MONEY",
      subtitle: "**4345 65421",
      uri: require("../assets/qrcode.png"),
    },
  ],
};
const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.subtitle}>
        <Text>{item.title}</Text>
        <Image source={require("../assets/icon_arrowright.png")} />
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
      <Image style={styles.img} source={item.uri} />
      <View style={styles.refreshArea}>
        <Image source={require("../assets/icon_refresh.png")} />
        <Text style={styles.refreshAreaText}>更新</Text>
        <Text style={styles.refreshAreaText2}>05:38</Text>
      </View>
    </View>
  );
};
const width = Dimensions.get("window").width;
const CarouselList = () => {
  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={width}
        sliderHeight={width / 2}
        itemWidth={width - 100}
        data={carouselItems.entries}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        onSnapToItem={(index) => {
          carouselItems.activeSlide = index;
        }}
      />
    </View>
  );
};

export default CarouselList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#e7e7e7",
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    marginBottom: 10,
  },
  pagination: {
    height: 1,
    backgroundColor: "#333",
  },
  subtitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  text: {
    fontWeight: '300',
    fontSize: 14,
    position: "absolute",
    left: "35%",
  },
  img: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  refreshArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  refreshAreaText: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 5,
  },
  refreshAreaText2: {
    fontSize: 14,
    fontWeight: '700',
    color: "#1FC97B",
  },
});
