import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Comp from "./components/Comp";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert("Hello World!")}
      >
        <Text style={styles.btnText}>ahoj</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCounter(counter + 10)}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCounter(counter - 10)}
      >
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <Comp text={counter} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ddd",
    color: "#000",
  },
  btnText: {
    fontSize: 20,
  },
});
