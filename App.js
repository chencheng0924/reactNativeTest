import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Distance from "./screen/Distance";
import Record from "./screen/Record";
import CarouselList from "./screen/CarouselList";
import 'react-native-gesture-handler'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView />
      <ScrollView contentContainerStyle={{flexGrow:1, height: 1380, paddingTop: 30, backgroundColor: '#E7E7E7'}}>
        <NavigationContainer>
        <CarouselList/>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: '600',
              },
              tabBarIndicatorContainerStyle: {
                width: "100%",
                left: "0",
                backgroundColor: "#E7E7E7",
              },
              tabBarIndicatorStyle: {
                backgroundColor: "#1FC97B",
              },
              tabBarActiveTintColor: "#1FC97B",
              tabBarInactiveTintColor: "#919191",
              tabBarStyle: {
                backgroundColor: "#E7E7E7",
              },
            }}
          >
            <Tab.Screen
              options={{
                tabBarActiveTintColor: "#1FC97B",
              }}
              name="減碳里程"
              component={Distance}
            />
            <Tab.Screen name="交易紀錄" component={Record} />
          </Tab.Navigator>
        </NavigationContainer>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
