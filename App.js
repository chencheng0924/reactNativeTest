import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import ShowList from "./components/showList";
import InputText from "./components/inputText";

export default function App() {
  const [showItem, setShowItem] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const modalHandler = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };
  const addTextShow = (entryText) => {
    setShowItem((nowShowItem) => [
      ...nowShowItem,
      { text: entryText, id: Math.random().toString() },
    ]);
    closeModal();
  };
  const deleteItem = (id) => {
    setShowItem((nowShowItem) => {
      return nowShowItem.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/img/calendar.png")}
        />
        <TouchableOpacity style={styles.addNew} onPress={modalHandler}>
          <Text style={styles.addNewButton}>新增行事曆</Text>
        </TouchableOpacity>
        <InputText
          visible={modalShow}
          closeModal={closeModal}
          addTextShow={addTextShow}
        />
        <View style={styles.showContainer}>
          {/* <ScrollView alwaysBounceVertical={false}>
          {showItem.map((item, index) => (
            <View style={styles.showItem} key={index}>
              <Text style={styles.showItemText}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={showItem}
            renderItem={(itemData) => {
              return (
                <ShowList
                  deleteItem={deleteItem}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  showContainer: {
    flex: 5,
    margin: 10,
    flexDirection: "column",
  },
  button: {
    color: "#2EB6C7",
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  addNew: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  addNewButton: {
    backgroundColor: "#2EB6C7",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
  },
});
