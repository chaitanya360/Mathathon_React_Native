import React from "react";
import { View } from "react-native";
import Background from "./Background";
import QandA from "./QandA";

function GameScreen() {
  return (
    //anim's background is determined in <background>
    <>
      <Background />
      <View style={{ paddingTop: "8%", flex: 1 }}>
        <QandA />
      </View>
    </>
  );
}

export default GameScreen;
