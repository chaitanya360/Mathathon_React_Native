import React from "react";
import { Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";

function Starting() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(225,50,210,0)",
      }}
    >
      <LottieView
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height - 500,
        }}
        source={require("../assets/anims/countdown")}
        autoPlay
        loop
      />
    </View>
  );
}

export default Starting;
