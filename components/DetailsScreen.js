import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { todo, setTodos } = route.params;

  const handleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, isDone: true } : t))
    );
    navigation.goBack();
  };

  const handleUndo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, isDone: false } : t))
    );
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.todotitle}>{todo.title}</Text>
      <Text style={styles.description}>{todo.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, todo.isDone ? styles.undoButton : styles.completeButton]}
          onPress={todo.isDone ? handleUndo : handleComplete}
        >
          <Text style={styles.buttonText}>{todo.isDone ? "Undo" : "Complete"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEDED", 
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  todotitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#34495E",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 20,
    color: "#555",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  completeButton: {
    backgroundColor: "#27AE60",
  },
  undoButton: {
    backgroundColor: "#F39C12", 
  },
  deleteButton: {
    backgroundColor: "#E74C3C",
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
