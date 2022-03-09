import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Numpad from "../components/Numpad";

import colors from "../constants/colors";

const DUMMY_LIST = [
  {
    numberA: 255,
    numberB: 47,
    answer: 302,
    input: ""
  },
  {
    numberA: 165,
    numberB: 47,
    answer: 212,
    input: ""
  },
  {
    numberA: 97,
    numberB: 32,
    answer: 129,
    input: ""
  }
]

export default function PostStartScreen({
  problemText = "34 + 64",
  answer = "266",
  onNumber,
  onDelete,
  onClear,
  onNext,
}) {
  return (
    <View style={styles.postStartScreen}>
      <View
        style={{ ...styles.problemContainer, ...styles.problemContainerBorder }}
      >
        <View>
          <Text style={styles.problemText}>{problemText}</Text>
        </View>
      </View>
      <View style={{ ...styles.problemContainer, ...styles.answerContainer }}>
        <View>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      </View>
      <View style={styles.numPadContainer}>
        <Numpad
          onNumber={onNumber}
          onDelete={onDelete}
          onClear={onClear}
          onNext={onNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postStartScreen: {
    flex: 1,
    backgroundColor: colors.softWhite,
  },
  problemContainer: {
    flex: 2,
    backgroundColor: colors.softWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  problemContainerBorder: {
    marginHorizontal: Dimensions.get("window").width > 500 ? 100 : 60,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryDark,
  },
  problemText: {
    fontSize: Dimensions.get("window").height > 500 ? 64 : 32,
    fontFamily: "open-sans-bold",
    color: colors.primaryLight,
  },
  answerContainer: {
    flex: 1,
  },
  answerText: {
    fontSize: Dimensions.get("window").height > 500 ? 64 : 32,
    fontFamily: "open-sans-bold",
    color: colors.secondary,
  },
  numPadContainer: {
    flex: Dimensions.get("window").height > 500 ? 1 : 2,
    backgroundColor: colors.primaryDark,
  },
});
