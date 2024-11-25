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
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import ITodo from "../_types/ITodo";

export default function AddTodosScreen() {
  // States
  const [todo, setTodo] = useState<ITodo>({
    title: "",
    description: "",
    date: new Date(),
  });
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  // Methods

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TitleInput></TitleInput>
        <Text>Description</Text>
        <DescriptionInput></DescriptionInput>
        <DateTimePicker
          style={styles.datepicker}
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
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

  datepicker: {
    marginVertical: 10,
  },
});
