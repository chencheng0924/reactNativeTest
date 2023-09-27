import { View, Button, StyleSheet, TextInput, Modal } from "react-native";
import { useState } from "react";
const inputText = (props) => {
  const [addText, setAddText] = useState("");
  const inputHandler = (text) => {
    setAddText(text);
  };
  const addTextShow = () => {
    props.addTextShow(addText);
    setAddText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#fff"
          placeholder="請輸入事項"
          onChangeText={inputHandler}
          value={addText}
        ></TextInput>
        <View style={styles.buttonList}>
          <View style={styles.button}>
            <Button onPress={addTextShow} color="#fff" title="確認" />
          </View>
          <View style={styles.button2}>
            <Button onPress={props.closeModal} color="#2EB6C7" title="取消" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default inputText;
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    padding: 16,
    flex: 1,
  },
  inputText: {
    color: "#fff",
    fontSize: 16,
    borderColor: "#2EB6C7",
    backgroundColor: "#2EB6C7",
    // placeholdercolor: "#2EB6C7",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
  },
  buttonList: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
    backgroundColor: "#2EB6C7",
    borderRadius: 10,
  },
  button2: {
    width: "30%",
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderColor: "#2EB6C7",
    borderWidth: 1,
    borderRadius: 10,
  },
});
