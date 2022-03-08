import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";

import colors from "../constants/colors";

export default function CustomHeaderButton(props) {
  return (
    <HeaderButton
      iconSize={23}
      {...props}
      IconComponent={props.IconComponent}
      color={Platform.OS === "android" ? "white" : colors.primaryDark}
    />
  );
}
