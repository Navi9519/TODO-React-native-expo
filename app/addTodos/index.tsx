import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ScrollView,
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
  });
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  // Methods

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    if (event.type === "set" && selectedDate) {
      setDate(currentDate);
    }
  };

  const addTodo = () => {
    const newTodo: ITodo = {
      ...todo,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo({ title: "", description: "" });
    console.log(todos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TitleInput
          value={todo.title}
          onChangeTitle={(text) => setTodo({ ...todo, title: text })}
        />

        <Text>Description</Text>
        <DescriptionInput
          value={todo.description}
          onChangeDescription={(text) =>
            setTodo({ ...todo, description: text })
          }
        />
        <DateTimePicker
          style={styles.datepicker}
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
        <AddButton handleClick={addTodo} />
      </View>

      <ScrollView
        style={styles.todosContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {todos.map((todo, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.content}>
              <Text style={styles.labelTxt}>Title:</Text>
              <Text style={styles.contentTxt}>{todo.title}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.labelTxt}>Description:</Text>
              <Text style={styles.contentTxt}>-{todo.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    // backgroundColor: "blue",
  },

  inputContainer: {
    display: "flex",
    justifyContent: "flex-start",
    height: "50%",
    width: "100%",
    paddingTop: 20,
    paddingLeft: 20,
    // backgroundColor: "gray",
  },

  datepicker: {
    marginVertical: 10,
  },

  todosContainer: {
    width: "100%",
    marginTop: 20,
  },

  scrollContent: {
    alignItems: "center",
    alignContent: "space-evenly",
    justifyContent: "flex-start",
  },

  card: {
    backgroundColor: "blue",
    borderRadius: 15,
    padding: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: "50%",
    height: "30%",
    display: "flex",
    justifyContent: "flex-start",
    marginVertical: 10,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "space-between",
    height: "50%",
  },

  labelTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },

  contentTxt: {
    marginTop: 2,
    fontSize: 12,
    color: "white",
  },
});
