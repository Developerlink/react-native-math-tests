import React from "react";
import {View, StyleSheet} from "react-native";

export default function NavigationIcon(props){
    return <View style={styles.icon}>
        {props.children}
        </View>
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      },
})