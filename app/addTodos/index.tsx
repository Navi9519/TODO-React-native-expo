import { View, Text, StyleSheet, TextInput } from "react-native";

export default function AddTodos() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}>Hello</TextInput>

      <Text>Add todos page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
