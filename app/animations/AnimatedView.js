import React, { useRef, useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";

const AnimatedView = ({ children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const [value, setValue] = useState(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setValue(children);
    }, 15);

    return () => fadeAnim.setValue(0);
  }, [children]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        scaleX: fadeAnim, // Bind scale to animated value
        scaleY: fadeAnim,
      }}
    >
      {value}
    </Animated.View>
  );
};

export default AnimatedView;
