import React, { useRef, useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";

const AnimatedView_height = ({
  children,
  style,
  duration = 200,
  toHeight = 200,
}) => {
  const anim = useRef(new Animated.Value(10)).current; // Initial value for opacity: 0

  const [value, setValue] = useState(null);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: toHeight,
      duration: duration,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setValue(children);
    }, 15);

    return () => anim.setValue(10);
  }, [children]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        overflow: "hidden",
        height: anim, // Bind scale to animated value
      }}
    >
      {value}
    </Animated.View>
  );
};

export default AnimatedView_height;
