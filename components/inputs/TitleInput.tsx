import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function TitleInput() {
  const [text, setText] = useState("");

  return <TextInput style={styles.input} value={text} onChangeText={setText} />;
}

const styles = StyleSheet.create({
  input: {
    height: "12%",
    width: "80%",
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
