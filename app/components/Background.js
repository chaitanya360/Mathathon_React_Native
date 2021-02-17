import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Background() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("window").height + 500,
    zIndex: -1,
    backgroundColor: colors.primary,
  },
});

export default Background;
