import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import PreStartScreen from "./PreStartScreen";
import PostStartScreen from "./PostStartScreen";


export default function IntSubtractTestingScreen({ navigation, route }) {
  const testType = route.params.testType;
  const [hasBegun, setHasBegun] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="settings"
            iconName="settings-sharp"
            IconComponent={Ionicons}
            onPress={() => navigation.navigate("/settings", { testType })}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const beginHandler = (value) => {
    setHasBegun(value);
    navigation.setOptions({
      headerShown: false,
    });
  };

  if (!hasBegun) {
    return (
      <PreStartScreen
        testType={testType}
        onHasBegun={beginHandler}
        problems={20}
      />
    );
  }

  return <PostStartScreen />;
}

const styles = StyleSheet.create({});
