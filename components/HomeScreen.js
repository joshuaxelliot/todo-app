import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";

export default function HomeScreen({ navigation, todos, setTodos }) {
  const currentTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  const completedSections = [
    { title: "Completed Todos", data: completedTodos },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { todo: item, setTodos })}
      style={styles.currentItem}
    >
      <Text style={styles.currentTodoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCompletedItem = ({ item }) => (
    <TouchableOpacity
      style={styles.completedItem}
      onPress={() => navigation.navigate("Details", { todo: item, setTodos })}
    >
      <Text style={styles.completedTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Todos</Text>
      <FlatList
        style={styles.todolist}
        data={currentTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      {completedTodos.length > 0 && (
        <SectionList
          sections={completedSections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCompletedItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#34495E", 
  },
  currentItem: {
    backgroundColor: "#3498DB", 
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  currentTodoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#2C3E50", 
  },
  completedItem: {
    backgroundColor: "#6CFFBD", 
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  completedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
  },
});
