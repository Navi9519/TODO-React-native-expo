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
import ScrollTodoView from "@/components/ScrollViews/ScrollTodoView";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import ITodo from "../_types/ITodo";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
      setTodo((prevTodo) => ({ ...prevTodo, date: selectedDate }));
    }
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, todo]);

    // reseting input field
    setTodo({ title: "", description: "", date: new Date() });
    setDate(new Date());
    console.log(todos);
  };

  // UseEffects

  // Loading all the added todos every time the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    };

    loadTodos();
  }, []);

  // Updating the todos every time the todoarray changes

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (error) {
        console.log("failed to save todos", error);
      }
    };

    saveTodos();
  }, [todos]);

  useEffect(() => {
    console.log("AddTodosScreen mounted");
    return () => {
      console.log("AddTodosScreen unmounted");
    };
  }, []);

  const deleteTodo = async (todoTodelete: ITodo) => {
    try {
      const updatedTodos = todos.filter(
        (todo) => todo.title !== todoTodelete.title
      );
      setTodos(updatedTodos);

      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.log("failed to delete todo", error);
    }
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
      <ScrollTodoView todos={todos} handleClick={(todo) => deleteTodo(todo)} />
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
});
