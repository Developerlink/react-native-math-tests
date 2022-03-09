import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Card from "./Card";

import colors from "../constants/colors";

export default function NumpadButton({ value = 0, onPress, color = colors.primaryDark, textColor = "white", borderColor = colors.primary }) {
  return (
    <TouchableOpacity onPress={() => onPress(value)} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color, borderColor: borderColor }}>
        <Text style={{...styles.text, color: textColor}}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.22,
    borderRadius: 10,
    borderWidth: 4,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: Dimensions.get("window").width > 500 ? 24 : 14,
    alignSelf: "center"
  },
});
