import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface TitleInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function TitleInput({ value, onChangeText }: TitleInputProps) {
  return (
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
  );
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
