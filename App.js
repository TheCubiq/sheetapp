import React from "react";
import {
  Button,
  View,
  StyleSheet,
} from "react-native";
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import MyBottomSheet2 from "./components/MyBottomSheet2";



export default () => {
  const [showsheet, setShowSheet] = React.useState(false);
  return (
    <>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          
          <Button
            title="Open sheet"
            color={"#b103b4"}

            onPress={() => {
              setShowSheet(true);
            }}
          />
        </View>
        <MyBottomSheet2 show={showsheet}/>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
