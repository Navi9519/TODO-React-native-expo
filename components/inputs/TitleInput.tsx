import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface TitleInputProps {
  value: string;
  onChangeTitle: (text: string) => void;
}

export default function TitleInput({ value, onChangeTitle }: TitleInputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeTitle}
    />
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
