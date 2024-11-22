import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import TitleInput from "@/components/inputs/TitleInput";
import DescriptionInput from "@/components/inputs/DescriptionInput";
import AddButton from "@/components/buttons/AddButton";

export default function AddTodosScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TitleInput></TitleInput>
        <Text>Description</Text>
        <DescriptionInput></DescriptionInput>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 40,
    //backgroundColor: "blue",
  },

  inputContainer: {
    display: "flex",
    justifyContent: "flex-start",
    height: "40%",
    width: "100%",
    // backgroundColor: "gray",
  },
});
