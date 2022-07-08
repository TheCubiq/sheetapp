import React, { useState, useEffect } from "react";
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


const MyBottomSheet = (props) => {
  const dimensions = useWindowDimensions();
  const top = useSharedValue(dimensions.height);
  const hdIcWidth = useSharedValue(70);

  useEffect(() => {
    top.value = props.show ? dimensions.height/2 : dimensions.height;
  });


  const sheetStyle = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  const headerStyle = useAnimatedStyle (() => {
    return {
      width: withSpring(hdIcWidth.value, SPRING_CONFIG),
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      hdIcWidth.value = 30;
      const finger_pos = context.startTop + event.translationY;
      
      if (finger_pos < dimensions.height-80) {
        top.value = finger_pos;
      }
    },
    onEnd() {
      hdIcWidth.value = 70;
      if (top.value > dimensions.height / 2 + 200) {
        top.value = dimensions.height - 100;
        // console.log("minimalized");
      } else if (top.value < dimensions.height / 2 - 200) {
        top.value = 130;
        // console.log("fullscreen");
        hdIcWidth.value = dimensions.width/3;
      } else {
        top.value = dimensions.height / 2;
        // console.log("half");
      }
    },
  });
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.btsheet, sheetStyle]}>
        <Animated.View style={[styles.header, headerStyle]}/>
        {props.children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  btsheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#b375e2ff",
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
  header: {
    position: "absolute",
    backgroundColor: "#ffffff",
    opacity:0.80,
    height: 10,
    top: 10,
    borderRadius: 10,
  }
});
