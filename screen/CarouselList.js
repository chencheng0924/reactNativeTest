import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState, useRef } from "react";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
const carouselItems = [
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
];
const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.subtitle}>
        <Text style={styles.title}>{item.title}</Text>
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
  const [slideIndex, setSlideIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        sliderWidth={width}
        sliderHeight={width / 2}
        itemWidth={width - 100}
        data={carouselItems}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        onSnapToItem={(index) => {
          setSlideIndex(index);
        }}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={slideIndex}
        containerStyle={{ backgroundColor: "#E7E7E7", paddingVertical: 0 }}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 3,
          backgroundColor: "#1FC97B",
        }}
        inactiveDotStyle={{
          backgroundColor: "#C6C6C6",
        }}
        inactiveDotOpacity={0.9}
        inactiveDotScale={0.8}
      />
      {/* {pagination()} */}
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
    elevation: 2,
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
  },
  title: {
    fontWeight: "600",
    fontSize: 12,
  },
  text: {
    fontWeight: "300",
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
    fontWeight: "600",
    marginHorizontal: 5,
  },
  refreshAreaText2: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1FC97B",
  },
});
