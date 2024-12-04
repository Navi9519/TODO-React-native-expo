import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import ITodo from "../../app/_types/ITodo";
import AddButton from "../buttons/AddButton";

interface ScrollTodoViewProps {
  todos: ITodo[];
  handleClick: (todo: ITodo) => void;
}
export default function ScrollTodoView({
  todos,
  handleClick,
}: ScrollTodoViewProps) {
  return (
    <ScrollView
      style={styles.todosContainer}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.cardsContainer}>
        {todos.map((todo, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardHeader}>
              <Text style={styles.dateTxt}>
                {todo.date
                  ? new Date(todo.date).toLocaleDateString()
                  : "No Date Selected"}
              </Text>
              <Pressable
                onPress={() => handleClick(todo)}
                style={styles.deleteBtn}
              >
                <Text style={styles.labelTxt}>Delete</Text>
              </Pressable>
            </View>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todosContainer: {
    width: "100%",
    marginTop: 20,
  },

  scrollContent: {
    alignItems: "center",
    alignContent: "space-evenly",
    justifyContent: "flex-start",
  },

  cardsContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
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
    display: "flex",
    justifyContent: "flex-start",
    width: "80%", // Make cards almost full width
    height: 150,
    alignSelf: "center", // Center the card
    marginVertical: 10, // Space between cards
  },

  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    //backgroundColor: "yellow",
  },

  deleteBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 4,
    width: "20%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "space-evenly",
    height: "45%",
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

  dateTxt: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
    marginTop: 2,
  },
});
