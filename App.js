import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailsScreen";
import AddScreen from "./components/AddScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const initialTodos = [
  {
    id: 1,
    title: "Gym",
    description: " 3 min intervals",
    isDone: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#252525", 
          },
          headerTintColor: "#ECF0F1", 
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: "My Todos",
            headerRight: () => (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("Add", { setTodos })}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            ),
          })}
        >
          {(props) => (
            <HomeScreen {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            title: "Todo Details",
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ title: "Add Todo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginRight: 15,
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
