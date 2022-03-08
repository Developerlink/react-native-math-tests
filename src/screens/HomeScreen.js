import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import NavigationIcon from "../components/NavigationIcon";
import CustomButton from "../components/CustomButton";

import colors from "../constants/colors";

export default function HomeScreen({ navigation, route }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.buttonGroup}>
        <NavigationIcon>
          <MaterialIcons name="add" size={50} color={colors.primaryDark} />
        </NavigationIcon>
        <CustomButton
          title="Addition"
          bordered
          color={colors.primaryDark}
          onPress={() => navigation.navigate("/testing", { testType: "+" })}
        />
      </View>
      <View style={styles.buttonGroup}>
        <NavigationIcon>
          <MaterialCommunityIcons
            name="minus"
            size={50}
            color={colors.primaryDark}
          />
        </NavigationIcon>
        <CustomButton
          title="Subtraction"
          bordered
          color={colors.primaryDark}
          onPress={() => navigation.navigate("/testing", { testType: "-" })}
        />
      </View>
      <View style={styles.buttonGroup}>
        <NavigationIcon>
          <Feather name="x" size={50} color={colors.primaryDark} />
        </NavigationIcon>
        <CustomButton
          title="Multiplication"
          color={colors.primaryDark}
          bordered
          onPress={() => navigation.navigate("/testing", { testType: "x" })}
        />
      </View>
      <View style={styles.buttonGroup}>
        <NavigationIcon>
          <MaterialCommunityIcons
            name="division"
            size={50}
            color={colors.primaryDark}
          />
        </NavigationIcon>
        <CustomButton
          title="Division"
          bordered
          color={colors.primaryDark}
          onPress={() => navigation.navigate("/testing", { testType: "/" })}
        />
      </View>
      <View style={styles.buttonGroup}>
        <NavigationIcon>
          <MaterialCommunityIcons
            name="calculator-variant"
            size={50}
            color={colors.primaryDark}
          />
        </NavigationIcon>
        <CustomButton
          title="Mixed"
          bordered
          color={colors.primaryDark}
          onPress={() => navigation.navigate("/testing", { testType: "&" })}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: Dimensions.get("window").height > 500 ? 80 : 40,
    backgroundColor: colors.primaryLight,
  },
  buttonGroup: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
});
