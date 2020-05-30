import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function InitialPage() {
  return (
    <View style={styles.container}>
      <Text>Piaui é do piaui</Text>
    </View>
  );
}
