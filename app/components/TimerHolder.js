import React, { useRef } from "react";
import { Easing, StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import colors from "../config/colors";

function TimerHolder({ setTimerRef, children, time = 4000 }) {
  const circularComponent = useRef(null);
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        ref={circularComponent}
        size={280}
        width={10}
        fill={100}
        easing={Easing.linear}
        tintColor={colors.white}
        tintColorSecondary={colors.extra_light}
        backgroundColor="rgba(255,2555,255,0.3)"
        duration={time}
        prefill={0}
        onFillChange={() => setTimerRef(circularComponent.current)}
        arcSweepAngle={180}
        rotation={270}
        lineCap="butt"
        tintTransparency={false}
      >
        {(fill) => {
          return (
            <View style={{ width: "100%", height: "100%" }}>{children}</View>
          );
        }}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimerHolder;
