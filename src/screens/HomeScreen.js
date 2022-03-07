import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import CustomButton from "../components/CustomButton";

import colors from "../constants/colors";

export default function HomeScreen({ navigation, route }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

        <CustomButton
          title="Addition"
          rounded
          bordered
        />

      <View style={styles.button}>
        <CustomButton
          title="Subtraction"
          type="outlined"
          rounded
          bordered
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          title="Multiplication"
          color={colors.primary}
          bordered
          />
      </View>
      <View style={styles.button}>
        <CustomButton
          title="Division"
          type="outlined"
          color={colors.primary}
          bordered
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          title="Mixed"
          color={colors.primaryDark}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 80,
  },
  button: {marginVertical: 10}
});
