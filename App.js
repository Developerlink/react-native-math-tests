import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import store from "./src/store/store";
import HomeStackNavigator from "./src/navigation/HomeStackNavigator";
import colors from "./src/constants/colors";

enableScreens();

const fetchFontsAsync = async () => {
  await Font.loadAsync({
    "open-sans": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);

  if (!fontIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFontsAsync}
        onFinish={() => setFontIsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1}}>
        <StatusBar
          backgroundColor="black"
          style={Platform.OS === "android" ? "light" : "dark"}
        />
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
