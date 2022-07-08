import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Platform,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MyBottomSheet from "./components/MyBottomSheet";

export default () => {
  const [showsheet, setShowSheet] = useState(false);
  return (
    <>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <StatusBar hidden={true} />
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setShowSheet(!showsheet);
            }}
          >
            <Text style={styles.btnText}>ToggleBottomSheet</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <MyBottomSheet show={showsheet}>
          <TouchableOpacity
            onPress={() => {
              console.log("ily");
              Alert.alert(
                "ily",
                "I Love Ya",
                [
                  {
                    text: "Ok lol",
                    style: "cancel",
                  },
                  {
                    text: "No ya don't",
                    onPress: () => alert("Yes I do"),
                  },
                  { text: "LY Too" },
                ],
                { cancelable: false }
              );
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 50,
                fontWeight: "bold",
              }}
            >
              Click me
            </Text>
          </TouchableOpacity>
        </MyBottomSheet>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#131313",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  btn: {
    backgroundColor: "#b375e2ff",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 24,
    color: "#fff",
  },
});
