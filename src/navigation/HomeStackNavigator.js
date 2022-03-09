import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import IntAddTestingScreen from "../screens/IntAddTestingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HistoryScreen from "../screens/HistoryScreen";

import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator({ navigation, route }) {
  return (
    <Stack.Navigator
      initialRouteName="/home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primaryDark : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : colors.primaryDark,
      }}
    >
      <Stack.Screen name="/home" component={HomeScreen} />
      <Stack.Screen
        name="/intAddTesting"
        component={IntAddTestingScreen}
        initialParams={{ testType: "x" }}
      />
      <Stack.Screen name="/settings" component={SettingsScreen} />
      <Stack.Screen name="/history" component={HistoryScreen} />
    </Stack.Navigator>
  );
}
