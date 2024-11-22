import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function DescriptionInput() {
  const [text, setText] = useState("");

  return (
    <TextInput
      multiline
      numberOfLines={4}
      maxLength={100}
      style={styles.input}
      value={text}
      onChangeText={setText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: "40%",
    width: "80%",
    borderWidth: 1,
    marginTop: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderRadius: 8,
  },
});
