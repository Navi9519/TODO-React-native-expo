import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface DescriptionInputProps {
  value: string;
  onChangeDescription: (text: string) => void;
}

export default function DescriptionInput({
  value,
  onChangeDescription,
}: DescriptionInputProps) {
  return (
    <TextInput
      multiline
      numberOfLines={4}
      maxLength={100}
      style={styles.input}
      value={value}
      onChangeText={onChangeDescription}
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
