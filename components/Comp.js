import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Comp = (props) => {
  return <Text style={styles.cntText}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  cntText: {
    fontSize: 40,
  },
});

export default Comp;
