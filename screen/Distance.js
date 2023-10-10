import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import List from "../components/list";
import { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
let dataList = [
  {
    title: "公車",
    weight: "25kg",
    type: "bus",
    uri: require("../assets/icon-bus.png"),
  },
  {
    title: "捷運",
    weight: "50kg",
    type: "mrt",
    uri: require("../assets/icon-mrt.png"),
  },
  {
    title: "輕軌",
    weight: "22kg",
    type: "lightMrt",
    uri: require("../assets/icon-lightMrt.png"),
  },
  {
    title: "步行",
    weight: "28kg",
    type: "walk",
    uri: require("../assets/icon-walk.png"),
  },
];
const Distance = () => {
  const lineData = [
    { value: 1.0, label: "week1", showXAxisIndex: true },
    { value: 0.75, label: "week2", showXAxisIndex: true },
    { value: 0.65, label: "week3", showXAxisIndex: true },
    { value: 0.55, label: "week4", showXAxisIndex: true },
  ];
  const lineData2 = [
    { value: 0.5, label: "week1", showXAxisIndex: true },
    { value: 0.35, label: "week2", showXAxisIndex: true },
    { value: 0.6, label: "week3", showXAxisIndex: true },
    { value: 0.75, label: "week4", showXAxisIndex: true },
  ];
  const pieData = [
    {
      value: 25,
      color: "#E8F6FF",
      showColor: "#5DC1FF",
      opacity: "#E8F6FF",
      text: "25%",
      status: false,
      title: "公車",
      img: require("../assets/img-bus.png"),
    },
    {
      value: 26,
      color: "#fff3e5",
      showColor: "#FFAD4D",
      opacity: "#fff3e5",
      text: "26%",
      status: false,
      title: "捷運",
      img: require("../assets/img-mrt.png"),
    },
    {
      value: 24,
      color: "#fdeaea",
      showColor: "#EE6B6F",
      opacity: "#fdeaea",
      text: "24%",
      status: false,
      title: "輕軌",
      img: require("../assets/img-lightMrt.png"),
    },
    {
      value: 25,
      color: "#f2faea",
      showColor: "#A5DB6F",
      opacity: "#f2faea",
      text: "25%",
      status: false,
      title: "步行",
      img: require("../assets/img-walk.png"),
    },
  ];
  const selected = {
    img: null,
    title: "",
    weight: "",
    text: null
  }
  // const [selected, setSelected] = useState({
  //   img: null,
  //   title: "",
  //   weight: "",
  //   text: null
  // });
  const testPress = (item, index) => {
    pieData.forEach((item2, index2) => {
      if (index !== index2) {
        item2.status = false;
        item2.color = item2.opacity;
      } else {
        if (item2.status) {
          item2.status = !item2.status;
          item2.color = item2.opacity;
          selected.img = null;
          selected.title = "";
          selected.text = "";
          // setSelected({
          //   img: null,
          //   title: "",
          //   weight: "",
          //   text: null
          // })
        } else {
          item2.status = !item2.status;
          item2.color = item2.showColor;
          selected.img = item.img;
          selected.title = item.title;
          selected.text = item.text;
          // setSelected({
          //   img: item.img,
          //   title: item.title,
          //   text: item.text
          // })
        }
      }
    });
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.section}>
          <View>
            <View style={styles.sectionText}>
              <Text style={styles.sectionSubtitle}>累積里程</Text>
              <Text style={styles.sectionHeightTitle}>34.8km</Text>
            </View>
            <Text style={styles.sectionTime}>2022-08-01至2022-08-31</Text>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text>大眾平均</Text>
          </View>
        </View>
        <View>
          <LineChart
            width={Dimensions.get("window").width - 120}
            height={150}
            spacing={Dimensions.get("window").width < 380 ? 70 : 80}
            // 隱藏背後虛線
            hideRules
            // 隱藏Y軸文字
            hideYAxisText
            data={lineData}
            startIndex={1}
            endIndex={4}
            color1="#1FC97B"
            data2={lineData2}
            startIndex2={0}
            endIndex2={4}
            color2="#e0e0e0"
            dataPointsColor="#1FC97B"
            dataPointsColor2="#e0e0e0"
            hideDataPoints2
            xAxisColor="#1FC97B"
            yAxisColor="#fff"
            maxValue={1}
            thickness={3}
            xAxisIndicesHeight={5}
            xAxisIndicesWidth={5}
            xAxisIndicesColor="#1FC97B"
            xAxisLabelTextStyle={{
              color: "#333",
            }}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.section}>
          <View>
            <View style={styles.sectionText}>
              <Text style={styles.sectionSubtitle}>累積減碳排放量</Text>
              <Text style={styles.sectionHeightTitle}><Text style={{fontSize: 28, fontWeight: 'bold'}}>125</Text> kg CO2</Text>
            </View>
            <Text style={styles.sectionTime}>2022-08-01至2022-08-31</Text>
          </View>
          <View style={styles.lineContainer2}>
            <View style={styles.section2}>
              <Image
                style={styles.arrowImg}
                source={require("../assets/arrowUp.png")}
              />
              <Text style={styles.section2Text}>+4.3%</Text>
            </View>
            <View>
              <Text style={styles.section2Text2}>相比上月</Text>
            </View>
          </View>
        </View>
        <View style={styles.chart2}>
          <PieChart
            donut
            radius={100}
            textSize={12}
            onPress={testPress}
            data={pieData}
            focusOnPress
            // centerLabelComponent={() => {
            //   return (
            //     <View style={{ flexDirection: "row", alignItems: "center" }}>
            //       <Image source={selected.img} />
            //       <View style={{ marginLeft: 2 }}>
            //         <Text style={{ fontSize: 12 }}>{selected.title}</Text>
            //         <Text style={{ fontSize: 12, color: "#919191" }}>
            //           {selected.text}
            //         </Text>
            //       </View>
            //     </View>
            //   );
            // }}
          />
          <View style={{ flexDirection: "row", alignItem: "center" }}>
            <Image source={selected.img} />
            <View style={{ marginLeft: 2 }}>
              <Text style={{ fontSize: 12 }}>{selected.title}</Text>
              <Text style={{ fontSize: 12, color: "#919191" }}>
                {selected.text}
              </Text>
            </View>
          </View>
        </View>
        <List list={dataList} />
      </Card>
      <Card>
        <View style={styles.card3}>
          <Text style={styles.card3Title}>減碳等級</Text>
          <Image
            style={styles.img}
            source={require("../assets/planet-earth.png")}
          />
          <Text style={styles.card3Subitle}>減碳高手LV 1</Text>
          <Text style={styles.card3Text}>
            目前已累積減碳 250kg = 2棵🌲碳匯量
          </Text>
        </View>
      </Card>
    </View>
  );
};
export default Distance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E7E7",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  sectionTime: {
    fontSize: 12,
    fontWeight: '400',
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeightTitle: {
    color: "#1FC97B",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineContainer2: {
    flexDirection: "column",
  },
  section2: {
    flexDirection: "row",
    alignItems: "center",
  },
  section2Text: {
    color: "#1FC97B",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
  section2Text2: {
    color: "#919191",
    textAlign: "center",
    marginTop: 3,
  },
  line: {
    width: 20,
    height: 5,
    backgroundColor: "#e0e0e0",
    marginRight: 5,
  },
  card: {
    flex: 1,
    justifyContent: "center",
  },
  card3: {
    flexDirection: "column",
    alignItems: "center",
  },
  card3Title: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },
  card3Subitle: {
    color: "#6443FF",
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  card3Text: {
    fontSize: 14,
    fontWeight: '600',
  },
  arrowImg: {
    width: 16,
    height: 16,
  },
  img: {
    width: 81,
    height: 81,
  },
  chart2: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
  },
});
