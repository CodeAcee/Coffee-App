import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(66, 183, 125, 0.15)",
    paddingVertical: 20,
    marginHorizontal: 28,
    marginVertical: 10,
    borderRadius: 20,
    width: 260,
  },
  pressed: {
    backgroundColor: "rgba(66, 183, 125, 1)",
  },
  text: {
    color: "rgba(66, 183, 125, 1)",
    fontFamily: "Metropolis",
    fontSize: 18,
  },
});
