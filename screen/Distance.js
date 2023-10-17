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
import List3 from "../components/list3";
import DashedLine from "../components/DashedLine";
import { LineChart, BarChart, PieChart } from "react-native-gifted-charts";
import { ProgressChart } from "react-native-chart-kit";
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
let dataList4 = [
  {
    name: "Meng-Tien",
    weight: "178kg",
    present: "58",
    uri: require("../assets/Robot2.png"),
  },
  {
    name: "Hsin-Yi",
    weight: "125kg",
    present: "42",
    uri: require("../assets/Robot1.png"),
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
    { value: 10 },
    { value: 20},
    { value: 30},
    { value: 50},
    { value: 40},
    { value: 50},
    { value: 70, frontColor: "#6443FF", label: '8/18', labelComponent: () => (
      <Text style={{textAlign: "center",fontSize: 12,padding: 5,width: 40, height: 25, backgroundColor: '#333', color: 'white', marginLeft: -8, marginBottom: -5, borderRadius: 10}}>8/18</Text>
    ),},
    { value: 30},
    { value: 30},
    { value: 30},
    { value: 20},
    { value: 40},
    { value: 50},
    { value: 10},
    { value: 10},
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
  const dataList3 = {
    data: [0.3, 0.5, 0.7, 0.9],
    colors: [
      "rgba(238, 107, 111, 1)",
      "rgba(255, 173, 77, 1) ",
      "rgba(93, 193, 255, 1) ",
      "rgba(31, 201, 123, 1)",
    ],
  };
  const changeText = (text, index) => {
    console.log('text', text);
    console.log('index', index);
  }
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.section}>
          <View>
            <View style={styles.sectionText2}>
              <Text style={styles.sectionSubtitle}>累積里程</Text>
              <Text style={styles.sectionHeightTitle2}>54.2km</Text>
            </View>
            <Text style={styles.sectionTime}>2022-08-01至2022-08-31</Text>
          </View>
          <View style={styles.lineContainer3}>
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
            width={Dimensions.get("window").width - 120}
            barWidth={10}
            barBorderTopLeftRadius={20}
            barBorderTopRightRadius={20}
            hideRules
            spacing={15}
            yAxisThickness={0}
            xAxisColor={"lightgray"}
            frontColor={'#1FC97B'}
            // xAxisThickness={0}
            // yAxisLabelTexts={[]}
            hideYAxisText
            showLine
            lineConfig={{
              color: '#EEE5FF',
              thickness: 1,
              curved: true,
              hideDataPoints: true,
              shiftY: -15,
              initialSpacing: 15,
            }}
            labelComponent
            xAxisLabelTextStyle={{
              color: 'black',
              backgroundColor: (item, index) => {
                console.log(index)
                return '#333'
              },
              borderRadius: 10,
              fontSize: 8,
              padding: 4,
            }}
            // labelWidth={10}
            withCustomBarColorFromData={true}
            flatColor={true}
            onPress={changeText}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.section}>
          <View>
            <View style={styles.sectionText}>
              <Text style={styles.sectionSubtitle}>我的減碳排放量</Text>
              <Text style={styles.sectionHeightTitle}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>125</Text> kg
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
            <DashedLine backgroundColor='#E0E0E0' len={6} width={60}></DashedLine>
            <View style={styles.statusBar1View}>
              <Text style={styles.statusBar1Text}>0</Text>
            </View>
          </View>
          <View style={styles.statusBar2}>
            <DashedLine backgroundColor='#E0E0E0' len={6} width={60}></DashedLine>
            <View style={styles.statusBar2View}>
              <Text style={styles.statusBar2Text}>25%</Text>
            </View>
          </View>
          <View style={styles.statusBar3}>
            <DashedLine backgroundColor='#E0E0E0' len={6} width={60}></DashedLine>
            <View style={styles.statusBar3View}>
              <Text style={styles.statusBar3Text}>50%</Text>
            </View>
          </View>
          <View style={styles.statusBar4}>
            <DashedLine backgroundColor='#E0E0E0' len={6} width={60}></DashedLine>
            <View style={styles.statusBar4View}>
              <Text style={styles.statusBar4Text}>75%</Text>
            </View>
          </View>
          <View style={styles.statusBar5}>
            <DashedLine backgroundColor='#E0E0E0' len={6} width={60}></DashedLine>
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
          <View style={styles.section}>
          <View>
            <View style={styles.sectionText2}>
              <Text style={styles.sectionSubtitle}>累積里程</Text>
              <Text style={styles.sectionHeightTitle}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>303</Text> kg
                CO2
              </Text>
            </View>
            <Text style={styles.sectionTime}>2022-08-01至2022-08-31</Text>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.lineItem}>
              <View
                style={{
                  height: 4,
                  width: 15,
                  borderRadius: 5,
                  backgroundColor: '#E0E0E0',
                  marginRight: 8,
                  alignSelf: "center",
                }}
              />
              {/* <DashedLine dashLength={5} /> */}
              <Text style={{fontSize: 12}}>台灣碳排平均</Text>
            </View>
            <View style={styles.lineItem}>
              <View
                style={{
                  height: 4,
                  width: 15,
                  borderRadius: 5,
                  backgroundColor: "#1FC97B",
                  marginRight: 8,
                  alignSelf: "center",
                }}
              />
              {/* <DashedLine dashLength={5} /> */}
              <Text style={{fontSize: 12}}>家庭碳排平均</Text>
            </View>
          </View>
          </View>
          <View style={styles.card3Area}>
            <ProgressChart
              data={dataList3}
              width={Dimensions.get("window").width - 120}
              height={220}
              strokeWidth={10}
              radius={44}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: (opacity = 1) => `rgba(232, 232, 233, 0.5)`,
                // color: (opacity = 0, index) => {
                //   return index ? `${dataList3.colors[index]}${opacity})` : `rgba(238, 107, 111, ${opacity})`
                // },
                // `${dataList3.colors[index]}${opacity})`
                // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                // labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              hideLegend={true}
              withCustomBarColorFromData
            />
            <View style={{
            position: 'absolute',
            top: '40%',
            left: '41.5%',
            width: 60,
            height: 60,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: '#333'
          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
            }}>94<Text style={{
              fontSize: 12,
            }}>%</Text></Text>
            <Text style={{
              fontSize: 8
            }}>月目標已完成</Text>
            </View>
          </View>
          <View style={styles.remindText}>
            <Text style={styles.remindInText}>🌳 還差125kg CO2即可達標 🌳</Text>
          </View>
          <List3 list={dataList4} />
        </View>
      </Card>
      <Card>
        <View style={styles.card4}>
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
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  sectionHeightTitle2: {
    color: "#1FC97B",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  lineContainer3: {
    flexDirection: "row",
    height: 20
  },
  lineContainer: {
    flexDirection: "column",
  },
  lineItem: {
    flexDirection: 'row',
    marginBottom: 5
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
    // alignItems: "center",
  },
  card4: {
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
    height: 100,
    marginBottom: 30

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
    top: 20,
    left: 0,
    width: 1,
    height: 60,
  },
  statusBar1View: {
    position: 'absolute',
    left: -3,
    bottom: -25,
    width: 30,
  },
  statusBar1Text: {
    color:'#919191'
  },
  statusBar2: {
    position: 'absolute',
    top: 20,
    left: '25%',
    width: 1,
    height: 60,
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
    top: 20,
    left: '50%',
    width: 1,
    height: 60,
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
    top: 20,
    left: '75%',
    width: 1,
    height: 60,
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
    top: 20,
    left: '100%',
    width: 1,
    height: 60,
  },
  statusBar5View: {
    position: 'absolute',
    left: -20,
    bottom: -25,
    width: 35
  },
  card3Area: {
    paddingVertical: 10,
    flexDirection:'row',
    justifyContent: "center",
  },
  statusBar5Text: {
    color:'#919191'
  },
  remindText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  remindInText: {
    color: '#919191',
    backgroundColor: '#F7F7F8',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});
