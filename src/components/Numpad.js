import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import NumpadButton from "./NumpadButton";

import colors from "../constants/colors";

export default function Numpad({ onNumber, onDelete, onClear, onNext }) {
  return (
    <Grid style={styles.numpad}>
      <Col styles={styles.column}>
        <Row style={styles.row}>
          <NumpadButton value={1} onPress={onNumber} />
          <NumpadButton value={2} onPress={onNumber} />
          <NumpadButton value={3} onPress={onNumber} />
          <NumpadButton
            value={"DELETE"}
            onPress={onDelete}
            color={"white"}
            textColor={colors.primaryDark}
          />
        </Row>
        <Row style={styles.row}>
          <NumpadButton value={4} onPress={onNumber} />
          <NumpadButton value={5} onPress={onNumber} />
          <NumpadButton value={6} onPress={onNumber} />
          <NumpadButton
            value={"CLEAR"}
            onPress={onClear}
            color={"white"}
            textColor={colors.primaryDark}
          />
        </Row>
        <Row style={styles.row}>
          <NumpadButton value={7} onPress={onNumber} />
          <NumpadButton value={8} onPress={onNumber} />
          <NumpadButton value={9} onPress={onNumber} />
          <NumpadButton
            value={"NEXT"}
            onPress={onNext}
            color={colors.primary}
          />
        </Row>
        <Row style={styles.row}>
          <NumpadButton
            value={""}
            onPress={() => {}}
            color={colors.primaryLight}
            borderColor={colors.primaryLight}
          />
          <NumpadButton value={0} onPress={onNumber} />
          <NumpadButton
            value={""}
            onPress={() => {}}
            color={colors.primaryLight}
            borderColor={colors.primaryLight}
          />
          <NumpadButton value={"."} onPress={onNumber} />
        </Row>
      </Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  numpad: {
    backgroundColor: colors.primaryLight,
  },
  column: { justifyContent: "space-around" },
  row: { justifyContent: "space-around" },
});
