import React from "react";
import { Text, StyleSheet, useWindowDimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const MyBottomSheet = () => {
  const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  };

  const dimensions = useWindowDimensions();

  const top = useSharedValue(dimensions.height);

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

const styles = StyleSheet.create({
  btsheed: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#001e44",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
