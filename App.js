import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, ScrollView, View } from "react-native";

export default () => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [100, 200],
    outputRange: [-100, 0],
    extrapolate: "clamp"
  });
  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: "tomato",
          transform: [
            {
              translateY: translation,
            },
          ],
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text 
            style={{
              fontSize: 50,
            }}
          >Header</Text>
        </View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrolling } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1500 }} />
      </Animated.ScrollView>
    </>
  );
};
