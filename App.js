import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Distance from "./screen/Distance";
import Record from "./screen/Record";
import CarouselList from "./screen/CarouselList";
import "react-native-gesture-handler";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

const Tab = createMaterialTopTabNavigator();
const MyTabBar = ({ navigation, state, descriptors }) => {
  return (
    <View style={styles.btnList}>
      {state.routes.map((item, index) => {
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: item.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: item.name, merge: true });
          }
        };
        const isFocused = state.index === index;
        const { route, options } = descriptors[item.key];
        return (
          <TouchableOpacity
            onPress={onPress}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            style={isFocused ? styles.btnItem : null}
          >
            <Text style={[styles.text, isFocused ? styles.textAct : null]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          height: 1800,
          paddingTop: 30,
          backgroundColor: "#E7E7E7",
        }}
      >
        <NavigationContainer>
          <CarouselList />
          <Tab.Navigator
            initialRouteName="減碳里程"
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "600",
              },
              tabBarIndicatorContainerStyle: {
                backgroundColor: "#E7E7E7",
              },
              tabBarIndicatorStyle: {
                backgroundColor: "#1FC97B",
              },
              tabBarActiveTintColor: "#1FC97B",
              tabBarInactiveTintColor: "#919191",
              tabBarAccessibilityLabel: "#1FC97B",
            }}
          >
            <Tab.Screen name="減碳里程" component={Distance} />
            <Tab.Screen name="交易紀錄" component={Record} />
          </Tab.Navigator>
        </NavigationContainer>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  btnList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnItem: {
    paddingBottom: 10,
    // paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#1FC97B",
  },
  text: {
    color: "#919191",
  },
  textAct: {
    fontWeight: "bold",
    color: "#1FC97B",
  },
});
