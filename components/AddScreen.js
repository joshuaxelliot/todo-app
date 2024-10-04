import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function AddScreen({ route, navigation }) {
  const { setTodos } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please enter both a title and a description.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Add a New Todo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter todo title"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter todo description"
          multiline
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTodo}
        >
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEDED",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "#FFFFFF", 
    borderRadius: 10,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#34495E",
  },
  input: {
    height: 50,
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#3498DB",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    alignItems: "center",
  },
  cancelButtonText: {
    color: "red",
    fontSize: 18,
  },
});
