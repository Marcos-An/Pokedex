import React, { useEffect, useState } from "react";
import { View, Animated, Easing, Text } from "react-native";

const Loading = () => {
  const [spinAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.1,
      }}
    >
      <Animated.Image
        style={{
          height: 50,
          width: 50,
          transform: [{ rotate: spin }],
        }}
        source={require("../assets/pokeball-black.png")}
      />
      <Text
        style={{
          marginTop: 10,
        }}
      >
        Loading...
      </Text>
    </View>
  );
};

export default Loading;
