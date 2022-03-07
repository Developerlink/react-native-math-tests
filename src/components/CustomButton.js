import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import colors from "../constants/colors";

const width = Dimensions.get("window").width;

export default function CustomButton({
  title,
  onPress,
  type = "filled",
  rounded = false,
  size = "large",
  color = colors.primaryLight,
  bordered = false
}) {
  const large = width / 1.3;
  const small = width / 2;
  const btnSize = size === "large" ? large : small;
  const btnBgColor = type === "filled" ? color : "transparent";
  const containerBgColor = type === "filled" ? color : "transparent" ;  
  const btnTextColor = type === "filled" ? "#ffffff" : color;
  const btnBorderRadius = rounded ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    borderRadius: btnBorderRadius,
  };

  const containerOuterStyle = {
    backgroundColor: containerBgColor,
    padding: type === "filled" ? 2 : 0,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  };

  const border = bordered && {
    borderColor: type === "filled" ? "white" : color,
    borderWidth: 2,
  };

  const containerBorder = type === "filled" && {
    borderColor: color,
    borderWidth: 2,
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerOuterStyle, containerBorder]}>
        <View style={[containerCommonStyle, border]}>
          <Text style={[textCommonStyle]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
