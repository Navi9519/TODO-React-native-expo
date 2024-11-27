import { Pressable, Text, StyleSheet } from "react-native";

interface buttonProps {
  handleClick: () => void;
}

export default function AddButton({ handleClick }: buttonProps) {
  return (
    <Pressable onPress={handleClick} style={styles.button}>
      <Text style={styles.btnText}>Add todo</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 15,
    width: "40%",
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "blue",
  },

  btnText: {
    color: "white",
  },
});
