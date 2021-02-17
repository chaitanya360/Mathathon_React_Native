import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import AnimatedView from "../animations/AnimatedView";
import colors from "../config/colors";

function Option({ option, onPress }) {
  return (
    <TouchableHighlight
      style={styles.option}
      onPress={() => onPress(option)}
      activeOpacity={0.1}
      underlayColor="rgba(100,2,3,0.3)"
    >
      <AnimatedView change={option}>
        <Text style={styles.text}>{option}</Text>
      </AnimatedView>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {},
  option: {
    borderWidth: 2,
    width: 80,
    height: 60,
    borderRadius: 30,
    borderColor: colors.dark,
    backgroundColor: colors.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontFamily: "Andika_400Regular",
  },
});

export default Option;
