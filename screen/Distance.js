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
import List2 from "../components/list2";
import { LineChart, BarChart, PieChart } from "react-native-gifted-charts";
let dataList = [
  {
    title: "公車",
    weight: "25kg",
    type: "bus",
    uri: require("../assets/img-bus2.png"),
  },
  {
    title: "捷運",
    weight: "50kg",
    type: "mrt",
    uri: require("../assets/img-mrt2.png"),
  },
  {
    title: "輕軌",
    weight: "22kg",
    type: "lightMrt",
    uri: require("../assets/img-walk2.png"),
  }
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
  const lineData3 = [
    { value: 10, frontColor: "#1FC97B" },
    { value: 20, frontColor: "#1FC97B" },
    { value: 30, frontColor: "#1FC97B" },
    { value: 50, frontColor: "#1FC97B" },
    { value: 40, frontColor: "#1FC97B" },
    { value: 50, frontColor: "#1FC97B" },
    { value: 70, frontColor: "#1FC97B" },
    { value: 30, frontColor: "#1FC97B" },
    { value: 30, frontColor: "#1FC97B" },
    { value: 30, frontColor: "#1FC97B" },
    { value: 20, frontColor: "#1FC97B" },
    { value: 40, frontColor: "#1FC97B" },
    { value: 50, frontColor: "#1FC97B" },
    { value: 10, frontColor: "#1FC97B" },
  ];
  const pieData = [
    {
      value: 25,
      color: "#5DC1FF",
      showColor: "#5DC1FF",
      opacity: "#E8F6FF",
      text: "25%",
      status: true,
      title: "公車",
      img: require("../assets/img-bus.png"),
      focused: true,
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
    img: require("../assets/img-bus.png"),
    title: "公車",
    weight: "",
    text: "25%",
  };
  // const [selected, setSelected] = useState({
  //   img: null,
  //   title: "",
  //   weight: "",
  //   text: null,
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
          //   text: null,
          // });
        } else {
          item2.status = !item2.status;
          item2.color = item2.showColor;
          selected.img = item.img;
          selected.title = item.title;
          selected.text = item.text;
          // setSelected({
          //   img: item.img,
          //   title: item.title,
          //   text: item.text,
          // });
        }
      }
    });
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.section}>
          <View>
            <View style={styles.sectionText2}>
              <Text style={styles.sectionSubtitle}>累積里程</Text>
              <Text style={styles.sectionHeightTitle2}>34.8km</Text>
            </View>
            <Text style={styles.sectionTime}>2022-08-01至2022-08-31</Text>
          </View>
          <View style={styles.lineContainer}>
            <View
              style={{
                height: 1,
                width: 20,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#EFE6FF",
                marginRight: 5,
                alignSelf: "center",
              }}
            />
            {/* <DashedLine dashLength={5} /> */}
            <Text style={{fontSize: 12}}>大眾平均</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          {/* <LineChart
            strokeDashArray2={[5, 6]}
            width={Dimensions.get("window").width - 120}
            height={150}
            // spacing={Dimensions.get("window").width < 380 ? 70 : 80}
            spacing={(Dimensions.get("window").width - 85) / lineData.length}
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
            thickness={2}
            xAxisIndicesHeight={5}
            xAxisIndicesWidth={5}
            xAxisIndicesColor="#1FC97B"
            xAxisLabelTextStyle={{
              color: "#333",
            }}
          /> */}
          <BarChart
            data={lineData3}
            barWidth={10}
            // barBorderRadius={10}
            barBorderTopLeftRadius={20}
            barBorderTopRightRadius={20}
            frontColor="white"
            hideRules
            spacing={10}
            yAxisThickness={0}
            xAxisColor={"lightgray"}
            // xAxisThickness={0}
            yAxisLabelTexts={[]}
            hideYAxisText
            showLine
            lineConfig={{
              color: '#EEE5FF',
              thickness: 1,
              curved: true,
              hideDataPoints: true,
              shiftY: 10,
              initialSpacing: -30,
            }}
            // yAxisTextStyle={{ color: "white" }}
            // referenceLine1Config={{
            //   color: "gray",
            //   dashWidth: 2,
            //   dashGap: 3,
            // }}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.section}>
          <View>
            <View style={styles.sectionText}>
              <Text style={styles.sectionSubtitle}>我的減碳排放量</Text>
              <Text style={styles.sectionHeightTitle}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>125</Text> kg
                CO2
              </Text>
            </View>
            <Text style={styles.sectionTime}>2022-08-01至2022-08-31</Text>
          </View>
          <View style={styles.lineContainer2}>
            <View style={styles.section2}>
              <Image
                style={styles.arrowImg}
                source={require("../assets/arrowUp.png")}
              />
              <Text style={styles.section2Text}>+1.1%</Text>
            </View>
            <View>
              <Text style={styles.section2Text2}>相比前一個月</Text>
            </View>
          </View>
        </View>
        <View style={styles.chart2}>
          <View style={styles.barLine}>
            <View style={styles.barLine1}/>
            <View style={styles.barLine2}/>
          </View>
          <View style={styles.statusBar1}>
            <View style={styles.statusBar1View}>
              <Text style={styles.statusBar1Text}>0</Text>
            </View>
          </View>
          <View style={styles.statusBar2}>
            <View style={styles.statusBar2View}>
              <Text style={styles.statusBar2Text}>25%</Text>
            </View>
          </View>
          <View style={styles.statusBar3}>
            <View style={styles.statusBar3View}>
              <Text style={styles.statusBar3Text}>50%</Text>
            </View>
          </View>
          <View style={styles.statusBar4}>
            <View style={styles.statusBar4View}>
              <Text style={styles.statusBar4Text}>75%</Text>
            </View>
          </View>
          <View style={styles.statusBar5}>
            <View style={styles.statusBar5View}>
              <Text style={styles.statusBar5Text}>100%</Text>
            </View>
          </View>
          {/* <PieChart
            donut
            // showText
            textSize={16}
            onPress={testPress}
            data={pieData}
            focusOnPress
            centerLabelComponent={() => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={selected.img} />
                  <View style={{ marginLeft: 2 }}>
                    <Text style={{ fontSize: 12 }}>{selected.title}</Text>
                    <Text style={{ fontSize: 12, color: "#919191" }}>
                      {selected.text}
                    </Text>
                  </View>
                </View>
              );
            }}
          /> */}
        </View>
        {/* <List list={dataList} /> */}
        <List2 list={dataList} />
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
    flexDirection: "column",
    marginBottom: 5,
  },
  sectionText2: {
    flexDirection: "column",
    marginBottom: 5,
  },
  sectionTime: {
    fontSize: 12,
    fontWeight: "400",
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  sectionHeightTitle: {
    color: "#1FC97B",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  sectionHeightTitle2: {
    color: "#1FC97B",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  lineContainer: {
    flexDirection: "row",
    height: 20,
  },
  lineContainer2: {
    flexDirection: "column",
  },
  section2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end'
  },
  section2Text: {
    color: "#1FC97B",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 5,
  },
  section2Text2: {
    color: "#919191",
    textAlign: "center",
    marginTop: 3,
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
    fontWeight: "600",
    marginBottom: 20,
  },
  card3Subitle: {
    color: "#6443FF",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  card3Text: {
    fontSize: 14,
    fontWeight: "600",
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
    // paddingTop: 20,
    // paddingLeft: 20,
    marginVertical: 50
  },
  barLine: {
    width: '100%',
    height: 15,
    backgroundColor: '#5DC1FF',
    borderRadius: 10
  },
  barLine1: {
    position: 'absolute',
    top: 0,
    left: '70%',
    width: 30,
    height: 15,
    backgroundColor: '#EE6B6F'
  },
  barLine2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 70,
    height: 15,
    backgroundColor: '#60D9BD',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10
  },
  statusBar1: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 1,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  statusBar1View: {
    position: 'absolute',
    left: -3,
    bottom: -25,
    width: 30
  },
  statusBar1Text: {
    color:'#919191'
  },
  statusBar2: {
    position: 'absolute',
    top: -25,
    left: '25%',
    width: 1,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 1,
    zIndex: -1
  },
  statusBar2View: {
    position: 'absolute',
    left: -8,
    bottom: -25,
    width: 30
  },
  statusBar2Text: {
    color:'#919191'
  },
  statusBar3: {
    position: 'absolute',
    top: -25,
    left: '50%',
    width: 1,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 1,
    zIndex: -1
  },
  statusBar3View: {
    position: 'absolute',
    left: -8,
    bottom: -25,
    width: 30
  },
  statusBar3Text: {
    color:'#919191'
  },
  statusBar4: {
    position: 'absolute',
    top: -25,
    left: '75%',
    width: 1,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 1,
    zIndex: -1
  },
  statusBar4View: {
    position: 'absolute',
    left: -8,
    bottom: -25,
    width: 30
  },
  statusBar4Text: {
    color:'#919191'
  },
  statusBar5: {
    position: 'absolute',
    top: -25,
    left: '100%',
    width: 1,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  statusBar5View: {
    position: 'absolute',
    left: -20,
    bottom: -25,
    width: 35
  },
  statusBar5Text: {
    color:'#919191'
  }
});
