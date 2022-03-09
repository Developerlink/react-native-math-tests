import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

import colors from "../constants/colors";

const iconSize = Dimensions.get("window").height > 500 ? 250 : 150;
const iconColor = "white";

export default function PreStartScreen({
  testType,
  problems = 20,
  timeLimit = "None",
  onHasBegun,
}) {
  let icon;
  if (testType === "+") {
    icon = (
      <MaterialCommunityIcons
        name={"plus-box"}
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (testType === "-") {
    icon = (
      <MaterialCommunityIcons
        name={"minus-box"}
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (testType === "x") {
    icon = (
      <MaterialCommunityIcons
        name={"file-excel-box"}
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (testType === "/") {
    icon = (
      <MaterialCommunityIcons
        name={"division-box"}
        size={iconSize}
        color={iconColor}
      />
    );
  } else {
    icon = (
      <MaterialCommunityIcons
        name={"calculator-variant"}
        size={iconSize}
        color={iconColor}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.preStartScreen}>
        <View>
          {icon}
        </View>
        <Card style={styles.settingsTextContainer}>
          <Text style={styles.settingsText}>Problems: {problems}</Text>
          {/* <Text style={styles.settingsText}>Time limit: {timeLimit}</Text> */}
        </Card>
        <CustomButton
          title="start"
          bordered
          color={colors.primaryDark}
          fontSize={24}
          onPress={() => onHasBegun(true)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  preStartScreen: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  settingsTextContainer: {
    marginBottom: Dimensions.get("window").height > 500 ? 30 : 20,
  },
  settingsText: {
    fontFamily: "open-sans-bold",
    color: colors.primaryDark,
    fontSize: Dimensions.get("window").height > 500 ? 32 : 18,
  },
});
