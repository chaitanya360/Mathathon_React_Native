import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../components/HomeScreen";
import GameScreen from "../components/GameScreen";

function AppNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="game" component={GameScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
