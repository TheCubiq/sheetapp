import React, { useState } from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};


const MyBottomSheet2 = (show) => {
  const [open, setOpen] = useState(show);

  
  const dimensions = useWindowDimensions();

  const top = useSharedValue(dimensions.height-200);

  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > dimensions.height / 2 + 200) {
        top.value = dimensions.height - 100;
      } else if (top.value < dimensions.height / 2 - 200) {
        top.value = 0;
      } else {
        top.value = dimensions.height / 2;
      }
    },
  });
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.btsheed, style]}>
        <Text
          style={{
            color: "white",
            fontSize: 40,
          }}
        >
          Sheet
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default MyBottomSheet2;

const styles = StyleSheet.create({});
