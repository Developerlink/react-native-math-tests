import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import CustomButton from "../components/CustomButton";

import colors from "../constants/colors";
import { Platform } from "react-native-web";

let iconSize = Dimensions.get("window").height > 500 ? 250 : 150;
const iconColor = "white";

export default function TestingScreen({ navigation, route }) {
  const [testType, setTestType] = useState();
  const [hasBegun, setHasBegun] = useState(false);

  useEffect(() => {
    const currentTestType = route.params.testType;
    setTestType(currentTestType);

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

  let iconName;
  if (testType === "+") {
    iconName = "plus-box";
  } else if (testType === "-") {
    iconName = "minus-box";
  } else if (testType === "x") {
    iconName = "file-excel-box";
  } else if (testType === "/") {
    iconName = "division-box";
  } else {
    iconName = "calculator-variant";
  }

  if (!hasBegun) {
    return (
      <View style={styles.startScreen}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        </View>
        <CustomButton
          title="start"
          bordered
          color={colors.primaryDark}
          fontSize={24}
          onPress={() => setHasBegun(true)}
        />
      </View>
    );
  }

  return (
    <View style={styles.runScreen}>
      <View
        style={{ ...styles.problemContainer, ...styles.problemContainerBorder }}
      >
        <View>
          <Text style={styles.problemText}>2 + 8</Text>
        </View>
      </View>
      <View style={styles.problemContainer}>
        <View>
          <Text style={styles.answerText}>10</Text>
        </View>
      </View>
      <View style={styles.numPadContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: Dimensions.get("window").height > 500 ? 40 : 10,
  },
  runScreen: {
    flex: 1,
    backgroundColor: colors.softWhite,
  },
  problemContainer: {
    flex: 1,
    backgroundColor: colors.softWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  problemContainerBorder: {
    marginHorizontal: Dimensions.get("window").width > 500 ? 100 : 60,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryDark,
  },
  problemText: {
    fontSize: Dimensions.get("window").height > 500 ? 64 : 32,
    fontFamily: "open-sans-bold",
    color: colors.primaryLight,
  },
  answerText: {
    fontSize: Dimensions.get("window").height > 500 ? 64 : 32,
    fontFamily: "open-sans-bold",
    color: colors.secondary
  },
  numPadContainer: {
    flex: 2,
    backgroundColor: colors.primaryDark,
  },
});
